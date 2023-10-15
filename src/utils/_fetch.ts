import { message } from 'antd'

interface ResponseProp<T> {
  code: number
  data: T
  msg: string
}

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL

const get = async <T>(url: string, params: any) => {
  try {
    const query = new URLSearchParams(params).toString()
    const response = await fetch(`${BASE_API}${url}?${query}`)
    const responseJson = (await response.json()) as ResponseProp<T>
    const { code, msg } = responseJson
    if (msg) {
      code === 1 && message.success(msg)
      code === 0 && message.error(msg)
    }
    return responseJson
  } catch (error) {
    message.error(`网络错误，${error}`)
    return {
      code: 0,
      data: '',
      msg: ''
    } as ResponseProp<T>
  }
}

const post = async <T>(url: string, data?: any) => {
  try {
    let response = await fetch(BASE_API + url, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      method: 'post'
    })
    const responseJson = (await response.json()) as ResponseProp<T>
    const { code, msg } = responseJson
    if (msg) {
      code === 1 && message.success(msg)
      code === 0 && message.error(msg)
    }
    return responseJson
  } catch (error) {
    message.error(`网络错误，${error}`)
    return {
      code: 0,
      data: '',
      msg: ''
    } as ResponseProp<T>
  }
}

const download = async (url: string) => {
  try {
    const response = await fetch(BASE_API + url)
    const imageUrl = URL.createObjectURL(await response.blob())
    const downloadLink = document.createElement('a')
    downloadLink.href = imageUrl
    downloadLink.target = '_blank'
    const contentDisposition = response.headers.get('Content-Disposition')
    const filenameMatch = contentDisposition && contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)
    const fileName = (filenameMatch && filenameMatch[1]) || ''
    console.log('fileName', fileName)
    downloadLink.download = decodeURI(fileName)

    document.body.appendChild(downloadLink)
    downloadLink.click()
    URL.revokeObjectURL(imageUrl)
  } catch (error) {
    message.error(`网络错误，${error}`)
    // return {
    //   code: 0,
    //   data: '',
    //   msg: ''
    // } as ResponseProp<T>
  }
}

const _fetch = {
  get,
  post,
  download
}

export default _fetch
