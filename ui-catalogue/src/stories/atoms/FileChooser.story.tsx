import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { FileChooser } from '../../components/atoms/FileChooser/FileChooser'

import i18nObj from '../i18n.json'

const FileChooserStory: React.FC = () => {
  const id = 'file-chooser'
  const name = 'file-chooser'
  const colorOptions = {
    default: 'default',
    inherit: 'inherit',
    primary: 'primary',
    secondary: 'secondary'
  }
  const variantOptions = {
    contained: 'contained',
    outlined: 'outlined',
    text: 'text'
  }
  const knobsGroup = 'Props'
  return (
    <FileChooser
      buttonColor={select<any>('Color del botón', colorOptions, colorOptions.primary, knobsGroup)}
      buttonVariant={select<any>('Variante del botón', variantOptions, variantOptions.contained, knobsGroup)}
      multiple={boolean('Acepta multiples archivos', true, knobsGroup)}
      id={id}
      name={name}
      accept={text('Tipos de archivo que acepta', '.csv', knobsGroup)}
      handleChange={(fileList) => console.log(fileList)} // eslint-disable-line
      i18n={i18nObj}
    />
  )
}

export { FileChooserStory }

storiesOf('Components|Atoms.FileChooser', module)
  .addDecorator(withThemeProvider)
  .add('File Chooser', () => <FileChooserStory />)
