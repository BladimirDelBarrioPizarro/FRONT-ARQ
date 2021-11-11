import { ITableRequestList } from '../../molecules/TableRequestList/TableRequestList'
import { IRequesForm } from '../../organisms/PetitionForm/types'
import { IDetailRequestList } from '../../organisms/DetailRequest/types'

interface IComboValues{
  value: string
  label: string
}

interface I18nRequestList {
  'RequestList:titlerl': string
  'RequestList:labelDaterl': string
  'RequestList:labelDaterTo': string
  'RequestList:buttonSendrl': string
  'RequestList:typerl': string
  'RequestList:cancelReasonrl': string
  'RequestList:acceptrl': string
  'RequestList:setReportrl': string
  'RequestList:cancelrl': string
  'RequestList:menuTitle': string
}

export interface IDateTimeFormatOptions {
  year: 'numeric'
  month: '2-digit'
  day: '2-digit'
}

export interface IRequestList {
  tableRequestListProps: ITableRequestList
  i18n: I18nRequestList
  handleSubmit: (dateFrom: any, itemsPerPage: number, currentPage: number, sortedBy: string, sortedType: string) => void
  handleSubmitDetail: (petition: any) => void
  detailRequestProps: IDetailRequestList
  handleOpenReport: () => void
  cancelType: IComboValues[]
  handleSendCancel: (petition: any, motive: any) => void
  petitionFromProps: IRequesForm
  handlePetitionPost: (params: any) => void
}
