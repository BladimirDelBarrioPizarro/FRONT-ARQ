import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { Simulate } from 'react-dom/test-utils'
import { ElementInput } from './ElementInput'

test('Test de renderizado', () => {
  const wrapper = render(
    <ElementInput
      type={'text'}
      name={'name'}
      label={'labelTest'}
      value={'value'}
      size={'l'}
      onChange={(e) => console.log(e)} // eslint-disable-line
    />
  )

  expect(wrapper).not.toBe(null)

  expect(() => render(
    <ElementInput
      type={'text'}
      name={'name'}
      label={'labelTest'}
      value={'value'}
      size={'l'}
      onChange={(e) => console.log(e)} // eslint-disable-line
    />)).not.toThrow()
  expect(wrapper).toBeDefined()
})
test('Events', () => {
  const wrapper = render(
    <ElementInput
      type={'text'}
      name={'name'}
      label={'labelTest'}
      value={'value'}
      size={'l'}
      onChange={(e) => console.log(e)} // eslint-disable-line
    />
  )

  expect(wrapper).toBeDefined()
  expect(wrapper).not.toBe(null)
  const iconWrapper = screen.getByTestId('elementInput')
  fireEvent.change(iconWrapper)
  fireEvent.blur(iconWrapper)
  fireEvent.click(iconWrapper)
  fireEvent.focus(iconWrapper)
  Simulate.click(iconWrapper)
  Simulate.change(iconWrapper)
})
