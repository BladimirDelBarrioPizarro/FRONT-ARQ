export interface IReports {
  code: number
  denomination: string
  cif: string
  agency: string
  date: string
  type: string
}

interface Ii18n {
  'ExperianR:label1': string
  'ExperianR:label2': string
  'ExperianR:label3': string
  'ExperianR:button2': string
  'ExperianR:modalp': string
  'ExperianR:errorCIF': string
}

export interface IExperianR {
  i18n: Ii18n
  handleSearchExperian: (cif: any, radio: any) => void
}
