/**
 * @Author fendy
 * @CreateTime 2023/6/15 23:08
 * @Description
 */
import ClientOnly from '@/components/ClientOnly'
import ImageConversion from '@/app/(home)/image-conversion/ImageConversion'

export const metadata = {
  title: '图片格式转换',
  description: 'jpg转换 png转换、svg转换、icon转换'
}

export default function Page() {
  return (
    <ClientOnly>
      <ImageConversion />
    </ClientOnly>
  )
}
