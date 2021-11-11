import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { GeneralDataNoRef } from '../../components/molecules/GeneralDataNoRef/GeneralDataNoRef'
import i18nObj from '../i18n.json'
import { dataGeneralDataFaker } from '../../mocks'

const GeneralDataNoRefStory: React.FC = () => {
  return (
    <GeneralDataNoRef
      i18n={i18nObj}
      data={dataGeneralDataFaker}
    />)
}

export { GeneralDataNoRefStory }

storiesOf('Components|Molecules.GeneralDataNoRef', module)
  .addDecorator(withThemeProvider)
  .add('General Data No Ref', () => <GeneralDataNoRefStory />)
