interface Ii18nSimulationReport {
  'SimulationReport:title': string
  'SimulationReport:labelFile': string
  'SimulationReport:labelExaminar': string
  'SimulationReport:labelInformacion': string
  'SimulationReport:labelFicheros': string
  'SimulationReport:buttonAccept': string
  'SimulationReport:buttonCancel': string
  'SimulationReport:labelFicherosNombre': string
}

interface ISimulationReportData{
  name: string
  tamano: string
  file: any
}

export interface ISimulationReport {
  i18n: Ii18nSimulationReport
  handleSendFiles: (files) => void
  showResult: boolean
  data: ISimulationReportData[]
  handleCleanFiles: () => void
}
