import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { GeneralInformation } from '../../components/organisms/GeneralInformation/GeneralInformation'
import {
  dataGeneralFaker
} from '../../mocks'

import i18nObj from '../i18n.json'
import { ReportTypes } from '../../components/templates/BaseReport/types'

const GeneralInformationStory: React.FC = () => {
  const report = ReportTypes.Standard
  return <GeneralInformation
    i18n={i18nObj}
    data={dataGeneralFaker}
    report={report}
  />
}

export { GeneralInformationStory }

const GeneralInformationEUDBPPOAStory: React.FC = () => {
  const report = ReportTypes.EUDBP_PO_A
  return <GeneralInformation
    i18n={i18nObj}
    data={dataGeneralFaker}
    report={report}
  />
}

export { GeneralInformationEUDBPPOAStory }

const GeneralInformationEUDBPPTStory: React.FC = () => {
  const report = ReportTypes.EUDBP_PO_A

  return <GeneralInformation
    i18n={i18nObj}
    data={dataGeneralFaker}
    report={report}
  />
}

export { GeneralInformationEUDBPPTStory }

const GeneralInformationEUDBPITStory: React.FC = () => {
  const report = ReportTypes.EUDBP_PO_A
  return <GeneralInformation
    i18n={i18nObj}
    data={dataGeneralFaker}
    report={report}
  />
}

export { GeneralInformationEUDBPITStory }

const GeneralInformationRestoStory: React.FC = () => {
  const report = ReportTypes.ESPANA_INFORMA
  return <GeneralInformation
    i18n={i18nObj}
    data={dataGeneralFaker}
    report={report}
  />
}

export { GeneralInformationRestoStory }

const GeneralInformationBADEXCUGStory: React.FC = () => {
  const report = ReportTypes.BADEXCUG
  return <GeneralInformation
    i18n={i18nObj}
    data={dataGeneralFaker}
    report={report}
  />
}

export { GeneralInformationBADEXCUGStory }

const GeneralInformationEUDBPFRStory: React.FC = () => {
  const report = ReportTypes.EUDBP_FR
  return <GeneralInformation
    i18n={i18nObj}
    data={dataGeneralFaker}
    report={report}
  />
}

export { GeneralInformationEUDBPFRStory }

const GeneralInformationNoDBRestoStory: React.FC = () => {
  const report = ReportTypes.NOREF_RESTO_PAISES

  return <GeneralInformation
    i18n={i18nObj}
    data={dataGeneralFaker}
    report={report}
  />
}

export { GeneralInformationNoDBRestoStory }

const GeneralInformationPeruStory: React.FC = () => {
  const report = ReportTypes.PERU_EQUIFAX

  return <GeneralInformation
    i18n={i18nObj}
    data={dataGeneralFaker}
    report={report}
  />
}

export { GeneralInformationPeruStory }

storiesOf('Components|Organisms.GeneralInformation', module)
  .addDecorator(withThemeProvider)
  .add('General Information Standard', () => <GeneralInformationStory />)
  .add('General Information EUDBP PO A', () => <GeneralInformationEUDBPPOAStory />)
  .add('General Information EUDBP PT', () => <GeneralInformationEUDBPPTStory />)
  .add('General Information EUDBP IT', () => <GeneralInformationEUDBPITStory />)
  .add('General Information EUDBP FR', () => <GeneralInformationEUDBPFRStory />)
  .add('General Information Resto Paises', () => <GeneralInformationRestoStory />)
  .add('General Information BADEXCUG', () => <GeneralInformationBADEXCUGStory />)
  .add('General Information No Ref Resto Paises', () => <GeneralInformationNoDBRestoStory />)
  .add('General Information Peru', () => <GeneralInformationPeruStory />)
