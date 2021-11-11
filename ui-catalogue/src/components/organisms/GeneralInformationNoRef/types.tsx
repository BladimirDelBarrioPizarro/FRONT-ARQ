import { ReportTypes } from '../../templates/BaseReportNoRef/types'
import { IDatosGeneralesNoRefRequestFrom } from '../../molecules/DatosGeneralesNoRef/types'
import { IdataIdentificationRequestForm } from '../../molecules/Identification/types'
import { IdataIdentificationFR_PT_ITRequestFrom } from '../../molecules/IdentificationFR_PT_IT/types'
import { IGeneralDataRestoPaises2RequestForm } from '../../molecules/GeneralDataRestoPaises2/types'
import { IGeneralDataRequestForm } from '../../molecules/GeneralData/types'
import { IIdentificationNoDBRequestForm } from '../../molecules/IdentificationnoDB/types'
import { ITradeNamesRequestForm } from '../../molecules/TradeNames/types'
import { IDatosHostRequestForm } from '../../molecules/DatosHost/types'
import { IAjtsDBGDPRequestForm } from '../../molecules/AJTSDB-GDP/types'
import { IAveragePaymentDaysRequestForm } from '../../molecules/AveragePaymentDays/types'
import { ISummaryFinancialInformationRequestForm } from '../../molecules/SummaryFinancialInformation/types'
import { IPrimaryResidenceRequestForm } from '../../molecules/PrimaryResidence/types'
import { IManagersRequestForm } from '../../molecules/Managers/types'
import { IExportsRequestForm } from '../../molecules/Exports/types'
import { IScoringRequestForm } from '../../molecules/Scoring/types'
import { IUnpaidClaimsProtestsRequestForm } from '../../molecules/UnpaidClaimsProtests/types'
import { IDefaultsAsnefRequestForm } from '../../molecules/DefaultsAsnef/types'
import { IIncidentsAsnefRequestForm } from '../../molecules/IncidentsAsnef/types'
import { INonPaymentsRequestForm } from '../../molecules/NonPayments/types'
import { IDemandsRequestForm } from '../../molecules/Demands/types'
import { IRatingsDBDPRequestForm } from '../../molecules/RatingsDBGDP/types'
import { IOtherRTERequestForm } from '../../molecules/OtherRTE/types'
import { IObservationsDBGDPRequestForm } from '../../molecules/ObservationsDBGDP/types'
import { ITaxCodesEUDBPRequestForm } from '../../molecules/TaxCodesEUDBP/types'
import { INaceCnaeRequestForm } from '../../molecules/NaceCnae/types'
import { IOtherDataRequestForm } from '../../molecules/OtherData/types'
import { IComercialNamesRequestForm } from '../../molecules/ComercialNames/types'
import { IAJTEUDBPRequestForm } from '../../molecules/AJT-EUDBP/types'
import { IResumeRequestForm } from '../../molecules/Resume/types'
import { IPreviousCompanyRequestForm } from '../../molecules/PreviousCompany/types'
import { IPreviousCompanyTradingRequestForm } from '../../molecules/PreviousCompanyTrading/types'
import { ICompaniesRelatedRequestForm } from '../../molecules/CompaniesRelated/types'
import { IProtestsDemandsEUDBPFormRequest } from '../../molecules/ProtestDemandsEUBDP/types'
import { INonPaymentAsnefFormRequest } from '../../molecules/NonPaymentAsnef/types'
import { IBankEUDBPRequestForm } from '../../molecules/BankEUBDP/types'
import { IPrimaryResidenceNoDBRequestForm } from '../../molecules/PrimaryResidenceNoDB/types'

export interface IGeneralInformationRequestForm {
  generalData: IDatosGeneralesNoRefRequestFrom
  generalDataRestoPaises2: IGeneralDataRestoPaises2RequestForm
  generalDatanoDB: IGeneralDataRequestForm
  identification: IdataIdentificationRequestForm
  identificationFRPTIT: IdataIdentificationFR_PT_ITRequestFrom
  identificationnoDB: IIdentificationNoDBRequestForm
  tradeNames: ITradeNamesRequestForm
  datosHost: IDatosHostRequestForm
  ajtsDBGDP: IAjtsDBGDPRequestForm
  averagePaymentDays: IAveragePaymentDaysRequestForm
  summaryFinancialInformation: ISummaryFinancialInformationRequestForm
  primaryResidence: IPrimaryResidenceRequestForm
  managers: IManagersRequestForm
  exports: IExportsRequestForm
  scoring: IScoringRequestForm
  unpaidClaimsProtests: IUnpaidClaimsProtestsRequestForm
  defaultsAsnef: IDefaultsAsnefRequestForm
  incidentsAsnef: IIncidentsAsnefRequestForm
  nonPayments: INonPaymentsRequestForm
  demands: IDemandsRequestForm
  ratingDBDP: IRatingsDBDPRequestForm
  otherRTE: IOtherRTERequestForm
  observations: IObservationsDBGDPRequestForm
  taxcodesEUDBP: ITaxCodesEUDBPRequestForm
  naceCnae: INaceCnaeRequestForm
  otherData: IOtherDataRequestForm
  comercialNames: IComercialNamesRequestForm
  ajtEUDBP: IAJTEUDBPRequestForm
  resume: IResumeRequestForm
  previousCompany: IPreviousCompanyRequestForm
  previousCompanyTrading: IPreviousCompanyTradingRequestForm
  companiesRelated: ICompaniesRelatedRequestForm
  protestsDemandsEUDBP: IProtestsDemandsEUDBPFormRequest
  nonPaymentsAsnef: INonPaymentAsnefFormRequest
  bankEUDBP: IBankEUDBPRequestForm
  primaryResidenceNoDB: IPrimaryResidenceNoDBRequestForm
}

export interface IGeneralInformationNoRef {
  i18n: any
  data: IGeneralInformationRequestForm
  report: ReportTypes
}
