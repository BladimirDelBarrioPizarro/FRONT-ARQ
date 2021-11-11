import { ICompanyAssetsRequestForm } from '../../molecules/CompanyAssetsPOAForm/types'
import { IExternalFinancingPOARequestForm } from '../../molecules/ExternalFinancingPOA/types'
import { ISummaryExternalFinancingRequestForm } from '../../molecules/SummaryExternalFinancing/types'
import { IAjtsPOARequestForm } from '../../molecules/AJTSPOA/types'

interface Ii18nCompanyAssetsPOA {
  'CompanyAssetsPOA:title': string
}

export interface ICompanyAssetsPOARequestForm {
  companyAssetsPOAForm: ICompanyAssetsRequestForm
  externalFinancingPOA: IExternalFinancingPOARequestForm[]
  summaryExternalFinancing: ISummaryExternalFinancingRequestForm
  ajtspoa: IAjtsPOARequestForm
}

export interface ICompanyAssetsPOA {
  i18n: any
  data: ICompanyAssetsPOARequestForm
}
