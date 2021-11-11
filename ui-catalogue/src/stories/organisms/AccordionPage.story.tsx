import * as React from 'react'
import { storiesOf } from '@storybook/react'

import withThemeProvider from '../../ui/theme/ThemeDecorator'

import { AcordeonPage } from '../../components/organisms/AccordionPage/AccordionPage'
import i18nObj from '../i18n.json'

const i18n = {
  header: i18nObj.generalData
}
const acordeonBodyFull = {
  data: [
    {
      subheader: true,
      data: [
        {
          name: 'Uno',
          value: 1
        },
        {
          name: 'Dos',
          value: 2
        },
        {
          name: 'Tres',
          value: 3
        },
        {
          name: 'Cuatro',
          value: 4
        }
      ]
    }
  ]
}

const acordeonBodyNoSubheader = {
  data: [
    {
      data: [
        {
          name: 'Razon Social',
          value: 1
        },
        {
          name: 'Domicilio',
          value: 1
        },
        {
          name: 'Tres',
          value: 3
        },
        {
          name: 'Cuatro',
          value: 4
        }
      ]
    }
  ]
}

const acordeonBodyNoData = {
  data: [
    {
      data: []
    }
  ]
}

const acordeonBodyEmpty = {
  data: []
}

const AcordeonBodyFull: React.FC = () => (
  <AcordeonPage
    acordeonBody={acordeonBodyFull}
    i18n={i18n}
  />
)

const AcordeonBodyNoSubheader: React.FC = () => (
  <AcordeonPage
    acordeonBody={acordeonBodyNoSubheader}
    i18n={i18n}
  />
)

const AcordeonBodyNoData: React.FC = () => (
  <AcordeonPage
    acordeonBody={acordeonBodyNoData}
    i18n={i18n}
  />
)

const AcordeonBodyEmpty: React.FC = () => (
  <AcordeonPage
    acordeonBody={acordeonBodyEmpty}
    i18n={i18n}
  />
)

export {
  AcordeonBodyFull,
  AcordeonBodyNoSubheader,
  AcordeonBodyNoData,
  AcordeonBodyEmpty
}

storiesOf('Components|Organisms.AccordionPage', module)
  .addDecorator(withThemeProvider)
  .add('Accordion with sub-accordion', () => <AcordeonBodyFull />)
  .add('Accordion without sub-accordion', () => <AcordeonBodyNoSubheader />)
  .add('Accordion without data', () => <AcordeonBodyNoData />)
  .add('Accordion with empty data', () => <AcordeonBodyEmpty />)
