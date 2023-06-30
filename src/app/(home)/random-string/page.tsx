'use client'

import { Form, Checkbox, Input, Button } from 'antd'
import { OptionsProp, FormProps, StringType } from '@/app/types/random-string'
import { useState } from 'react'

export default function Page() {
  const [form] = Form.useForm()
  const [res, setRes] = useState('结果')
  const defaultCheckedOptions = ['lowerCase', 'capital', 'number']
  const checkOptions: OptionsProp[] = [
    { label: '小写字母', value: 'lowerCase' },
    { label: '大写字母', value: 'capital' },
    { label: '特殊字符', value: 'special' },
    { label: '数字类型', value: 'number' }
  ]
  const onFinish = (value: FormProps) => {
    const str = value.checkedList.map((type) => StringType[type]).join('')
    let res = ''
    for (let i = 0; i < parseInt(value.len); i++) {
      res += str.charAt(Math.floor(Math.random() * str.length))
    }
    setRes(res)
  }
  return (
    <div className={'absolute-center max-w-[36rem] w-4/5'}>
      <div className="card">
        <div className="text-center text-2xl font-bold mb-6">产生随机字符串</div>
        <Form initialValues={{ checkedList: defaultCheckedOptions, len: 8 }} form={form} onFinish={onFinish}>
          <Form.Item name="checkedList">
            <Checkbox.Group className={'w-full grid grid-cols-2 gap-y-4 justify-items-center'} options={checkOptions} />
          </Form.Item>
          <div className={'my-4 mx-auto w-64'}>
            <Form.Item label="长度" name="len" rules={[{ required: true, message: '请输入字符串长度' }]}>
              <Input min={1} type={'number'} placeholder={'请输入字符串长度'} />
            </Form.Item>
          </div>
          <Form.Item className={'text-center'}>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
          <Form.Item className={'text-center'}>
            <span className={'text-primary px-4 py-2 bg-green-300 break-all rounded'}>{res}</span>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
