import React from 'react'
import faker from 'faker'
import SignUp from './signup'
import { render, RenderResult, cleanup, fireEvent } from '@testing-library/react'
import { Helper, ValidationStub } from '@/presentation/test'

type SubTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SubTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <SignUp validation={validationStub} />
  )
  return { sut }
}

const populateField = (sut: RenderResult, fieldName: string, value = faker.random.words()): void => {
  const input = sut.getByTestId(fieldName)
  fireEvent.input(input, { target: { value } })
}

describe('SignUp Component', () => {
  afterEach(cleanup)

  test('Should start with initial state ', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonIsDisabled(sut, 'submit', true)
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', 'Campo Obligatorio')
    Helper.testStatusForField(sut, 'password', 'Campo Obligatorio')
    Helper.testStatusForField(sut, 'passwordConfirmation', 'Campo Obligatorio')
  })

  test('Should show name error if Validation fails ', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateField(sut, 'name')
    Helper.testStatusForField(sut, 'name', validationError)
  })
})
