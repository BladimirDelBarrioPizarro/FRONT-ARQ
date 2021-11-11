import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Ratings } from '../../components/organisms/Ratings/Ratings'
import {
  dataRatingFormFaker
} from '../../mocks'
import i18nObj from '../i18n.json'

const RatingStory: React.FC = () => {
  return <Ratings
    i18n={i18nObj}
    data={dataRatingFormFaker}
  />
}

export { RatingStory }

storiesOf('Components|Organisms.Ratings', module)
  .addDecorator(withThemeProvider)
  .add('Ratings', () => <RatingStory />)
