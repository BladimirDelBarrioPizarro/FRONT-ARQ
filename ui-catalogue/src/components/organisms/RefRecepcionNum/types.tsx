import { ICorrespondentDataRequestForm } from '../../molecules/CorrespondentData/types'
import { ICompanyDataRequestForm } from '../../molecules/CompanyData/types'
import { IApplicationDetailsRequestForm } from '../../molecules/ApplicationDetails/types'

interface Ii18nRefReceptionNum {
  'RefReceptionNum:title': string
  'RefReceptionNum:buttonAlta': string
  'RefReceptionNum:buttonRecepcion': string
  'RefReceptionNum:buttonEliminar': string
}

export interface IRefReceptionNumRequestForm {
  correspondentData: ICorrespondentDataRequestForm
  companyData: ICompanyDataRequestForm
  applicationDetails: IApplicationDetailsRequestForm
}
export interface IRefReceptionNum {
  i18n: any
  data: IRefReceptionNumRequestForm
  handleAlta: () => void
  handleReception: () => void
  handleCancel: () => void
}
