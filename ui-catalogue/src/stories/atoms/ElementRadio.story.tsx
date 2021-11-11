import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ElementRadio } from '../../components/atoms/ElementRadio/ElementRadio'

const ElementRadioStory: React.FC = () => {
  const handleBack = (): void => {}
  return (
    <ElementRadio
      label={'Confidencialidad'}
      name={'Confidencialidad'}
      value={'test'}
      labelOpt1={'SI'}
      labelOpt2={'NO'}
      onChange={handleBack}
    />
  )
}

export { ElementRadioStory }

storiesOf('Components|Atoms.ElementRadio', module)
  .addDecorator(withThemeProvider)
  .add('ElementRadio', () => <ElementRadioStory />)
