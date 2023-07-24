import { ImageConversionFormProp } from '@/types/home/image-conversion'
import _fetch from '@/utils/_fetch'

export const imageConversionApi = async (data: ImageConversionFormProp) => {
  return _fetch.post<{ downloadId: string }>('/api/v1/image-conversion', data)
}

export const deleteImage = async (data: { imageId: string }) => {
  return _fetch.post<string>('/api/v1/delete-image', data)
}

export const downloadImage = async (imageId: string) => {
  return _fetch.download(`/api/v1/d/${imageId}`)
}
