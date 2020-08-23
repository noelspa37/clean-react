import { UpdateCurrentAccount } from '@/domain/usecases'
import { LocalUpdateCurrentAccount } from '@/data/usecases/update-current-account/local-update-current-account'
import { makeSetStorage } from '@/main/factories/cache/local-storage-adapter-factory'

export const makeUpdateCurrentAccount = (): UpdateCurrentAccount => {
  return new LocalUpdateCurrentAccount(makeSetStorage())
}
