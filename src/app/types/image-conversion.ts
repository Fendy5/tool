/**
 * @Author fendy
 * @CreateTime 2023/7/6 15:58
 * @Description
 */
export interface ImageConversionFormProp {
  imageUrl: string
  targetType?: string
  size?: number | undefined
  compressionRate: number
}
