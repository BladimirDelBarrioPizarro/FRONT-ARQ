import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { PetitionForm } from '../../components/organisms/PetitionForm/PetitionForm'
import i18nObj from '../i18n.json'
import {
  detailPetitionDataFaker,
  origenBalancesRows,
  formsJuridicRows,
  referencesBankRows,
  commentsFactoryRows
} from '../../mocks'

const handleRefresh = (): void => alert('cancel')

const balancesNPGC = {
  i18n: i18nObj,
  data: detailPetitionDataFaker,
  origenBalances: origenBalancesRows(),
  handleRefresh: handleRefresh
}

const handleAccept = (data): void => { }
const handleBack = (): void => alert('back')
const handleCancel = (): void => alert('cancel')

const PetitionFormStory: React.FC = () => {
  return (
    <PetitionForm
      i18n={i18nObj}
      data={detailPetitionDataFaker}
      formsJuridic={formsJuridicRows()}
      referencesBank={referencesBankRows()}
      commentsFactory={commentsFactoryRows()}
      balanceNPGC={balancesNPGC}
      handleAccept={handleAccept}
      handleBack={handleBack}
      handleCancel={handleCancel}
    />
  )
}

export { PetitionFormStory }

storiesOf('Components|Organisms.PetitionForm', module)
  .addDecorator(withThemeProvider)
  .add('PetitionForm', () => <PetitionFormStory />)
