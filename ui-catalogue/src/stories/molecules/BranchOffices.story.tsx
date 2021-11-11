import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BranchOffices } from '../../components/molecules/BranchOffices/BranchOffices'
import i18nObj from '../i18n.json'
import { dataBranchOfficesFaker } from '../../mocks/'

const BranchOfficesStory: React.FC = () => {
  return (
    <BranchOffices
      i18n={i18nObj}
      data={dataBranchOfficesFaker}
    />)
}

export { BranchOfficesStory }

storiesOf('Components|Molecules.BranchOffices', module)
  .addDecorator(withThemeProvider)
  .add('BranchOffices', () => <BranchOfficesStory />)
