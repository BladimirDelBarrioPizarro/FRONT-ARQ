import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { GeneralInformationMexico } from '../../components/molecules/GeneralInformationMexico/GeneralInformationMexico'
import i18nObj from '../i18n.json'
import { dataGeneralInformationMexicoFaker } from '../../mocks/'

const GeneralInformationMexicoStory: React.FC = () => {
  return (
    <GeneralInformationMexico
      i18n={i18nObj}
      data={dataGeneralInformationMexicoFaker}
    />)
}

export { GeneralInformationMexicoStory }

storiesOf('Components|Molecules.GeneralInformationMexico', module)
  .addDecorator(withThemeProvider)
  .add('GeneralInformation Mexico', () => <GeneralInformationMexicoStory />)
