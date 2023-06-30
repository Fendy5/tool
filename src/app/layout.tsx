import './globals.css'
import '@/styles/antd.scss'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Fendy's Tool~",
  description: '随机字符串、图片格式转换、图片批量压缩、二进制转换'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
