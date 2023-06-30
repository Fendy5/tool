import RandomString from '@/app/(home)/random-string/RandomString'
import ClientOnly from '@/components/ClientOnly'

export const metadata = {
  title: '随机字符串',
  description: '随机字符串 字符串 特殊字符 数字类型'
}

export default function Page() {
  return (
    <ClientOnly>
      <RandomString />
    </ClientOnly>
  )
}
