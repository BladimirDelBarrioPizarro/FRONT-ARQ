import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Simulate } from 'react-dom/test-utils'
import i18nObj from '../../../stories/i18n.json'
import { TextInputFile } from './TextInputFile'

const i18n = {
  'filechooser:uploadInput': i18nObj['filechooser:uploadInput'],
  'filechooser:noFileFeedback': i18nObj['filechooser:noFileFeedback']
}
test('Test de renderizado', () => {
  const wrapper = render(
    <TextInputFile
      i18n={i18n}
      name={'name'}
      id={'id'}
      handleChange={(files) => console.log(files)} // eslint-disable-line
    />
  )

  expect(wrapper).not.toBe(null)
  expect(() => render(
    <TextInputFile
      name={'name'}
      id={'id'}
      i18n={i18n}
      handleChange={(files) => console.log(files)} // eslint-disable-line
    />)).not.toThrow()
  expect(wrapper).toBeDefined()
})

test('Events', () => {
  const wrapper = render(
    <TextInputFile
      name={'name'}
      id={'id'}
      i18n={i18n}
      handleChange={(files) => console.log(files)} // eslint-disable-line
    />
  )

  expect(wrapper).toBeDefined()
  expect(wrapper).not.toBe(null)
  const iconWrapper = screen.getByTestId('textField')
  fireEvent.change(iconWrapper)
  fireEvent.click(iconWrapper)
  Simulate.click(iconWrapper)
  Simulate.change(iconWrapper)
})
