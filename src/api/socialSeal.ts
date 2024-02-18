import { client } from '../utils/fetch';

export const getPdf = (email: string) => {
  return client.post('/demo/socialseal/download', { email: email })
}

export const getConsultation = (data: any) => {
  return client.post('/demo/socialseal/consultaion', data)
}