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
  scriptUrl: ['//at.alicdn.com/t/c/font_1968175_o3urdd08ejb.js']
})
