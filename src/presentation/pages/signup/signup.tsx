import React, { useState } from 'react'
import Styles from './signup-styles.scss'
import { Footer, Input, FormStatus, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const SignUp: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    emailError: 'Campo Obligatorio',
    nameError: 'Campo Obligatorio',
    passwordError: 'Campo Obligatorio',
    passwordConfirmationError: 'Campo Obligatorio',
    mainError: ''
  })

  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state }}>
        <form className={Styles.form} >
          <h2>Registrar Cuenta</h2>
          <Input type='text' name='name' placeholder='Digite su nombre' />
          <Input type='email' name='email' placeholder='Digite su email' />
          <Input type='password' name='password' placeholder='Digite su password' />
          <Input type='password' name='passwordConfirmation' placeholder='Repita su password' />
          <button data-testid='submit' className={Styles.submit} disabled type='submit'>Entrar</button>
          <span className={Styles.link}>Regresar a login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div >
  )
}

export default SignUp
