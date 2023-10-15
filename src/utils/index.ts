'use client'

// 是否移动端
import { createFromIconfontCN } from '@ant-design/icons'
import { useEffect, useState } from 'react'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth
      setIsMobile(screenWidth < 768) // 设置阈值，小于 768px 为移动设备
    }

    // 检查是否在客户端环境下运行
    if (typeof window !== 'undefined') {
      handleResize() // 初始化时执行一次
      window.addEventListener('resize', handleResize) // 监听窗口大小变化
      return () => window.removeEventListener('resize', handleResize)
    }

    // 清除监听器
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return isMobile
}

export const IconFont = createFromIconfontCN({
  scriptUrl: '/iconfont/iconfont.js'
})

export const getRandomString = (length: number = 8) => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
  return result
}

// interface ResponseProp<T> {
//   code: number
//   data: T
//   msg: string
// }
// export const _fetch = async <T>(url: string, method?: string, data?: any) => {
//   try {
//     let response = null
//     if (method === 'post') {
//       response = await fetch(url, {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//         method
//       })
//     } else {
//       const getUrl = new URL(url)
//       getUrl.search = new URLSearchParams(data).toString()
//       response = await fetch(getUrl)
//     }
//     const responseJson = (await response.json()) as ResponseProp<T>
//     const { code, msg } = responseJson
//     if (msg) {
//       code === 1 && message.success(msg)
//       code === 0 && message.error(msg)
//     }
//     return responseJson
//   } catch (error) {
//     message.error(`网络错误，${error}`)
//     return {
//       code: 0,
//       data: '',
//       msg: ''
//     } as ResponseProp<T>
//   }
// }

// 复制文本到剪切板
export const copyText = (text: string) => {
  // 创建一个临时的<textarea>元素来存放要复制的文本
  const tempTextArea = document.createElement('textarea')
  tempTextArea.value = text

  // 将<textarea>元素添加到文档中
  document.body.appendChild(tempTextArea)

  // 选择<textarea>中的文本
  tempTextArea.select()

  // 尝试执行复制命令
  const copySuccessful = document.execCommand('copy')

  // 从文档中移除<textarea>元素
  document.body.removeChild(tempTextArea)

  return copySuccessful
}
