export interface I18nMasiveTabReport{
  'MasiveTableReport:reportTbNoMatch': string
  'MasiveTableReport:reportTbNext': string
  'MasiveTableReport:reportTbPrevious': string
  'MasiveTableReport:reportTbPerPage': string
  'MasiveTableReport:reportTbDisplayRows': string
  'MasiveTableReport:reportTbSearch': string
  'MasiveTableReport:reportTbDownladCsv': string
  'MasiveTableReport:reportTbPrint': string
  'MasiveTableReport:reportTbViewColumns': string
  'MasiveTableReport:reportTbFilterTable': string
  'MasiveTableReport:reportTbTitle': string
  'MasiveTableReport:reportTbReset': string
  'MasiveTableReport:reportTbViewColumnsShow': string
  'MasiveTableReport:reportTbText': string
  'MasiveTableReport:reportTbDelete': string
  'MasiveTableReport:reportTbReportTitle': string
  'MasiveTableReport:reportTbColumnsCode': string
  'MasiveTableReport:reportTbColumnsCorresponsal': string
  'MasiveTableReport:reportTbColumnsProducto': string
  'MasiveTableReport:reportTbColumnsDate': string
  'MasiveTableReport:reportTbColumnsDocumentType': string
  'MasiveTableReport:reportRefTbColumnsAgency': string
  'MasiveTableReport:reportRefTbColumnsCif': string
  'MasiveTableReport:reportRefTbColumnsCode': string
  'MasiveTableReport:reportRefTbColumnsDate': string
  'MasiveTableReport:reportRefTbColumnsType': string
}

export interface IMasiveTableReportData {
  fecha: string
  tipoDocumento: string
  corresponsal: string
  codProducto: string
}

export interface IMasiveTableReport {
  i18n: I18nMasiveTabReport
  data: IMasiveTableReportData []
  handleRowClick: (rowData: any) => void
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  totalRows: number
  rowsPerPage: number
  page: number
  onViewColumnsChange: (column: any) => void
  onColumnSortChange: (changedColumn: string, direction: string) => void
  handleCheckReport: (value: any, tableMeta: any) => any
}
