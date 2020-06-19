import {HttpMethodEnum} from '../enums/HttpMethodEnum'

export interface RequestObject {
  method: HttpMethodEnum
  path: string
  formData?: any
  params?: any
  qs?: any
  body?: any
  headers?: any
}
