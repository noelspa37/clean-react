import { SurveyContext } from '@/presentation/pages/survey-list/components'
import Styles from './error-styles.scss'
import React, { useContext } from 'react'

const Error: React.FC = () => {
  const { state } = useContext(SurveyContext)
  return (
    <div className={Styles.errorWrap}>
      <span data-testid='error' >{state.error}</span>
      <button>Recargar</button>
    </div>
  )
}

export default Error
