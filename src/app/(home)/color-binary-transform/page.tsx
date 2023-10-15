/**
 * @Author fendy
 * @CreateTime 2023/10/2 23:03
 * @Description
 */
import ClientOnly from '@/components/ClientOnly'
import ColorBinaryTransform from '@/app/(home)/color-binary-transform/ColorBinaryTransform'

export const metadata = {
  title: '颜色进制转换',
  description: '颜色进制转换 rgb转16进制 rgb转hex'
}

export default function page() {
  return (
    <ClientOnly>
      <ColorBinaryTransform />
    </ClientOnly>
  )
}
