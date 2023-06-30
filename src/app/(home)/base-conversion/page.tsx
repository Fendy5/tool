/**
 * @Author fendy
 * @CreateTime 2023/6/14 22:20
 * @Description
 */
import ClientOnly from '@/components/ClientOnly'
import BaseConversion from '@/app/(home)/base-conversion/BaseConversion'

export const metadata = {
  title: '二进制转换',
  description: '进制转换 二进制转换、八进制转换、十六进制转换'
}

export default function Page() {
  return (
    <ClientOnly>
      <BaseConversion />
    </ClientOnly>
  )
}
