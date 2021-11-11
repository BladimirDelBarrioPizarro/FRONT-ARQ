import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BaseReport } from '../../components/templates/BaseReport/BaseReport'
import { ReportTypes } from '../../components/templates/BaseReport/types'
import i18nObj from '../i18n.json'
import * as Faker from 'faker'
import {
  dataGeneralFaker,
  dataBalanceFaker
} from '../../mocks'

const BaseReportStory: React.FC = () => {
  const report = ReportTypes.Standard

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}

export { BaseReportStory }

const BaseReportEUDBPPTStory: React.FC = () => {
  const report = ReportTypes.EUDBP_PT

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}

export { BaseReportEUDBPPTStory }

const BaseReportEUDBPITStory: React.FC = () => {
  const report = ReportTypes.EUDBP_IT

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}

export { BaseReportEUDBPITStory }

const BaseReportRestoStory: React.FC = () => {
  const report = ReportTypes.RESTO_PAISES

  const handleOut = (): void => { }

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}

export { BaseReportRestoStory }

const BaseReportEUDBPPOAStory: React.FC = () => {
  const report = ReportTypes.EUDBP_PO_A

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}

export { BaseReportEUDBPPOAStory }

const BaseReportBADEXCUGStory: React.FC = () => {
  const report = ReportTypes.BADEXCUG

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}

export { BaseReportBADEXCUGStory }

const BaseReportEspanaInformaStory: React.FC = () => {
  const report = ReportTypes.ESPANA_INFORMA

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}
export { BaseReportEspanaInformaStory }

const BaseReportEUDBPFRStory: React.FC = () => {
  const report = ReportTypes.EUDBP_FR

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}

export { BaseReportEUDBPFRStory }

const BaseReportNoDownloadStory: React.FC = () => {
  const report = ReportTypes.Standard

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      showDownload={false}
      handleOut={handleOut}
    />
  )
}
export { BaseReportNoDownloadStory }

const BaseReportExternalDownloadStory: React.FC = () => {
  const report = ReportTypes.Standard

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }
  const handleDownload = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
      handleDownload={handleDownload}
    />
  )
}
export { BaseReportExternalDownloadStory }

const BaseReportNoDBRestoStory: React.FC = () => {
  const report = ReportTypes.NOREF_RESTO_PAISES

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }
  const handleDownload = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
      handleDownload={handleDownload}
    />
  )
}
export { BaseReportNoDBRestoStory }

const BaseReportNosisArgentinaStory: React.FC = () => {
  const report = ReportTypes.ARGENTINA_NOSIS

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}
export { BaseReportNosisArgentinaStory }

const BaseReportPeruStory: React.FC = () => {
  const report = ReportTypes.PERU_EQUIFAX

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}
export { BaseReportPeruStory }

const BaseReportBureauMejicoStory: React.FC = () => {
  const report = ReportTypes.BUREAU_MEJICO

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}
export { BaseReportBureauMejicoStory }

const BaseReportFranciaStory: React.FC = () => {
  const report = ReportTypes.FRANCIA

  const dataFaker = {
    empresa: Faker.company.companyName(),
    codigoFiscal: Faker.random.words(),
    general: dataGeneralFaker,
    balance: dataBalanceFaker
  }

  const handleOut = (): void => { }

  return (
    <BaseReport
      i18n={i18nObj}
      data={dataFaker}
      report={report}
      handleOut={handleOut}
    />
  )
}
export { BaseReportFranciaStory }

storiesOf('Components|Templates.BaseReport', module)
  .addDecorator(withThemeProvider)
  .add('BaseReport External Download', () => <BaseReportExternalDownloadStory/>)
  .add('BaseReport No Download', () => <BaseReportNoDownloadStory/>)
  .add('BaseReport Standard', () => <BaseReportStory />)
  .add('BaseReport EUDBP PT', () => <BaseReportEUDBPPTStory />)
  .add('BaseReport EUDBP IT', () => <BaseReportEUDBPITStory />)
  .add('BaseReport EUDBP FR', () => <BaseReportEUDBPFRStory />)
  .add('BaseReport Resto Paises', () => <BaseReportRestoStory />)
  .add('BaseReport EUDBP_PO_A', () => <BaseReportEUDBPPOAStory />)
  .add('BaseReport BADEXCUG', () => <BaseReportBADEXCUGStory />)
  .add('BaseReport No Ref Resto Paises', () => <BaseReportNoDBRestoStory />)
  .add('BaseReport ESPAÑA INFORMA', () => <BaseReportEspanaInformaStory/>)
  .add('BaseReport Argentina Nosis', () => <BaseReportNosisArgentinaStory/>)
  .add('BaseReport Peru', () => <BaseReportPeruStory/>)
  .add('BaseReport Bureau Mejico', () => <BaseReportBureauMejicoStory/>)
  .add('BaseReport Francia', () => <BaseReportFranciaStory/>)
