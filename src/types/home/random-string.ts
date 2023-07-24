export interface OptionsProp {
  label: string
  value: string
  disabled?: boolean
}

export enum StringType {
  number = '1234567890',
  lowerCase = 'abcdefghijklmnopqrstuvwxyz',
  capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  special = '~!@#$%^&*()_+-=[]{}|<>?/'
}

export interface FormProps {
  len: string
  checkedList: (keyof typeof StringType)[]
}
