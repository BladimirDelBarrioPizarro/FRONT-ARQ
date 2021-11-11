import * as React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TextInputFile } from '../../components/molecules/TextInputFile/TextInputFile'
import i18nObj from '../i18n.json'

const name = 'name'
const id = 'id'
const inputRef = null
const fileRef = null
const handleChange = (): void => {}

const TextInputFileStory: React.FC = () => (
  <TextInputFile
    name={name}
    id={id}
    inputRef={inputRef}
    fileRef={fileRef}
    i18n={i18nObj}
    handleChange={handleChange}
  />
)

export { TextInputFileStory }

storiesOf('Components|Molecules.TextInputFile', module)
  .addDecorator(withThemeProvider)
  .add('TextInputFile', () => <TextInputFileStory />)
