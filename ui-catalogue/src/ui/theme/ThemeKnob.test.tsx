import React from 'react'
import { render } from '@testing-library/react'
import ThemeKnob from './ThemeKnob'

const withHOC: React.FunctionComponent<any> = ({ children }) => {
  return (
    <ThemeKnob { ...children}/>
  )
}

const MockApp: any = () => {
  return (
    <div></div>
  )
}

const MockWithHOC: any = () => withHOC(MockApp)

test('ThemeKnob HOC', () => {
  const { container } = render(
    <MockWithHOC />)
  expect(container).toBeDefined()
})
