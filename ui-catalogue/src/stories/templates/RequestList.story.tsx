import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RequestList } from '../../components/templates/RequestList/RequestList'
import i18nObj from '../i18n.json'
import {
  tableRequestListDataRows,
  detailPetitionDataFaker,
  detailRequestDataFaker,
  origenBalancesRows,
  cancelTypeRows,
  formsJuridicRows,
  referencesBankRows,
  commentsFactoryRows
} from '../../mocks'

const onChangePage = (page: number): void => {}
const onChangeRowsPerPage = (pageNumber: number): void => {}
const onColumnSortChange = (changedColumn: string, direction: string): void => {}
const onViewColumnsChange = (column: any): void => {}
const handleDetailRequest = (value): void => {}
const handleCheckPetition = (value: any, tableMeta: any): void  => {}// eslint-disable-line
const handlePressRow = (value: any, tableMeta: any): void => {}
const handleSubmit = (date): void => {}  // eslint-disable-line
const handleSubmitDetail = (petition): void => {}  // eslint-disable-line
const handleBack = (): void => {}
const handleOpenReport = (): void => {}
const handleSendCancel = (): void => {}
const handlePetitionPost = (params): void => {}

const tableRequestListProps = {
  i18n: i18nObj,
  data: tableRequestListDataRows(5),
  onChangePage: onChangePage,
  onChangeRowsPerPage: onChangeRowsPerPage,
  onViewColumnsChange: onViewColumnsChange,
  onColumnSortChange: onColumnSortChange,
  totalRows: 0,
  rowsPerPage: 5,
  page: 0,
  itemChecked: '',
  handleDetailRequest: handleDetailRequest,
  handleCheckPetition: handleCheckPetition,
  handlePressRow: handlePressRow
}

const detailRequestProps = {
  i18n: i18nObj,
  handleBack: handleBack,
  data: detailRequestDataFaker
}

const balancesNPGCProps = {
  i18n: i18nObj,
  data: detailPetitionDataFaker,
  origenBalances: origenBalancesRows(),
  handleRefresh: (): void => {}
}

const petitionFromProps = {
  i18n: i18nObj,
  data: detailPetitionDataFaker,
  formsJuridic: formsJuridicRows(),
  referencesBank: referencesBankRows(),
  commentsFactory: commentsFactoryRows(),
  balanceNPGC: balancesNPGCProps,
  handleAccept: (): void => {},
  handleBack: (): void => {},
  handleCancel: (): void => {}
}

const RequestListStory: React.FC = () => {
  return (
    <RequestList
      i18n={i18nObj}
      tableRequestListProps={tableRequestListProps}
      handleSubmit={handleSubmit}
      handleSubmitDetail={handleSubmitDetail}
      cancelType={cancelTypeRows()}
      detailRequestProps={detailRequestProps}
      handleOpenReport={handleOpenReport}
      handleSendCancel={handleSendCancel}
      petitionFromProps={petitionFromProps}
      handlePetitionPost={handlePetitionPost}
    ></RequestList>
  )
}

export { RequestListStory }

storiesOf('Components|Templates.RequestList', module)
  .addDecorator(withThemeProvider)
  .add('RequestList', () => <RequestListStory />)
