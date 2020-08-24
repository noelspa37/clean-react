import { SetStorage } from '../protocols/cache/set-storage'

export class SetStorageMock implements SetStorage {
  key: string
  value: object

  set (key: string, value: object): void {
    this.key = key
    this.value = value
  }
}
