import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { DealForm } from '../../components/molecules/DealForm/DealForm'
import i18nObj from '../i18n.json'
import { dataDealFormFaker } from '../../mocks/'

const DealFormStory: React.FC = () => {
  return (
    <DealForm
      i18n={i18nObj}
      data={dataDealFormFaker}
    />)
}

export { DealFormStory }

storiesOf('Components|Molecules.DealForm', module)
  .addDecorator(withThemeProvider)
  .add('DealForm', () => <DealFormStory />)
