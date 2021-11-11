import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { DrawerCorresponsalCode } from '../../components/organisms/DrawerCorresponsalCode/DrawerCorresponsalCode'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import i18n from '../i18n.json'
import { tableCountryDataRows } from '../../mocks/index'

const correspondents = [
  {
    codCorresponsal: 12345,
    nombreCorresponsal: 'Descripcion 1'
  },
  {
    codCorresponsal: 67890,
    nombreCorresponsal: 'Descripcion 2'
  }
]

const handleRowClickSearchResult = (): void => {}
const onChangePage = (): void => {}
const onChangeRowsPerPage = (): void => {}
const handleSearch = (): void => {}
const totalRows = 10

const tableCorrespondentsProps = {
  i18n: i18n,
  data: correspondents,
  handleRowClickSearchResult: handleRowClickSearchResult,
  onChangePage: onChangePage,
  onChangeRowsPerPage: onChangeRowsPerPage,
  totalRows: totalRows
}

const DrawerCorresponsalCodeStory: React.FC = () => (
  <DrawerCorresponsalCode
    i18n= {i18n}
    countries= {tableCountryDataRows(5)}
    handleSearch= {handleSearch}
    loading= {false}
    error= {false}
    tableCorrespondentsProps= {tableCorrespondentsProps}
  />
)

const DrawerCorresponsalCodeStoryEmpty: React.FC = () => (
  <DrawerCorresponsalCode
    i18n= {i18n}
    countries= {tableCountryDataRows(5)}
    handleSearch= {handleSearch}
    loading= {false}
    error= {false}
    tableCorrespondentsProps= {
      Object.assign(
        {},
        tableCorrespondentsProps,
        { correspondents: [] }
      )}
  />
)
export { DrawerCorresponsalCodeStory }

storiesOf('Components|Organisms.DrawerCorresponsalCode', module)
  .addDecorator(withThemeProvider)
  .add('DrawerCorresponsalCode All', () => <DrawerCorresponsalCodeStory />)
  .add('DrawerCorresponsalCode Empty', () => <DrawerCorresponsalCodeStoryEmpty />)
