import type { BaseProviderConfig, ChinisikConfig } from '../../config'
import type { ITranslationProvider, TranslateRequestParams } from '../../types'
import type { TranslationResult } from '~/shared/types'
import { $fetch, FetchError } from 'ofetch'
import { dataURLtoBlob } from '../../../../../utils/helpers'
import { CHINISIK_DEFAULT_API_URL } from './config'

export class ChinisikProvider implements ITranslationProvider {
  public async translate(
    params: TranslateRequestParams,
    baseConfig: BaseProviderConfig,
  ): Promise<TranslationResult> {
    const chinisikSpecificConfig: ChinisikConfig = {
      apiKey: baseConfig.apiKey || '',
      apiUrl: baseConfig.apiUrl || CHINISIK_DEFAULT_API_URL,
    }

    if (!chinisikSpecificConfig.apiKey) {
      throw new Error('Chinisik API key is missing or empty.')
    }

    const { imageDataUrl } = params
    const { apiKey, apiUrl } = chinisikSpecificConfig

    const blob = dataURLtoBlob(imageDataUrl)
    const formData = new FormData()
    formData.append('image', blob, 'screenshot.png')

    try {
      const data = await $fetch<any>(apiUrl, {
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
        let errorMessage = `Chinisik API error: ${status} ${statusText}`
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
          console.error('Chinisik API Error Full Response Data:', responseData)
        }
        throw new Error(errorMessage)
      }
      if (error instanceof Error) {
        throw error
      }
      console.error('Unknown API error in ChinisikProvider:', error)
      throw new Error('Unknown error during Chinisik API request')
    }
  }
}
