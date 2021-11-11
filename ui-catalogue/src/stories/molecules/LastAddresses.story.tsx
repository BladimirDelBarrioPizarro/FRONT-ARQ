import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { LastAddresses } from '../../components/molecules/LastAddresses/LastAddresses'
import { dataLastAddressesFaker } from '../../mocks'
import i18nObj from '../i18n.json'

const LastAddressesStory: React.FC = () => {
  return (
    <LastAddresses
      i18n={i18nObj}
      data={dataLastAddressesFaker}
    />)
}

export { LastAddressesStory }

storiesOf('Components|Molecules.LastAddresses', module)
  .addDecorator(withThemeProvider)
  .add('LastAddresses', () => <LastAddressesStory />)
