import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RefReceptionNum } from '../../components/organisms/RefRecepcionNum/RefReceptionNum'
import {
  dataRefReceptionNumFaker
} from '../../mocks'
import i18nObj from '../i18n.json'

const RefReceptionNumStory: React.FC = () => {
  const handleAta = (): void => {}
  const handleReception = (): void => {}
  const handleCancel = (): void => {}
  return <RefReceptionNum
    i18n={i18nObj}
    data={dataRefReceptionNumFaker}
    handleAlta={handleAta}
    handleReception={handleReception}
    handleCancel={handleCancel}
  />
}

export { RefReceptionNumStory }

storiesOf('Components|Organisms.RefReceptionNum', module)
  .addDecorator(withThemeProvider)
  .add('RefReceptionNum', () => <RefReceptionNumStory />)
