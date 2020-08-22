import { AxiosHttpClient } from './axios-http-client'
import { mockPostRequest } from '@/data/test'
import { mockAxios, mockHttpResponse } from '@/infra/tests'
import axios from 'axios'

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
  describe('post', () => {
    test('Should call Axios.post with correct values ', async () => {
      const request = mockPostRequest()
      const { sut, mockedAxios } = makeSut()
      await sut.post(request)
      expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    test('Should return correct response on axios.post ', () => {
      const request = mockPostRequest()
      const { sut, mockedAxios } = makeSut()
      const promise = sut.post(request)
      expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })

    test('Should return correct error on axios.post ', () => {
      const request = mockPostRequest()
      const { sut, mockedAxios } = makeSut()
      mockedAxios.post.mockRejectedValueOnce({
        response: mockHttpResponse()
      })
      const promise = sut.post(request)
      expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
  })
})
