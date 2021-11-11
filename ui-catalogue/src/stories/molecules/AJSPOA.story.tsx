import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { AJTSPOAComponent } from '../../components/molecules/AJTSPOA/AJSPOA'
import i18nObj from '../i18n.json'
import { dataAJTSPOAFaker } from '../../mocks/'

const AJTSPOAStory: React.FC = () => {
  return (
    <AJTSPOAComponent
      i18n={i18nObj}
      data={dataAJTSPOAFaker}
    />)
}

export { AJTSPOAStory }

storiesOf('Components|Molecules.AJTSPOA', module)
  .addDecorator(withThemeProvider)
  .add('AJTSPOA', () => <AJTSPOAStory />)
