import SurveyList from './survey-list'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { LoadSurveyList } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'

class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  async loadAll (): Promise<SurveyModel[]> {
    this.callsCount++
    return []
  }
}

type SuTypes = {
  loadSurveyListSpy: LoadSurveyListSpy
}

const makeSut = (): SuTypes => {
  const loadSurveyListSpy = new LoadSurveyListSpy()
  render(<SurveyList loadSurveyList={loadSurveyListSpy} />)
  return { loadSurveyListSpy }
}

describe('SurveyList Component', () => {
  test('Should present 4 items empty on start', () => {
    makeSut()
    const surveyList = screen.getByTestId('survey-list')
    expect(surveyList.querySelectorAll('li:empty').length).toBe(4)
  })

  test('Should call LoadSurveyList', () => {
    const { loadSurveyListSpy } = makeSut()
    expect(loadSurveyListSpy.callsCount).toBe(1)
  })
})
