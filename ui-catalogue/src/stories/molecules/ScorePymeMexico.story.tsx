import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ScorePymeMexico } from '../../components/molecules/ScorePymeMexico/ScorePymeMexico'
import { dataScorePymeMexicoFaker } from '../../mocks'
import i18nObj from '../i18n.json'

const ScorePymeMexicoStory: React.FC = () => {
  return (
    <ScorePymeMexico
      i18n={i18nObj}
      data={dataScorePymeMexicoFaker}
    />)
}

export { ScorePymeMexicoStory }

storiesOf('Components|Molecules.ScorePymeMexico', module)
  .addDecorator(withThemeProvider)
  .add('ScorePyme Mexico', () => <ScorePymeMexicoStory />)
