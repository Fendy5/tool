import './globals.css'
import '@/styles/antd.scss'
// import { Inter } from 'next/font/google'
// import Provider from '@/context/client-provider'
// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import React from 'react'
// import { getServerSession } from 'next-auth'
import StyledComponentsRegistry from '@/lib/AntdRegistry'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Fendy's Tool~",
  description: '随机字符串 图片格式转换 图片批量压缩 二进制转换'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
