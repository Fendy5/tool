/**
 * @Author fendy
 * @CreateTime 2023/10/12 21:02
 * @Description
 */
'use client'
import { Button, Input, message } from 'antd'
import Image from 'next/image'
import Red from '@/assets/svg/red.svg'
import Green from '@/assets/svg/green.svg'
import Blue from '@/assets/svg/blue.svg'
import { useState } from 'react'
import { copyText } from '@/utils'

export default function ColorBinaryTransform() {
  // 0，rgbToHex || 1，hexToRgb
  const [isRgbToHex, setIsRgbToHex] = useState(true)
  const [color, setColor] = useState('')
  const [hex, setHex] = useState('')
  const [r, setR] = useState<number>()
  const [g, setG] = useState<number>()
  const [b, setB] = useState<number>()

  const hexToRgb = (hex: string) => {
    // 去除可能包含的 # 符号
    hex = hex.replace(/^#/, '')
    const hexLen = hex.length
    if (hexLen && (hexLen == 3 || hexLen == 6)) {
      // 如果hex值是缩写形式（例如#FFF），将其扩展为6位
      if (hexLen === 3) {
        hex = hex
          .split('')
          .map((char) => char + char)
          .join('')
      }
      // 将hex转换为RGB
      const r = parseInt(hex.slice(0, 2), 16)
      const g = parseInt(hex.slice(2, 4), 16)
      const b = parseInt(hex.slice(4, 6), 16)

      setColor(`rgb(${r}, ${g}, ${b})`)
    } else {
      message.error('请输入正确的HEX值')
    }
  }

  const rgbToHex = (r: number | undefined, g: number | undefined, b: number | undefined) => {
    console.log(r, g, b)
    if (r && g && b) {
      // 确保颜色分量在合法范围内
      r = Math.max(0, Math.min(255, r))
      g = Math.max(0, Math.min(255, g))
      b = Math.max(0, Math.min(255, b))
      setColor('#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase())
    } else {
      message.error('请输入正确的RGB值')
    }
  }

  const resEle = color ? (
    <>
      <div className="text-center mt-6 text-xl">{color}</div>
      <div
        className="w-16 h-16 mx-auto mt-1.5 cursor-pointer"
        onClick={() => {
          const res = copyText(color)
          res && message.success('复制成功')
        }}
        style={{ background: color }}></div>
    </>
  ) : (
    ''
  )

  const rgbToHexEle = (
    <div className="absolute-center w-5/6 md:w-[36rem]">
      <div className="card">
        <div className="text-center text-2xl font-bold mb-6">RGB To HEX</div>
        <div className="md:flex justify-around">
          <Input
            onChange={(e) => {
              console.log('999', e)
              setR(Number(e.target.value))
            }}
            className="w-full md:w-36 mb-4"
            placeholder="0~255"
            prefix={<Image src={Red} alt={''} />}
          />
          <Input
            onChange={(e) => {
              setG(Number(e.target.value))
            }}
            className="w-full md:w-36 mb-4"
            placeholder="0~255"
            prefix={<Image src={Green} alt={''} />}
          />
          <Input
            onChange={(e) => {
              setB(Number(e.target.value))
            }}
            className="w-full md:w-36 mb-4"
            placeholder="0~255"
            prefix={<Image src={Blue} alt={''} />}
          />
        </div>
        <div className=" flex justify-center mt-4">
          <Button
            onClick={() => {
              rgbToHex(r, g, b)
            }}
            type="primary"
            htmlType="submit"
            className="mr-4">
            转换
          </Button>
          <Button
            onClick={() => {
              setIsRgbToHex(false)
              setHex('')
              setColor('')
            }}>
            交换
          </Button>
        </div>
        {resEle}
      </div>
    </div>
  )

  const hexToRgbEle = (
    <div className="absolute-center w-5/6 md:w-[36rem]">
      <div className="card">
        <div className="text-center text-2xl font-bold mb-6">HEX To RGB</div>
        <div className="text-center">
          <Input
            style={{ width: '200px' }}
            value={hex}
            onChange={(e) => {
              setHex(e.target.value)
            }}
            placeholder="#000000"
          />
        </div>
        <div className=" flex justify-center mt-4">
          <Button
            onClick={() => {
              hexToRgb(hex)
            }}
            type="primary"
            htmlType="submit"
            className="mr-4">
            转换
          </Button>
          <Button
            onClick={() => {
              setIsRgbToHex(true)
              setColor('')
              setHex('')
              setR(undefined)
              setG(undefined)
              setB(undefined)
            }}>
            交换
          </Button>
        </div>
        {resEle}
      </div>
    </div>
  )

  return isRgbToHex ? rgbToHexEle : hexToRgbEle
}
