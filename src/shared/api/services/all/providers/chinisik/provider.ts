import type { BaseProviderConfig, ChinisikConfig } from '../../config'
import type { InlineTextTranslateResult, ITranslationProvider, LexicalAnalysisRequestParams, LexicalAnalysisResult, QuestionForAnswerRequestParams, QuestionForAnswerResult, TextToSpeechRequestParams, TextToSpeechResult, TranslateRequestParams } from '../../types'
import type { TranslationResult } from '~/shared/types'
import { $fetch, FetchError } from 'ofetch'
import { dataURLtoBlob } from '../../../../../utils/helpers'
import { CHINISIK_DEFAULT_API_URL } from './config'

export class ChinisikProvider implements ITranslationProvider {
  private async rawLlm<T>(config: ChinisikConfig, prompt: { user: string, system: string }): Promise<T> {
    const { apiKey, apiUrl } = config

    const data = await $fetch<T>(`${apiUrl}/llvm/raw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: {
        ...prompt,
      },
    })

    return data
  }

  public async translate(
    params: TranslateRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<TranslationResult> {
    const chinisikSpecificConfig: ChinisikConfig = {
      apiKey: baseConfig.apiKey || '',
      apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
    }

    const { imageDataUrl } = params
    const { apiKey, apiUrl } = chinisikSpecificConfig

    const blob = dataURLtoBlob(imageDataUrl)
    const formData = new FormData()
    formData.append('image', blob, 'screenshot.png')

    try {
      const data = await $fetch<TranslationResult>(`${apiUrl}/llvm/image-to-text-translate`, {
        method: 'POST',
        headers: { Authorization: apiKey },
        body: formData,
      })

      if (data === undefined) {
        throw new Error('Could not extract translation from Chinisik API response.')
      }

      return data
    }
    catch (error) {
      if (error instanceof FetchError) {
        const status = error.response?.status || 'Unknown'
        const statusText = error.response?.statusText || 'Unknown Error'
        let errorMessage = `Chinisik API translation error: ${status} ${statusText}`
        const responseData = error.data || error.response?._data

        if (responseData) {
          if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
            errorMessage += ` - Response: ${responseData}`
          }
          else if (typeof responseData === 'object' && responseData !== null) {
            const rd = responseData as Record<string, any>
            if (rd.message)
              errorMessage += ` - ${rd.message}`
            else if (rd.detail)
              errorMessage += ` - ${rd.detail}`
            else if (rd.error)
              errorMessage += ` - ${rd.error}`
          }
          console.error('Chinisik API Translation Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw error
      }
      console.error('Unknown API error in ChinisikProvider (translate):', error)
      throw new Error('Unknown error during Chinisik API translation request')
    }
  }

  public async analyzeLexically(
    params: LexicalAnalysisRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<LexicalAnalysisResult> {
    const chinisikSpecificConfig: ChinisikConfig = {
      apiKey: baseConfig.apiKey || '',
      apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
    }

    try {
      const data = this.rawLlm<LexicalAnalysisResult>(
        chinisikSpecificConfig,
        params,
      )

      if (data === undefined) {
        throw new Error('Could not extract lexical analysis from Chinisik API response.')
      }
      return data
    }
    catch (error) {
      if (error instanceof FetchError) {
        const status = error.response?.status || 'Unknown'
        const statusText = error.response?.statusText || 'Unknown Error'
        let errorMessage = `Chinisik API lexical analysis error: ${status} ${statusText}`
        const responseData = error.data || error.response?._data

        if (responseData) {
          if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
            errorMessage += ` - Response: ${responseData}`
          }
          else if (typeof responseData === 'object' && responseData !== null) {
            const rd = responseData as Record<string, any>
            if (rd.message)
              errorMessage += ` - ${rd.message}`
            else if (rd.detail)
              errorMessage += ` - ${rd.detail}`
            else if (rd.error)
              errorMessage += ` - ${rd.error}`
          }
          console.error('Chinisik API Lexical Analysis Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw error
      }
      console.error('Unknown API error in ChinisikProvider (analyzeLexically):', error)
      throw new Error('Unknown error during Chinisik API lexical analysis request')
    }
  }

  public async textToSpeech(
    params: TextToSpeechRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<TextToSpeechResult> {
    const chinisikSpecificConfig: ChinisikConfig = {
      apiKey: baseConfig.apiKey || '',
      apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
    }

    const { text, model = 'gpt-4o-mini-tts', voice = 'alloy', response_format = 'mp3', speed = 1 } = params
    const { apiKey, apiUrl } = chinisikSpecificConfig

    try {
      const audioBlob = await $fetch<Blob>(`${apiUrl}/llvm/text-to-speech`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'audio/mp3',
        },
        body: {
          text: text.replace(/\s+/g, ''),
          model,
          voice,
          response_format,
          speed,
        },
      })

      if (!(audioBlob instanceof Blob)) {
        console.error('TextToSpeech API did not return a Blob. Received:', audioBlob)
        throw new Error('TextToSpeech API did not return a valid audio Blob.')
      }
      if (audioBlob.type !== 'audio/mpeg' && audioBlob.type !== 'audio/mp3') {
        console.warn(`Expected audio/mpeg or audio/mp3 but received ${audioBlob.type}`)
      }

      return audioBlob
    }
    catch (error) {
      if (error instanceof FetchError) {
        const status = error.response?.status || 'Unknown'
        const statusText = error.response?.statusText || 'Unknown Error'
        let errorMessage = `Chinisik API text-to-speech error: ${status} ${statusText}`
        const responseData = error.data || error.response?._data

        if (responseData) {
          try {
            const errorJson = (typeof responseData === 'string' && (responseData.startsWith('{') || responseData.startsWith('['))) ? JSON.parse(responseData) : responseData
            if (typeof errorJson === 'object' && errorJson !== null) {
              if (errorJson.message)
                errorMessage += ` - ${errorJson.message}`
              else if (errorJson.detail)
                errorMessage += ` - ${errorJson.detail}`
              else if (errorJson.error)
                errorMessage += ` - ${errorJson.error}`
            }
            else if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
              errorMessage += ` - Response: ${responseData}`
            }
          }
          catch {
            if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
              errorMessage += ` - Response: ${responseData}`
            }
          }
          console.error('Chinisik API TextToSpeech Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw new TypeError(`ChinisikProvider textToSpeech failed: ${error.message}`)
      }
      console.error('Unknown API error in ChinisikProvider (textToSpeech):', error)
      throw new Error('Unknown error during Chinisik API text-to-speech request')
    }
  }

  public async inlineTextTranslate(
    params: LexicalAnalysisRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<InlineTextTranslateResult> {
    const chinisikSpecificConfig: ChinisikConfig = {
      apiKey: baseConfig.apiKey || '',
      apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
    }

    try {
      const data = this.rawLlm<LexicalAnalysisResult>(
        chinisikSpecificConfig,
        params,
      )

      if (data === undefined) {
        throw new Error('Could not extract lexical analysis from Chinisik API response.')
      }
      return data
    }
    catch (error) {
      if (error instanceof FetchError) {
        const status = error.response?.status || 'Unknown'
        const statusText = error.response?.statusText || 'Unknown Error'
        let errorMessage = `Chinisik API lexical analysis error: ${status} ${statusText}`
        const responseData = error.data || error.response?._data

        if (responseData) {
          if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
            errorMessage += ` - Response: ${responseData}`
          }
          else if (typeof responseData === 'object' && responseData !== null) {
            const rd = responseData as Record<string, any>
            if (rd.message)
              errorMessage += ` - ${rd.message}`
            else if (rd.detail)
              errorMessage += ` - ${rd.detail}`
            else if (rd.error)
              errorMessage += ` - ${rd.error}`
          }
          console.error('Chinisik API InlineTextTranslate Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw error
      }
      console.error('Unknown API error in ChinisikProvider (InlineTextTranslate):', error)
      throw new Error('Unknown error during Chinisik API InlineTextTranslate request')
    }
  }

  public async questionForAnswer(
    params: QuestionForAnswerRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<QuestionForAnswerResult> {
    const chinisikSpecificConfig: ChinisikConfig = {
      apiKey: baseConfig.apiKey || '',
      apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
    }

    try {
      const data = await this.rawLlm<QuestionForAnswerResult>(
        chinisikSpecificConfig,
        params,
      )

      if (data === undefined) {
        throw new Error('Could not extract answer from Chinisik API response.')
      }
      return data
    }
    catch (error) {
      if (error instanceof FetchError) {
        const status = error.response?.status || 'Unknown'
        const statusText = error.response?.statusText || 'Unknown Error'
        let errorMessage = `Chinisik API question for answer error: ${status} ${statusText}`
        const responseData = error.data || error.response?._data

        if (responseData) {
          if (typeof responseData === 'string' && responseData.length > 0 && responseData.length < 300) {
            errorMessage += ` - Response: ${responseData}`
          }
          else if (typeof responseData === 'object' && responseData !== null) {
            const rd = responseData as Record<string, any>
            if (rd.message)
              errorMessage += ` - ${rd.message}`
            else if (rd.detail)
              errorMessage += ` - ${rd.detail}`
            else if (rd.error)
              errorMessage += ` - ${rd.error}`
          }
          console.error('Chinisik API QuestionForAnswer Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw error
      }
      console.error('Unknown API error in ChinisikProvider (questionForAnswer):', error)
      throw new Error('Unknown error during Chinisik API question for answer request')
    }
  }
}
