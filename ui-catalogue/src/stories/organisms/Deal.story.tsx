import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Deal } from '../../components/organisms/Deal/Deal'
import {
  dataCnaeFaker,
  dataDealFormFaker,
  dataImportsExportsFaker,
  dataOtherEventsFaker
} from '../../mocks'
import i18nObj from '../i18n.json'
import { ReportTypes } from '../../components/templates/BaseReport/types'

const DealStory: React.FC = () => {
  const dealData = {
    cnae: dataCnaeFaker,
    dealForm: dataDealFormFaker,
    importsExports: dataImportsExportsFaker,
    otherEvents: dataOtherEventsFaker
  }

  return <Deal
    report={ReportTypes.Standard}
    i18n={i18nObj}
    data={dealData}
  />
}

export { DealStory }

storiesOf('Components|Organisms.Deal', module)
  .addDecorator(withThemeProvider)
  .add('Deal', () => <DealStory />)
