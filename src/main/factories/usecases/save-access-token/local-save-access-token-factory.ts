import { SaveAccessToken } from '@/domain/usecases'
import { LocalSaveAccessToken } from '@/data/usecases/save-access-token/local-save-access-token'
import { makeSetStorage } from '@/main/factories/cache/local-storage-adapter-factory'

export const makeSaveAccessToken = (): SaveAccessToken => {
  return new LocalSaveAccessToken(makeSetStorage())
}
