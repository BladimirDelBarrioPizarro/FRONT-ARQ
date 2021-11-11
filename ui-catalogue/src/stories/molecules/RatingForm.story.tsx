import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RatingForm } from '../../components/molecules/RatingForm/RatingForm'
import i18nObj from '../i18n.json'
import { dataRatingFormFaker } from '../../mocks/'

const RaitingFormStory: React.FC = () => {
  return (
    <RatingForm
      i18n={i18nObj}
      data={dataRatingFormFaker}
    />)
}

export { RaitingFormStory }

storiesOf('Components|Molecules.RaitingForm', module)
  .addDecorator(withThemeProvider)
  .add('RaitingForm', () => <RaitingFormStory />)
