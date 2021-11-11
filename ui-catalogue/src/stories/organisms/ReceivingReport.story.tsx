import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ReceivingReports } from '../../components/organisms/ReceivingReports/ReceivingReports'
import i18nObj from '../i18n.json'
import {
  tableCompanyDataRows,
  selectCorrespondentsDataRows,
  tableCountryDataRows,
  dataproductsMock
} from '../../mocks'

const ReceivingReportsStory: React.FC = () => {
  const handleSubmit = (petitionNum, codCompany, countrie, codCorrespondent): void => {}
  const handleCancel = (): void => {}
  const handleBack = (): void => {}

  const drawerBusinessCodeProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(5),
    handleSearch: (): void => {}, // eslint-disable-line
    loading: false,
    error: false,
    handleBack: handleBack,
    tableCompanyProps: {
      i18n: i18nObj,
      data: tableCompanyDataRows(5),
      totalRows: 5,
      rowsPerPage: 5
    }
  }

  const elementBackProps = {
    label: 'TEST',
    size: 'm',
    handleBack: handleBack
  }

  let corresponsals = selectCorrespondentsDataRows(5)
  const handleSearchCorresponsal = (country): void => {
    corresponsals = selectCorrespondentsDataRows(5)
  }
  return <ReceivingReports
    i18n={i18nObj}
    countries={tableCountryDataRows(5)}
    corresponsals={corresponsals}
    elementBackProps={elementBackProps}
    drawerBusinessCodeProps={drawerBusinessCodeProps}
    products={dataproductsMock}
    handleSubmit={handleSubmit}
    handleCancel={handleCancel}
    handleSearchCorresponsal={handleSearchCorresponsal}
  />
}

export { ReceivingReportsStory }

storiesOf('Components|Organisms.ReceivingReports', module)
  .addDecorator(withThemeProvider)
  .add('ReceivingReports', () => <ReceivingReportsStory />)
