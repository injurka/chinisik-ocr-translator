import type { Ref } from 'vue'
import type { LexicalAnalysisResult } from '~/shared/api/services/all/types/provider'
import type { QuestionForAnswerMessage, TranslationResult } from '~/shared/types'
import { onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import browser from 'webextension-polyfill'
import { dataURLtoBlob } from '~/shared/utils/helpers'
import { questionPrompt } from '~/shared/utils/prompt'

/**
 * Хук для управления функциями перевода: лексический анализ, вопросы и ответы, синтез речи.
 * @param data - Реактивная ссылка на данные перевода.
 */
export function useTranslateFeatures(data: Ref<TranslationResult>) {
  const { t } = useI18n()

  // --- Состояние для лексического анализа ---
  const isLexicalAnalysisModalVisible = ref(false)
  const lexicalAnalysisData = ref<string | null>(null)
  const isLexicalAnalysisLoading = ref(false)
  const lexicalAnalysisError = ref<string | null>(null)

  // --- Состояние для аудио ---
  const audioPlayer = ref<HTMLAudioElement | null>(null)
  const isSoundLoading = ref(false)
  const soundError = ref<string | null>(null)

  // --- Состояние для вопросов и ответов ---
  const isQuestionAnswerModalVisible = ref(false)
  const questionAnswerData = ref<string | null>(null)
  const isQuestionAnswerLoading = ref(false)
  const questionAnswerError = ref<string | null>(null)

  // --- Функции для модального окна вопросов и ответов ---
  function openQuestionAnswerModal() {
    questionAnswerData.value = null
    questionAnswerError.value = null
    isQuestionAnswerModalVisible.value = true
  }

  async function handleSubmitQuestion(question: string) {
    if (!data.value?.source || !data.value?.translate || isQuestionAnswerLoading.value)
      return

    isQuestionAnswerLoading.value = true
    questionAnswerData.value = null
    questionAnswerError.value = null

    try {
      const message: QuestionForAnswerMessage = {
        action: 'questionForAnswer',
        userPrompt: question,
        systemPrompt: questionPrompt(data.value.source, data.value.translate),
      }
      const response: { data?: string, error?: string } = await browser.runtime.sendMessage(message)

      if (response.error)
        throw new Error(response.error)

      questionAnswerData.value = response.data || null
    }
    catch (error: any) {
      console.error('Ошибка при запросе ответа на вопрос:', error)
      questionAnswerError.value = error.message || t('content.qaRequestError')
      questionAnswerData.value = null
    }
    finally {
      isQuestionAnswerLoading.value = false
    }
  }

  // --- Функция для синтеза речи ---
  async function soundSource() {
    if (!data.value?.source || isSoundLoading.value)
      return

    isSoundLoading.value = true
    soundError.value = null
    try {
      const response: { audioDataUrl?: string, error?: string } | undefined = await browser.runtime.sendMessage({
        action: 'textToSpeech',
        text: data.value.source,
      })

      if (response?.audioDataUrl) {
        const audioBlob = dataURLtoBlob(response.audioDataUrl)

        if (audioPlayer.value)
          URL.revokeObjectURL(audioPlayer.value.src)
        else
          audioPlayer.value = new Audio()

        const objectUrl = URL.createObjectURL(audioBlob)
        audioPlayer.value.src = objectUrl
        audioPlayer.value.play()
        audioPlayer.value.onended = () => URL.revokeObjectURL(objectUrl)
        audioPlayer.value.onerror = (e) => {
          console.error('Error playing audio:', e)
          soundError.value = t('content.audioPlaybackError')
          URL.revokeObjectURL(objectUrl)
        }
      }
      else if (response?.error) {
        throw new Error(response.error)
      }
      else {
        throw new Error(t('content.audioFetchError'))
      }
    }
    catch (error: any) {
      console.error('Error fetching or playing sound:', error)
      soundError.value = error.message || t('content.speechSynthesisError')
    }
    finally {
      isSoundLoading.value = false
    }
  }

  // --- Функция для лексического анализа ---
  async function handleLexicalAnalysis() {
    if (!data.value?.source || isLexicalAnalysisLoading.value)
      return

    isLexicalAnalysisLoading.value = true
    lexicalAnalysisData.value = null
    lexicalAnalysisError.value = null

    try {
      const response: { data: LexicalAnalysisResult } = await browser.runtime.sendMessage({
        action: 'getLexicalAnalysis',
        sentence: data.value.source,
      })
      lexicalAnalysisData.value = response?.data || null
      isLexicalAnalysisModalVisible.value = true
    }
    catch (error: any) {
      console.error('Ошибка при запросе лексического анализа:', error)
      lexicalAnalysisError.value = error.message || t('content.lexicalAnalysisError')
      isLexicalAnalysisModalVisible.value = true
    }
    finally {
      isLexicalAnalysisLoading.value = false
    }
  }

  // Очистка ресурсов при размонтировании компонента, использующего хук
  onUnmounted(() => {
    if (audioPlayer.value) {
      audioPlayer.value.pause()
      if (audioPlayer.value.src && audioPlayer.value.src.startsWith('blob:'))
        URL.revokeObjectURL(audioPlayer.value.src)

      audioPlayer.value = null
    }
  })

  return {
    // Лексический анализ
    isLexicalAnalysisModalVisible,
    lexicalAnalysisData,
    isLexicalAnalysisLoading,
    lexicalAnalysisError,
    handleLexicalAnalysis,

    // Синтез речи
    isSoundLoading,
    soundError,
    soundSource,

    // Вопросы и ответы
    isQuestionAnswerModalVisible,
    questionAnswerData,
    isQuestionAnswerLoading,
    questionAnswerError,
    openQuestionAnswerModal,
    handleSubmitQuestion,
  }
}
