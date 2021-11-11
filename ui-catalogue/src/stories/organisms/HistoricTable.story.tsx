import * as React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { HistoricTable } from '../../components/organisms/HistoricTable/HistoricTable'
import i18nObj from '../i18n.json'

const HistoricTableStory: React.FC = () => {
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

  const totalRows = 10
  const handleRowClickSearchResult = (...rest): any => { console.log(...rest) } // eslint-disable-line
  const onChangePage = (): any => null
  const onChangeRowsPerPage = (): any => null
  const handleDownloadFile = (): any => null
  const rowsPerPage = 5
  const page = 0

  return <HistoricTable
    data={data}
    i18n={i18nObj}
    handleRowClick={handleRowClickSearchResult}
    onChangePage={onChangePage}
    onChangeRowsPerPage={onChangeRowsPerPage}
    totalRows={totalRows}
    rowsPerPage={rowsPerPage}
    page={page}
    handleDownloadFile={handleDownloadFile}
  />
}

export { HistoricTableStory }

storiesOf('Components|Organisms.HistoricTable', module)
  .addDecorator(withThemeProvider)
  .add('Historic Table', () => <HistoricTableStory />)
