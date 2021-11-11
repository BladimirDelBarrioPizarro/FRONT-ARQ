import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BouncedChecks } from '../../components/molecules/BouncedChecks/BouncedChecks'
import i18nObj from '../i18n.json'
import { dataBouncedChecksFaker } from '../../mocks/BouncedChecksMock'

const BouncedChecksStory: React.FC = () => {
  return (
    <BouncedChecks
      i18n={i18nObj}
      data={dataBouncedChecksFaker}
    />)
}

export { BouncedChecksStory }

storiesOf('Components|Molecules.BouncedChecks', module)
  .addDecorator(withThemeProvider)
  .add('BouncedChecks', () => <BouncedChecksStory />)
