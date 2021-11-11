import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ElementsInput } from '../../components/atoms/ElementsInput/ElementsInput'

const ElementsInputStory: React.FC = () => {
  return (
    <ElementsInput
      type={'text'}
      name={'name'}
      label={'Mes'}
      values={[]}
      index={true}
      bold={false}
    />
  )
}

export { ElementsInputStory }

storiesOf('Components|Atoms.ElementsInput', module)
  .addDecorator(withThemeProvider)
  .add('ElementsInput', () => <ElementsInputStory />)
