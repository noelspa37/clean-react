import React, { useState, useEffect, useContext } from 'react'
import Styles from './signup-styles.scss'
import { useHistory, Link } from 'react-router-dom'
import { Footer, Input, FormStatus, LoginHeader, SubmitButton } from '@/presentation/components'
import { FormContext, ApiContext } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount } from '@/domain/usecases'

type Props = {
  validation: Validation
  addAccount: AddAccount
}

const SignUp: React.FC<Props> = ({ validation, addAccount }: Props) => {
  const history = useHistory()
  const { setCurrentAccount } = useContext(ApiContext)
  const [state, setState] = useState({
    isLoading: false,
    isFormaInvalid: true,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    emailError: '',
    nameError: '',
    passwordError: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  useEffect(() => {
    const { name, email, password, passwordConfirmation } = state
    const formData = { name, email, password, passwordConfirmation }

    const nameError = validation.validate('name', formData)
    const emailError = validation.validate('email', formData)
    const passwordError = validation.validate('password', formData)
    const passwordConfirmationError = validation.validate('passwordConfirmation', formData)

    setState({
      ...state,
      nameError,
      emailError,
      passwordError,
      passwordConfirmationError,
      isFormaInvalid: !!nameError || !!emailError || !!passwordError || !!passwordConfirmationError
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      if (state.isLoading || state.isFormaInvalid) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })
      setCurrentAccount(account)

      history.replace('/')
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className={Styles.signupWrap}>
      <LoginHeader />
      <FormContext.Provider value={{ state, setState }}>
        <form data-testid='form' className={Styles.form} onSubmit={handleSubmit} >
          <h2>Registrar Cuenta</h2>
          <Input type='text' name='name' placeholder='Digite su nombre' />
          <Input type='email' name='email' placeholder='Digite su email' />
          <Input type='password' name='password' placeholder='Digite su password' />
          <Input type='password' name='passwordConfirmation' placeholder='Repita su password' />
          <SubmitButton text='Registrar' />
          <Link data-testid='login-link' replace to='/login' className={Styles.link}>Regresar a login</Link>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div >
  )
}

export default SignUp
