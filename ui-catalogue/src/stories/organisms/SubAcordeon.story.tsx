import * as React from 'react'
import { storiesOf } from '@storybook/react'

import withThemeProvider from '../../ui/theme/ThemeDecorator'

import { SubAcordeon } from '../../components/organisms/SubAcordeon/SubAcordeon'

const SubAcordeonStory: React.FC = () => {
  const subAcordeon = {
    subheader: 'Identificacion/Localizacion',
    data: [
      {
        name: 'Razon Social',
        value: 1
      },
      {
        name: 'Domicilio',
        value: 1
      }
    ]
  }

  return <SubAcordeon subAcordeon={subAcordeon}/>
}

export { SubAcordeonStory }

storiesOf('Components|Organisms.SubAcordeon', module)
  .addDecorator(withThemeProvider)
  .add('SubAcordeon', () => <SubAcordeonStory />)
