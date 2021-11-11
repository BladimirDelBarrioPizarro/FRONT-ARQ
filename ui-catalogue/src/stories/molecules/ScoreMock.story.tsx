import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Score } from '../../components/molecules/Score/Score'
import i18nObj from '../i18n.json'
import { dataScoreFaker } from '../../mocks/ScoreMock'

const ScoreStory: React.FC = () => {
  return (
    <Score
      i18n={i18nObj}
      data={dataScoreFaker}
    />)
}

export { ScoreStory }

storiesOf('Components|Molecules.Score', module)
  .addDecorator(withThemeProvider)
  .add('Score', () => <ScoreStory />)
