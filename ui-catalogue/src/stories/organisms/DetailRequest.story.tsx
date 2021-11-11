import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { DetailRequest } from '../../components/organisms/DetailRequest/DetailRequest'
import i18nObj from '../i18n.json'
import { detailRequestDataEmpty, detailRequestDataFaker } from '../../mocks'

const DetailRequestStoryEmptyTables: React.FC = () => {
  return <DetailRequest
    i18n={i18nObj}
    data={detailRequestDataEmpty}
  />
}

const DetailRequestStoryTablesWithData: React.FC = () => {
  return <DetailRequest
    i18n={i18nObj}
    data={detailRequestDataFaker}
  />
}

export { DetailRequestStoryEmptyTables, DetailRequestStoryTablesWithData }

storiesOf('Components|Organisms.DetailRequest', module)
  .addDecorator(withThemeProvider)
  .add('Empty tables', () => <DetailRequestStoryEmptyTables />)
  .add('Tables with data', () => <DetailRequestStoryTablesWithData />)
