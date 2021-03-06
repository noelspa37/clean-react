import { SurveyContext } from '@/presentation/pages/survey-list/components'
import Styles from './error-styles.scss'
import React, { useContext } from 'react'

const Error: React.FC = () => {
  const { state, setState } = useContext(SurveyContext)
  const reload = (): void => {
    setState({ surveys: [], error: '', reload: !state.reload })
  }
  return (
    <div className={Styles.errorWrap}>
      <span data-testid='error' >{state.error}</span>
      <button data-testid='reload' onClick={reload}>Recargar</button>
    </div>
  )
}

export default Error
