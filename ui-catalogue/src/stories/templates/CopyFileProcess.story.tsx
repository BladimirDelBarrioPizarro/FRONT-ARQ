import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { CopyFileProcess } from '../../components/templates/CopyFileProcess/CopyFileProcess'
import i18nObj from '../i18n.json'

const CopyFileProcessStory: React.FC = () => {
  const sending = ''
  const handleChange = (files: File[]): void => {}
  const handleSendFiles = (dataFile: any): void => {}
  const handleCancelFiles = (): void => {}
  const handleDeleteFile = (n: string): void => {}
  const handleRowClick = (...rest): any => { console.log(...rest) } // eslint-disable-line
  const onChangePage = (): any => null
  const onChangeRowsPerPage = (): any => null
  const handleDownloadFile = (): any => null
  const totalRows = 100
  const page = 0

  const data = [
    {
      error: false,
      name: 'archivo 1',
      size: 123,
      type: '.csv'
    },
    {
      error: false,
      name: 'archivo 2',
      size: 123,
      type: '.error'
    }
  ]

  const handleRowClickSearchResult = (...rest): any => { console.log(...rest) } // eslint-disable-line
  const rowsPerPage = 5

  const historicTableProps = {
    data: data,
    i18n: i18nObj,
    handleRowClick: handleRowClickSearchResult,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    totalRows: totalRows,
    rowsPerPage: rowsPerPage,
    page: page,
    handleDownloadFile: handleDownloadFile
  }

  return (
    <CopyFileProcess
      // disabled={disabled}
      handleDeleteFile={handleDeleteFile}
      handleSendFiles={handleSendFiles}
      handleChange={handleChange}
      handleCancelFiles={handleCancelFiles}
      sending={sending}
      i18n={i18nObj}
      historicTableProps={historicTableProps}
      handleRowClick={handleRowClick}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      totalRows={totalRows}
      handleDownloadFile={handleDownloadFile}
      page={page}
    />
  )
}
export { CopyFileProcessStory }

storiesOf('Components|Templates.CopyFileProcess', module)
  .addDecorator(withThemeProvider)
  .add('CopyFileProcess', () => <CopyFileProcessStory />)
