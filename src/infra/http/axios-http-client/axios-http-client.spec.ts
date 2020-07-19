import { AxiosHttpClient } from './axios-http.client'
import { mockPostRequest } from '@/data/test'
import axios from 'axios'

import { mockAxios } from '@/infra/tests'

jest.mock('axios')

type SubTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SubTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('Should call Axios with correct values ', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return correct StatusCode and body ', () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(request)
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
