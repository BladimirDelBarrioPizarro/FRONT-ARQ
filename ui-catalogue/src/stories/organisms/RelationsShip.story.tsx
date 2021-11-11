import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RelationsShip } from '../../components/organisms/Relationships/Relationships'
import {
  dataRelationShipFaker,
  dataAdministratorFaker,
  dataSubsidiaryAffiliatesFaker,
  dataBranchOfficesFaker,
  dataBankFaker
} from '../../mocks'
import i18nObj from '../i18n.json'
import { ReportTypes } from '../../components/templates/BaseReport/types'

const RelationsShipStory: React.FC = () => {
  const dataFaker = {
    shareHolders: dataRelationShipFaker,
    administrators: dataAdministratorFaker,
    subsidiaryAffiliates: dataSubsidiaryAffiliatesFaker,
    branchOffices: dataBranchOfficesFaker,
    banks: dataBankFaker
  }

  return <RelationsShip
    report={ReportTypes.EUDBP_IT}
    i18n={i18nObj}
    data={dataFaker}
  />
}

export { RelationsShipStory }

storiesOf('Components|Organisms.RelationsShip', module)
  .addDecorator(withThemeProvider)
  .add('RelationsShip', () => <RelationsShipStory />)
