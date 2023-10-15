/**
 * @Author fendy
 * @CreateTime 2023/6/16 17:07
 * @Description
 */
import { ReactElement } from 'react'
import { IconFont } from '@/utils'

export interface RouterConfig {
  path: string
  title?: string
  hidden?: boolean
  getIcon: (fontSize?: string) => React.ReactNode
  element?: ReactElement<any, any>
  desc: string
  children?: RouterConfig[]
}

export const routes: RouterConfig[] = [
  {
    path: '/dashboard',
    title: '首页',
    desc: '首页',
    getIcon: (fontSize) => <IconFont style={{ fontSize }} type={'icon-home'} />
  },
  {
    path: '/random-string',
    title: '随机字符串',
    desc: '可随机生成大小写字母、特殊字符、数字类型组合的字符串',
    getIcon: (fontSize) => <IconFont style={{ fontSize }} type={'icon-Field-String'} />
  },
  {
    path: '/base-conversion',
    title: '进制转换',
    desc: '可在二进制、八进制、十进制、十六进制之间相互转换',
    getIcon: (fontSize) => <IconFont style={{ fontSize }} type={'icon-Field-Binary'} />
  },
  {
    path: '/image-conversion',
    title: '图片格式转换',
    desc: '可将图片格式转换成png、ico、jpg、webp、bmp',
    getIcon: (fontSize) => <IconFont style={{ fontSize }} type={'icon-image'} />
  },
  {
    path: '/color-binary-transform',
    title: '颜色进制转换',
    desc: '16进制颜色转换',
    getIcon: (fontSize) => <IconFont style={{ fontSize }} type={'icon-color'} />
  }
  // {
  //   path: '/batch-image-compression',
  //   title: '批量压缩图片',
  //   desc: '批量压缩图片，可一键打包下载所有图片',
  //   getIcon: (fontSize) => <IconFont style={{ fontSize }} type={'icon-wenjian_yasuobao'} />
  // }
]
