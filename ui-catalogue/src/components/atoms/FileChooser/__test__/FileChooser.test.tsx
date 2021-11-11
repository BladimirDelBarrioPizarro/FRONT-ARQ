import { render } from '@testing-library/react'
import React from 'react'

import i18nObj from '../../../../stories/i18n.json'
import { FileChooser } from '../FileChooser'

test('Test de renderizado con props por defecto', () => {
  const handleChange = jest.fn()

  expect(() => render(
    <FileChooser
      handleChange={handleChange}
      i18n={
        { 'filechooser:uploadInput': i18nObj['filechooser:uploadInput'] }
      }
    />)).not.toThrow()
})

test('Test de renderizado con todos los props informados', () => {
  const handleChange = jest.fn()
  const accept = '.csv'
  const name = 'name'
  const id = 'id'
  const multiple = true
  const buttonColor = 'primary'
  const buttonVariant = 'contained'

  expect(() => render(
    <FileChooser
      accept={accept}
      name={name}
      id={id}
      multiple={multiple}
      handleChange={handleChange}
      buttonVariant={buttonVariant}
      buttonColor={buttonColor}
      i18n={i18nObj}
    />)).not.toThrow()
})
