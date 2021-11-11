import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ElementsInputRow } from '../../components/atoms/ElementsInputsRow/ElementsInputsRow'

const ElementsInputRowStory: React.FC = () => {
  return (
    <ElementsInputRow
      type={'text'}
      name={'name'}
      label={'Mes'}
      values={[1, 2, 3, 4, 5, 6, 7, 8]}
    />
  )
}

export { ElementsInputRowStory }

storiesOf('Components|Atoms.ElementsInputRow', module)
  .addDecorator(withThemeProvider)
  .add('ElementsInputRow', () => <ElementsInputRowStory />)
