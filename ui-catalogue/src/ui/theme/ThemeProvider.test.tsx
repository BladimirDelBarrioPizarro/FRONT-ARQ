import React from 'react'
import { render } from '@testing-library/react'
import ThemeCatalogueProvider from './ThemeProvider'

const withHOC: React.FunctionComponent<any> = ({ children }) => {
  return (
    <ThemeCatalogueProvider { ...children}/>
  )
}

const MockApp: any = () => {
  return (
    <div></div>
  )
}

const MockWithHOC: any = () => withHOC(MockApp)

test('ThemeProvider HOC', () => {
  const { container } = render(
    <MockWithHOC />)
  expect(container).toBeDefined()
})
