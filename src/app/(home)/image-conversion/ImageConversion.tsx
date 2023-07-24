/**
 * @Author fendy
 * @CreateTime 2023/7/6 15:51
 * @Description
 */
'use client'

import { Upload, message, Form, Select, Button, InputNumber, Space, Input, UploadFile, UploadProps } from 'antd'
import { useState } from 'react'
import { RcFile } from 'antd/es/upload'
import { ImageConversionFormProp } from '@/types/home/image-conversion'
import { PictureOutlined } from '@ant-design/icons'
import { getRandomString } from '@/utils'
import { deleteImage, downloadImage, imageConversionApi } from '@/apis/home/random-string'

export default function ImageConversion() {
  const [imageUrl, setImageUrl] = useState('')
  const [downloadId, setDownloadId] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [id, setId] = useState(getRandomString)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const props: UploadProps = {
    name: 'image',
    accept: 'image/*',
    multiple: true,
    maxCount: 25,
    fileList,
    data: {
      id
    },
    action: '/api/v1/upload-image',
    beforeUpload: (file: RcFile) => {
      if (!file.type.match(/image\/*/)?.[0]) {
        message.error(`${file.name} 不是有效的图片文件`)
        return Upload.LIST_IGNORE
      }
      return true
    },
    onChange({ file, fileList }) {
      console.log('fileList', fileList)
      const { status, response } = file
      setDownloadId('')
      setFileList(fileList)
      if (status === 'done') {
        message.success(`${file.name}上传成功`)
        // setImageUrl(response.image_url)
      } else if (status === 'error') {
        message.error(`${file.name}上传失败`)
      }
    },
    async onRemove(file: UploadFile) {
      const { data } = file.response
      await deleteImage({ imageId: data })
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
    console.log('form', form)
    setLoading(true)
    const {
      data: { downloadId }
    } = await imageConversionApi(form)
    setLoading(false)
    setDownloadId(downloadId)
  }

  const handleDownload = async () => {
    try {
      await downloadImage(downloadId)
      message.success('下载成功')
    } catch (e) {
      message.error('下载失败，' + e)
    }
  }

  const resetForm = () => {
    setDownloadId('')
    form.resetFields(['targetType', 'size'])
    handleChangeImageType('')
    setFileList([])
    const id = getRandomString()
    setId(id)
    form.setFieldsValue({ id })
  }

  const targetTypeOptions = ['png', 'ico', 'jpg', 'webp', 'bmp']
  const sizeList = [16, 32, 64, 128, 256, 512]
  const [targetType, setTargetType] = useState('')
  const [size, setSize] = useState<number | undefined>(undefined)
  const [compressionRate, setCompressionRate] = useState(0)

  return (
    <div className={'absolute-center w-5/6 md:w-[36rem]'}>
      <div className="card">
        <div className="text-center text-2xl font-bold mb-6">图片格式转换</div>
        <Form form={form} colon initialValues={{ id, size }} layout={'horizontal'} onFinish={handleFinish} labelCol={{ span: 4 }}>
          <Form.Item>
            <Upload.Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <PictureOutlined />
              </p>
              <p className="ant-upload-text">点击或者拖拉上传图片</p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item rules={[{ required: true, message: '请选择转换格式' }]} name={'targetType'} label={'转换格式'}>
            <Select onChange={handleChangeImageType} value={targetType} placeholder={'请选择转换格式'}>
              {targetTypeOptions.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/*<Form.Item name="compressionRate" label="压缩率">*/}
          {/*  <span>*/}
          {/*    <InputNumber max={100} min={0} style={{ width: '100%' }} addonAfter="%" placeholder="0~100之间，不填表示不压缩" />*/}
          {/*  </span>*/}
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
          <Form.Item hidden={true} name={'id'}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ xs: { span: 12 }, sm: { span: 12, offset: 6 } }}>
            <div className="text-center">
              <Button loading={loading} type="primary" htmlType="submit">
                转换
              </Button>
              <Button onClick={resetForm} className={'ml-8'}>
                重置
              </Button>
            </div>
          </Form.Item>
          {downloadId ? (
            <Form.Item className={'text-center'}>
              <span
                onClick={() => {
                  handleDownload()
                }}
                className={'text-primary cursor-pointer px-4 py-2 bg-green-300 break-all rounded'}>
                立即下载
              </span>
            </Form.Item>
          ) : null}
        </Form>
      </div>
    </div>
  )
}
