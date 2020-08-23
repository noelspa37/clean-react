import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeUpdateCurrentAccount } from '../../usecases/update-current-account/local-save-access-token-factory'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeRemoteAddAccount } from '../../usecases/add-account/remote-add-account-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
      updateCurrentAccount={makeUpdateCurrentAccount()}
    />
  )
}
