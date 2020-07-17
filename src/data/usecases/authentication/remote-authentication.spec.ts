import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
};

const MakeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = MakeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
