import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { CommunicationsPOA } from '../../components/molecules/CommunicationsPOA/CommunicationsPOA'
import i18nObj from '../i18n.json'
import { dataCommunicationsPOAFaker } from '../../mocks/'
import { ReportTypes } from '../../components/templates/BaseReport/types'

const CommunicationsPOAStory: React.FC = () => {
  return (
    <CommunicationsPOA
      i18n={i18nObj}
      data={dataCommunicationsPOAFaker}
      report={ReportTypes.EUDBP_PO_A}
    />)
}

export { CommunicationsPOAStory }

const CommunicationsRestoPaisesStory: React.FC = () => {
  return (
    <CommunicationsPOA
      i18n={i18nObj}
      data={dataCommunicationsPOAFaker}
      report={ReportTypes.NOREF_RESTO_PAISES}
    />)
}

export { CommunicationsRestoPaisesStory }

storiesOf('Components|Molecules.CommunicationsPOA', module)
  .addDecorator(withThemeProvider)
  .add('CommunicationsPOA', () => <CommunicationsPOAStory />)
  .add('Communications No Ref Resto Paises', () => <CommunicationsRestoPaisesStory />)
