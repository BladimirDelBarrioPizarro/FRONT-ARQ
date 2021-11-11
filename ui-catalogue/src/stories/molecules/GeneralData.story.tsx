import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { GeneralData } from '../../components/molecules/GeneralData/GeneralData'
import i18nObj from '../i18n.json'
import { dataGeneralDataFaker } from '../../mocks'

const GeneralStory: React.FC = () => {
  return (
    <GeneralData
      i18n={i18nObj}
      data={dataGeneralDataFaker}
    />)
}

export { GeneralStory }

storiesOf('Components|Molecules.GeneralData', module)
  .addDecorator(withThemeProvider)
  .add('General Data', () => <GeneralStory />)
