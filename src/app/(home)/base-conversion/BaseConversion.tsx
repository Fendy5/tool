'use client'
import { Button, Checkbox, Form, Input, Select } from 'antd'
import { useState } from 'react'
const { Option } = Select

const baseOption = [
  { label: '二进制', value: 2 },
  { label: '八进制', value: 8 },
  { label: '十进制', value: 10 },
  { label: '十六进制', value: 16 }
]
interface FormProps {
  origin: number
  number: string
  target: number
}

export default function BaseConversion() {
  const [form] = Form.useForm()
  const [res, setRes] = useState('结果')

  const onFinish = (form: FormProps) => {
    const ten = parseInt(form.number, form.origin)
    setRes(ten.toString(form.target))
  }

  const handleChange = () => {}
  return (
    <div className={'absolute-center w-5/6 lg:w-[36rem]'}>
      <div className="card">
        <div className="text-center text-2xl font-bold mb-6">进制转换</div>
        <Form colon layout={'horizontal'} wrapperCol={{ span: 12 }} labelCol={{ span: 6, offset: 2 }} onFinish={onFinish} form={form}>
          <Form.Item rules={[{ required: true, message: '请选择源进制' }]} name={'origin'} label={'源进制'}>
            <Select placeholder={'请选择源进制'} onChange={handleChange}>
              {baseOption.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item rules={[{ required: true, message: '请输入源进制数值' }]} name={'number'} label={'数值'}>
            <Input placeholder={'请输入源进制数值'} />
          </Form.Item>
          <h1 className={'text-center mb-4'}>转</h1>
          <Form.Item rules={[{ required: true, message: '请选择目标进制' }]} name={'target'} label={'目标进制'}>
            <Select placeholder={'请选择目标进制'} onChange={handleChange}>
              {baseOption.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <span className={'text-primary px-4 py-2 bg-green-300 break-all rounded'}>{res}</span>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
