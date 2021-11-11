import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BasicData } from '../../components/molecules/BasicData/BasicData'
import i18nObj from '../i18n.json'
import { dataBasicDataFaker } from '../../mocks/'

const CommunicationsStory: React.FC = () => {
  return (
    <BasicData
      i18n={i18nObj}
      data={dataBasicDataFaker}
    />)
}

export { CommunicationsStory }

storiesOf('Components|Molecules.BasicData', module)
  .addDecorator(withThemeProvider)
  .add('BasicData', () => <CommunicationsStory />)
