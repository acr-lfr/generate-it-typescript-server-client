import {HttpMethodEnum} from '../enums/HttpMethodEnum'

export interface KeyValue {
  [key: string]: string
}

export interface RequestObject {
  method: HttpMethodEnum
  path: string
  formData?: any
  params?: KeyValue
  qs?: any
  body?: any
  headers?: any
}
