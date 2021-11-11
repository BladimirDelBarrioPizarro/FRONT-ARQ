export enum IPageTypes{
  NOTHING,
  CONSULT,
  REFERENCES,
  BOEN,
  SIMULATION,
  FTP,
  PETITIONS,
  MASIVE,
  INFORMA
}

export interface IDashboardContent {
  i18n: any
  page: IPageTypes
}
