import React from 'react'
import Styles from './item-empty-styles.scss'

const SurveyItemEmpty: React.FC = () => {
  return (
    <>
      <li className={Styles.surveyItemEmptyWrap}></li>
      <li className={Styles.surveyItemEmptyWrap}></li>
      <li className={Styles.surveyItemEmptyWrap}></li>
      <li className={Styles.surveyItemEmptyWrap}></li>
    </>
  )
}

export default SurveyItemEmpty
