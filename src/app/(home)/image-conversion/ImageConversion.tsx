/**
 * @Author fendy
 * @CreateTime 2023/7/6 15:51
 * @Description
 */
'use client'

import { Upload, message, Form, Select, Button, InputNumber, Space } from 'antd'
import { useState } from 'react'
import { RcFile } from 'antd/es/upload'
import { ImageConversionFormProp } from '@/app/types/image-conversion'
import { PictureOutlined } from '@ant-design/icons'

export default function ImageConversion() {
  const [imageUrl, setImageUrl] = useState('')
  const [downloadLink, setDownloadLink] = useState('')

  const [form] = Form.useForm()

  const props = {
    name: 'image',
    accept: 'image/*',
    multiple: true,
    maxCount: 25,
    data: {
      '100%': true
    },
    action: '/api/v1/image-upload',
    beforeUpload: (file: RcFile) => {
      if (!file.type.match(/image\/*/)?.[0]) {
        message.error(`${file.name} 不是有效的图片文件`)
        return Upload.LIST_IGNORE
      }
      return true
    },
    onChange(info: any) {
      const { status, response } = info.file
      setDownloadLink('')
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
        setImageUrl(response.image_url)
        form.setFieldsValue({ imageUrl: response.image_url })
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  const handleChangeImageType = (type: string) => {
    setTargetType(type)
    setSize(undefined)
  }

  const handleChangeSize = (size: number) => {
    setSize(size)
  }

  const handleFinish = async (form: ImageConversionFormProp) => {
    console.log(form)
    // if (imageUrl) {
    //   form.imageUrl = imageUrl
    //   transformApi(form).then((value) => {
    //     const { downloadLink } = value.data
    //     setDownloadLink(downloadLink)
    //   })
    // } else {
    //   message.error('请先选择图片')
    // }
  }

  const targetTypeOptions = ['png', 'ico', 'jpg', 'webp', 'bmp']
  const sizeList = [16, 32, 64, 128, 256, 512]
  const [targetType, setTargetType] = useState('')
  const [size, setSize] = useState<number | undefined>(undefined)
  const [compressionRate, setCompressionRate] = useState(100)

  return (
    <div className={'absolute-center w-5/6 lg:w-[36rem]'}>
      <div className="card">
        <div className="text-center text-2xl font-bold mb-6">进制转换</div>
        <Form colon initialValues={{ compressionRate: 100 }} layout={'horizontal'} onFinish={handleFinish} labelCol={{ span: 4 }}>
          <Form.Item>
            <Upload.Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <PictureOutlined />
              </p>
              <p className="ant-upload-text">点击或者拖拉上传图片</p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item name={'targetType'} label={'转换格式'}>
            <Select onChange={handleChangeImageType} value={targetType} placeholder={'不选择默认不转换'}>
              {targetTypeOptions.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/*<Form.Item name="compressionRate" label="压缩率">*/}
          {/*  <Space>*/}
          {/*    <InputNumber onChange={(val) => setCompressionRate(Number(val))} value={compressionRate} style={{ width: '120px' }} placeholder="1~100之间" />*/}
          {/*    <span>%</span>*/}
          {/*  </Space>*/}
          {/*</Form.Item>*/}
          <Form.Item hidden={targetType !== 'ico'} name={'size'} label={'尺寸'}>
            <Select allowClear onChange={handleChangeSize} value={size} placeholder={'不选择默认不修改尺寸'}>
              {sizeList.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}*{option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 8, offset: 10 }}>
            <Button type="primary" htmlType="submit">
              立即转换
            </Button>
            {/*<Button onClick={resetForm} className={'ml-8'} htmlType="submit">*/}
            {/*  重置*/}
            {/*</Button>*/}
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
