import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ElementInputCol } from '../../components/atoms/ElementInputCol/ElementInputCol'

const ElementInputColStory: React.FC = () => {
  return (
    <ElementInputCol
      type={'text'}
      name={'name'}
      label={'N Transacciones comerciales'}
      value={'12345'}
      size={'l'}
    />
  )
}

export { ElementInputColStory }

storiesOf('Components|Atoms.ElementInputCol', module)
  .addDecorator(withThemeProvider)
  .add('ElementInputCol', () => <ElementInputColStory />)
