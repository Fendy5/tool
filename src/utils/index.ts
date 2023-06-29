'use client'

// 是否移动端
import { createFromIconfontCN } from '@ant-design/icons'

export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 768
  } else {
    return false
  }
}

export const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_1968175_o3urdd08ejb.js']
})
