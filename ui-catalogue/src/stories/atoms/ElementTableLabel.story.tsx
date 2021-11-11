import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ElementTableLabel } from '../../components/atoms/ElementTableLabel/ElementTableLabel'
import { dataBouncedChecksFaker } from '../../mocks/BouncedChecksMock'

const ElementTableLabelStory: React.FC = () => {
  return (
    <ElementTableLabel
      label1={'CANTIDAD'}
      label2={'MONTO'}
      label3={'<=6 meses'}
      label4={'7-12 meses'}
      label5={'13-24 meses'}
      label6={'+de 24 meses'}
      label7={'<=6 meses'}
      label8={'7-12 meses'}
      label9={'13-24 meses'}
      label10={'+de 24 meses'}
      label11={'Sin fondo'}
      label12={'Defectos formales'}
      label13={'Total rechazados'}
      label14={'Total abonados'}
      label15={'% Abonados'}
      values={dataBouncedChecksFaker}

    />
  )
}

export { ElementTableLabelStory }

storiesOf('Components|Atoms.ElementTableLabel', module)
  .addDecorator(withThemeProvider)
  .add('ElementTableLabel', () => <ElementTableLabelStory />)
