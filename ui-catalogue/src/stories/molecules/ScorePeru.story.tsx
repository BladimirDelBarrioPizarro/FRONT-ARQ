import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ScorePeru } from '../../components/molecules/ScorePeru/ScorePeru'
import { dataScorePeruFaker } from '../../mocks'
import i18nObj from '../i18n.json'

const ScorePeruStory: React.FC = () => {
  return (
    <ScorePeru
      i18n={i18nObj}
      data={dataScorePeruFaker}
    />)
}

export { ScorePeruStory }

storiesOf('Components|Molecules.ScorePeru', module)
  .addDecorator(withThemeProvider)
  .add('ScorePeru', () => <ScorePeruStory />)
