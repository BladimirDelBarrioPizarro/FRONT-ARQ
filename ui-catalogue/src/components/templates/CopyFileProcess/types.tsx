import { IHistoricTable } from '../../organisms/HistoricTable/HistoricTable'

interface Ii18nCopyFileProcess {
  'CopyFileProcess:reportTbNoMatch': string
  'CopyFileProcess:reportTbNext': string
  'CopyFileProcess:reportTbPrevious': string
  'CopyFileProcess:reportTbPerPage': string
  'CopyFileProcess:reportTbDisplayRows': string
  'CopyFileProcess:reportTbSearch': string
  'CopyFileProcess:reportTbDownladCsv': string
  'CopyFileProcess:reportTbPrint': string
  'CopyFileProcess:reportTbViewColumns': string
  'CopyFileProcess:reportTbFilterTable': string
  'CopyFileProcess:reportTbTitle': string
  'CopyFileProcess:reportTbReset': string
  'CopyFileProcess:reportTbViewColumnsShow': string
  'CopyFileProcess:reportTbText': string
  'CopyFileProcess:reportTbDelete': string
  'CopyFileProcess:fileTableTbColumnsValidation': string
  'CopyFileProcess:fileTableTbColumnsName': string
  'CopyFileProcess:fileTableTbColumnsSize': string
  'CopyFileProcess:fileTableTbColumnsDelete': string
  'CopyFileProcess:uploadInput': string
  'CopyFileProcess:buttonSend': string
  'CopyFileProcess:buttonCancel': string
  'CopyFileProcess:templateTitlecfp': string
  'CopyFileProcess:labelFilecfp': string
  'CopyFileProcess:spanmessagecfp': string
  'CopyFileProcess:spanmessage2cfp': string
}

export interface ICopyFileProcess {
  sending: string
  handleChange: (files: File[]) => unknown
  handleSendFiles: (files: any) => any
  handleCancelFiles: () => void
  handleDeleteFile: (n: string) => void
  handleDownloadFile: () => void
  i18n: Ii18nCopyFileProcess
  historicTableProps: IHistoricTable
  handleRowClick: (rowData: any) => void
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  totalRows: number
  rowsPerPage?: number
  page: number
}
