import faker from 'faker'
import { LocalStorageAdapter } from './local-storage-adapter'
import 'jest-localstorage-mock'
import { AccountModel } from '@/domain/models'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => localStorage.clear())

  test('Should call LocalStorage with correct values ', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.objectElement<AccountModel>()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })
})
