import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RequestNumber } from '../../components/organisms/RequestNumber/RequestNumber'
import i18nObj from '../i18n.json'
import { dataRequestNumberFaker } from '../../mocks/index'

const RequestNumberStory: React.FC = () => {
  const handleAlta = (): void => {}
  const handleRecepcion = (): void => {}
  const handleCancel = (): void => {}

  return <RequestNumber
    i18n={i18nObj}
    data={dataRequestNumberFaker}
    handleAlta={handleAlta}
    handleRecepcion={handleRecepcion}
    handleCancel={handleCancel}
  />
}

export { RequestNumberStory }

storiesOf('Components|Organisms.RequestNumber', module)
  .addDecorator(withThemeProvider)
  .add('RequestNumber', () => <RequestNumberStory />)
