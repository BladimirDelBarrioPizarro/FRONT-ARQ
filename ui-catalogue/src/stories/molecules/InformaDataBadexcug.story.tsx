import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { InformaDataBadexcug } from '../../components/molecules/InformaDataBadexcug/InformaDataBadexcug'
import i18nObj from '../i18n.json'
import { dataInformaDataFaker } from '../../mocks'

const InformaDataBadexcugStory: React.FC = () => {
  return (
    <InformaDataBadexcug
      i18n={i18nObj}
      data={dataInformaDataFaker}
    />)
}

export { InformaDataBadexcugStory }

storiesOf('Components|Molecules.InformaData', module)
  .addDecorator(withThemeProvider)
  .add('InformaData BADEXCUG', () => <InformaDataBadexcugStory />)
