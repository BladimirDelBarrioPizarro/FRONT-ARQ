import { IDrawerBusinessCode } from '../../organisms/DrawerBusinessCode/types'

interface ICountry {
  value: string
  label: string
}

interface Ii18nFilesTableFTP {
  'FilesTableFTP:reportTbNoMatch': string
  'FilesTableFTP:reportTbNext': string
  'FilesTableFTP:reportTbPrevious': string
  'FilesTableFTP:reportTbPerPage': string
  'FilesTableFTP:reportTbDisplayRows': string
  'FilesTableFTP:reportTbSearch': string
  'FilesTableFTP:reportTbDownladCsv': string
  'FilesTableFTP:reportTbPrint': string
  'FilesTableFTP:reportTbViewColumns': string
  'FilesTableFTP:reportTbFilterTable': string
  'FilesTableFTP:reportTbTitle': string
  'FilesTableFTP:reportTbReset': string
  'FilesTableFTP:reportTbViewColumnsShow': string
  'FilesTableFTP:reportTbText': string
  'FilesTableFTP:reportTbDelete': string
  'FilesTableFTP:label1ft': string
  'FilesTableFTP:label2ft': string
  'FilesTableFTP:label3ft': string
  'FilesTableFTP:label4ft': string
  'FilesTableFTP:cardHeaderft': string
  'FilesTableFTP:label5ft': string
  'FilesTableFTP:typo1ft': string
  'FilesTableFTP:formControlLabel1': string
  'FilesTableFTP:formControlLabel2': string
  'FilesTableFTP:typo2ft': string
  'FilesTableFTP:typo3ft': string
  'FilesTableFTP:buttonDeleteft': string
  'FilesTableFTP:buttonSendft': string
  'FilesTableFTP:typo4ft': string
  'FilesTableFTP:typo5ft': string
  'FilesTableFTP:label6ft': string
  'FilesTableFTP:label7ft': string
  'FilesTableFTP:label8ft': string
  'FilesTableFTP:buttonSearchft': string
  'FilesTableFTP:labelFileFTP': string
  'FilesTableFTP:errorCIF': string
  'FilesTableFTP:errorName': string
  'FilesTableFTP:option': string
}

interface IFilesTableForm {
  code: string
  arrayFile: any
  conf: any
  alertGenerate: any
  consolidation: any
}

export interface IFilesTableFTP {
  // disabled: boolean
  sending: string
  i18n: Ii18nFilesTableFTP
  handleRowClickSearchResult: (rowData: any) => void
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  totalRows: number
  rowsPerPage?: number
  page: number
  // fileChooserProps: IFileChooser
  findCompany: (businessForm) => void
  handleSend: (data: IFilesTableForm) => void
  drawerBusinessCodeProps: Omit<IDrawerBusinessCode, 'tableCompanyProps.handleRowClickSearchResult'>
}
