import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { SimulationReport } from '../../components/templates/SimulationReport/SimulationReport'
import i18nObj from '../i18n.json'

const SimulationReportStory: React.FC = () => {
  const handleSendFiles = (files): void => {

  }

  const handleCleanFiles = (): void => {
  }
  return <SimulationReport
    i18n={i18nObj}
    handleSendFiles={handleSendFiles}
    showResult={false}
    data={[]}
    handleCleanFiles={handleCleanFiles}
  />
}

export { SimulationReportStory }

const SimulationReportResultStory: React.FC = () => {
  const dataFaker = [
    {
      name: 'file 1',
      tamano: '123 kb',
      file: null
    },
    {
      name: 'file 2',
      tamano: '123 kb',
      file: null
    },
    {
      name: 'file 3',
      tamano: '123 kb',
      file: null
    },
    {
      name: 'file 4',
      tamano: '123 kb',
      file: null
    },
    {
      name: 'file 5',
      tamano: '123 kb',
      file: null
    },
    {
      name: 'file 6',
      tamano: '123 kb',
      file: null
    }
  ]

  const handleSendFiles = (files): void => {
  }

  const handleCleanFiles = (): void => {
  }

  return <SimulationReport
    i18n={i18nObj}
    handleSendFiles={handleSendFiles}
    showResult={true}
    data={dataFaker}
    handleCleanFiles={handleCleanFiles}
  />
}

export { SimulationReportResultStory }

storiesOf('Components|Templates.SimulationReport', module)
  .addDecorator(withThemeProvider)
  .add('SimulationReport without result', () => <SimulationReportStory />)
  .add('SimulationReport with result', () => <SimulationReportResultStory />)
