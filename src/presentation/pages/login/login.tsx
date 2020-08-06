import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, FormStatus, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    emailError: 'campo obligatorio',
    passwordError: 'campo obligatorio',
    mainError: ''
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form} >
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Digite su email' />
          <Input type='password' name='password' placeholder='Digite su password' />
          <button data-testid='submit' disabled className={Styles.submit} type='submit'>Entrar</button>
          <span className={Styles.link}>Crear contacto</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div >
  )
}

export default Login