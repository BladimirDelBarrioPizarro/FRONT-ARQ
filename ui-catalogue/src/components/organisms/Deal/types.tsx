import { ICnaeRequestForm } from '../../molecules/Cnaes/types'
import { IDealFormRequestForm } from '../../molecules/DealForm/types'
import { IImportsExportsRequestForm } from '../../molecules/ImportsExports/types'
import { IOtherEventsRequestForm } from '../../molecules/OtherEvents/types'
import { ReportTypes } from '../../templates/BaseReport/types'

export interface IDealDataRequestForm {
  cnae: ICnaeRequestForm
  dealForm: IDealFormRequestForm
  importsExports: IImportsExportsRequestForm
  otherEvents: IOtherEventsRequestForm[]
}
export interface IDeal {
  report: ReportTypes
  i18n: any
  data: IDealDataRequestForm
}
