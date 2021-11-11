import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { OtherEvents } from '../../components/molecules/OtherEvents/OtherEvents'
import i18nObj from '../i18n.json'
import { dataOtherEventsFaker } from '../../mocks/'

const OtherEventsStory: React.FC = () => {
  return (
    <OtherEvents
      i18n={i18nObj}
      data={dataOtherEventsFaker}
    />)
}

export { OtherEventsStory }

storiesOf('Components|Molecules.OtherEvents', module)
  .addDecorator(withThemeProvider)
  .add('OtherEvents', () => <OtherEventsStory />)
