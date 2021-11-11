import * as React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ExperianR } from '../../components/organisms/ExperianR/ExperianR'
import i18nObj from '../i18n.json'

const ExperianRStoryAll: React.FC = () => {
  const handleSearchExperian = (cif: string, radio: string): void => { }
  return <ExperianR
    handleSearchExperian={handleSearchExperian}
    i18n={i18nObj}
  />
}

const ExperianRStoryEmpty: React.FC = () => {
  const handleSearchExperian = (cif: string, radio: string): void => { }
  return <ExperianR
    handleSearchExperian={handleSearchExperian}
    i18n={i18nObj}
  />
}

export { ExperianRStoryAll }

storiesOf('Components|Organisms.ExperianR', module)
  .addDecorator(withThemeProvider)
  .add('ExperianR All', () => <ExperianRStoryAll />)
  .add('ExperianR Empty', () => <ExperianRStoryEmpty />)
