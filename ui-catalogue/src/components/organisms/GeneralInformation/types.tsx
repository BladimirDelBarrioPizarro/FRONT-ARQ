import {
  IGeneralDataRequestForm
} from '../../molecules/GeneralData/types'
import { IdataIdentificationRequestForm } from '../../molecules/Identification/types'
import { IdataDenominacionesComercialesRequestForm } from '../../molecules/DenominacionesComerciales/types'
import { IdataSummaryRequestForm } from '../../molecules/Summary/types'
import { IdataSpecificItemsBadexcugFormRequest } from '../../molecules/SpecificItemsBadexcug/types'
import { ICommunicationsRequestForm } from '../../molecules/Communications/types'
import { IdataTaxCodeRequestForm } from '../../molecules/TaxCodes/types'
import { ILegalFormRequestForm } from '../../molecules/LegalForm/types'
import { IdataBasicDataFormRequest } from '../../molecules/BasicData/types'
import { ICapitalRequestForm } from '../../molecules/Capital/types'
import { IDealDataRequestForm } from '../Deal/types'
import { ICompanyAssetsRequestForm } from '../../molecules/CompanyAssets/types'
import { IRelationsShipRequestForm } from '../../organisms/Relationships/types'
import { IPaymentsRequestForm } from '../Payments/types'
import { ILegalProceduresRequestForm } from '../../molecules/LegalProcedures/types'
import { IRatingFormRequestForm } from '../../molecules/RatingForm/types'
import { ReportTypes } from '../../templates/BaseReport/types'
import { IDatosHostRequestForm } from '../../molecules/DatosHost/types'
import { IAggregateSummaryRequestForm } from '../../molecules/AggregateSummary/types'
import { IEntityCommunicationRequestForm } from '../../molecules/EntityCommunication/types'
import { IExternalFinancingRequestForm } from '../../molecules/ExternalFinancing/types'
import { ILegalProceduresITRequestForm } from '../../molecules/LegalProceduresIT/types'
import { ICreditResponsabilityRequestForm } from '../../molecules/CreditResponsability/types'
import { IBankDataFormRequest } from '../../molecules/BankData/types'
import { IPaymentsLegalProcessFormRequestForm } from '../../molecules/PaymentsLegalProcess/types'
import { ICommunicationsPOARequestForm } from '../../molecules/CommunicationsPOA/types'
import { ICompanyAssetsPOARequestForm } from '../CompanyAssetsPOA/types'
import { IdataInformaDataBadexcugFormRequest } from '../../molecules/InformaDataBadexcug/types'
import { IdataProtestsDemandsBadexcugFormRequest } from '../../molecules/ProtestsDemandsBadexcug/types'
import { IIdentificacionEspanaInformaRequestForm } from '../../molecules/IdentificacionEspanaInforma/types'
import { IAjtsEspanaInformaRequestForm } from '../../molecules/AJTSEspanaInforma/types'
import { IDatosInformaRequestForm } from '../../molecules/DatosInforma/types'
import { IGeneralDataEUDBPRequestForm } from '../../molecules/GeneralDataEUDBP/types'
import { ICompanyAssetsEUDBPFRRequestForm } from '../../molecules/CompanyAssetsEUDBPFR/types'
import { IScoreRequestForm } from '../../molecules/Score/types'
import { IIdentityVerificationsDataForm } from '../../molecules/IdentityVerification/types'
import { IConsultasRequestForm } from '../../molecules/Consultas/types'
import { IdataBouncedChecksRequestForm } from '../../molecules/BouncedChecks/types'
import { IRejectChecksLegalRequestForm } from '../../molecules/RejectChecksLegal/types'
import { IBureauCreditRequestForm } from '../../molecules/BureauCredit/types'
import { IJudicialSourcesAlertsRequestForm } from '../../molecules/JudicialSourcesAlerts/types'
import { IdataNaceSicRequestForm } from '../../molecules/NaceSic/types'
import { IScorePeruRequestForm } from '../../molecules/ScorePeru/types'
import { IDirectoryNaturalPersonsRequestForm } from '../../molecules/DirectoryNaturalPersons/types'
import { IDirectorySunatRequestForm } from '../../molecules/DirectorySunat/types'
import { ILastAddressesRequestForm } from '../../molecules/LastAddresses/types'
import { ILegalAgentsRequestForm } from '../../molecules/LegalAgents/types'
import { IRegulatedNonFinancialSystemRequestForm } from '../../molecules/RegulatedNonFinancialSystem/types'
import { IDebtsLastPeriodRequestForm } from '../../molecules/DebtsLastPeriod/types'
import { IDebtHistoryRequestForm } from '../../molecules/DebtHistory/types'
import { ILastPeriodDetailRequestForm } from '../../molecules/LastPeriodDetail/types'
import { IHistoryPeruRequestForm } from '../../molecules/HistoryPeru/types'
import { IMicrofinanceDebtRequestForm } from '../../molecules/MicrofinanceDebt/types'
import { IdataInformationMexicoRequestForm } from '../../molecules/GeneralInformationMexico/types'
import { IScorePymeMexicoRequestForm } from '../../molecules/ScorePymeMexico/types'
import { IGeneralDataFranciaRequestFrom } from '../../molecules/GeneralDataFrancia/types'
import { IDocumentRegistrationRequestFrom } from '../../molecules/DocumentRegistration/types'
import { IOtherEventsRequestForm } from '../../molecules/OtherEventsFrancia/types'
import { IAjtsPOARequestForm } from '../../molecules/AJTSPOA/types'
import { IPaydexHistoricRequestForm } from '../../molecules/PaydexHistoric/types'
import { IPaydexSectorialRequestForm } from '../../molecules/PaydexSectorial/types'
import { IBussinessNameFranciaRequestForm } from '../../molecules/BussinessNameFrancia/types'
import { IPreviousCompanyFranciaRequestForm } from '../../molecules/PreviousCompanyFrancia/types'
import { IComercialDesignationRequestForm } from '../../molecules/ComercialDesignation/types'
import { IPreviousTradeNamesRequestForm } from '../../molecules/PreviousTradeNames/types'
import { IAddressFranciaRequestForm } from '../../molecules/AddressFrancia/types'
import { ITaxCodesFranciaRequestForm } from '../../molecules/TaxCodesFrancia/types'
import { IOrganizationTypeRequestFrom } from '../../molecules/OrganizationType/types'
import { ILegalFormFranciaRequestForm } from '../../molecules/LegalFormFrancia/types'
import { IExternalFinancingFranciaRequestForm } from '../../molecules/ExternalFinancingFrancia/types'
import { ISummarySourcesFranciaRequestForm } from '../../molecules/SummarySourcesFrancia/types'
import { IShareholdersFranciaRequestForm } from '../../molecules/ShareHoldersFrancia/types'
import { ISubsidiaryAffiliatesRequestForm } from '../../molecules/SubsidiaryAffiliates/types'
import { IBranchOfficesRequestForm } from '../../molecules/BranchOffices/types'
import { IEmployessFranciaRequestForm } from '../../molecules/EmployessFrancia/types'
import { IFacilitiesDescriptionRequestForm } from '../../molecules/FacilitiesDescription/types'
import { IBanksFranciaRequestForm } from '../../molecules/BanksFrancia/types'
import { IAdministratorsFranciaRequestForm } from '../../molecules/AdministratorsFrancia/types'
import { IPaymentFormRequestForm } from '../../molecules/PaymentForm/types'
import { ISummaryPaymentsFranciaRequestForm } from '../../molecules/SummaryPaymentsFrancia/types'
import { ILegalProceduresFranciaRequestForm } from '../../molecules/LegalProceduresFrancia/types'
import { ISummaryLegalProceduresFranciaRequestForm } from '../../molecules/SummaryLegalProceduresFrancia/types'
import { ICommentsRequestForm } from '../../molecules/Comments/types'
import { IGuaratorsRequestForm } from '../../molecules/Guarators/types'
import { IOtherUnpaidDebtsRequestFrom } from '../OtherUnpaidDebts/types'

export interface IGeneralInformationRequestForm {
  generalData: IGeneralDataRequestForm
  identification: IdataIdentificationRequestForm
  denominacionesComerciales: IdataDenominacionesComercialesRequestForm
  summary: IdataSummaryRequestForm
  specificItems: IdataSpecificItemsBadexcugFormRequest
  informaData: IdataInformaDataBadexcugFormRequest
  protestsDemands: IdataProtestsDemandsBadexcugFormRequest
  communications: ICommunicationsRequestForm
  taxCodes: IdataTaxCodeRequestForm
  naceSic: IdataNaceSicRequestForm
  legalForm: ILegalFormRequestForm
  basicData: IdataBasicDataFormRequest
  capital: ICapitalRequestForm
  deal: IDealDataRequestForm
  companyAssets: ICompanyAssetsRequestForm
  relationsShip: IRelationsShipRequestForm
  payments: IPaymentsRequestForm
  legalProcedures: ILegalProceduresRequestForm
  ratingForm: IRatingFormRequestForm[]
  datosHost: IDatosHostRequestForm
  aggregateSummary: IAggregateSummaryRequestForm
  entityCommunication: IEntityCommunicationRequestForm
  externalFinancing: IExternalFinancingRequestForm
  legalProceduresIT: ILegalProceduresITRequestForm
  creditResponsability: ICreditResponsabilityRequestForm
  bankData: IBankDataFormRequest
  paymentsLegalProcess: IPaymentsLegalProcessFormRequestForm
  communicationsPOA: ICommunicationsPOARequestForm
  companyAssetsPOA: ICompanyAssetsPOARequestForm
  identificacionEspanaInforma: IIdentificacionEspanaInformaRequestForm
  ajtsEspanaInforma: IAjtsEspanaInformaRequestForm
  datosInforma: IDatosInformaRequestForm
  generalDataEUDBP: IGeneralDataEUDBPRequestForm
  companyAssetsEUDBPFR: ICompanyAssetsEUDBPFRRequestForm
  score: IScoreRequestForm
  identityVerification: IIdentityVerificationsDataForm
  consultas: IConsultasRequestForm
  bouncedChecks: IdataBouncedChecksRequestForm
  rejectChecksLegal: IRejectChecksLegalRequestForm
  bureauCredit: IBureauCreditRequestForm
  judicialSourcesAlerts: IJudicialSourcesAlertsRequestForm
  scorePeru: IScorePeruRequestForm
  directoryNaturalPersons: IDirectoryNaturalPersonsRequestForm
  directorySunat: IDirectorySunatRequestForm
  lastAddresses: ILastAddressesRequestForm
  legalAgents: ILegalAgentsRequestForm
  regulatedNonFinancialSystem: IRegulatedNonFinancialSystemRequestForm
  debtsLastPeriod: IDebtsLastPeriodRequestForm
  debtHistory: IDebtHistoryRequestForm
  lastPeriodDetail: ILastPeriodDetailRequestForm
  historyPeru: IHistoryPeruRequestForm
  microfinanceDebt: IMicrofinanceDebtRequestForm
  informationMexico: IdataInformationMexicoRequestForm
  scorepymemexico: IScorePymeMexicoRequestForm
  generalDataFrancia: IGeneralDataFranciaRequestFrom
  documentRegistration: IDocumentRegistrationRequestFrom
  otherEventsFrancia: IOtherEventsRequestForm
  ajtsPOA: IAjtsPOARequestForm
  paydexHistoric: IPaydexHistoricRequestForm
  paydexSectorial: IPaydexSectorialRequestForm
  businessNameFrancia: IBussinessNameFranciaRequestForm
  previousCompanyFrancia: IPreviousCompanyFranciaRequestForm
  comercialDesignation: IComercialDesignationRequestForm
  previousTradeNames: IPreviousTradeNamesRequestForm
  addressFrancia: IAddressFranciaRequestForm
  taxCodesFrancia: ITaxCodesFranciaRequestForm
  organizacionType: IOrganizationTypeRequestFrom
  legalFormFrancia: ILegalFormFranciaRequestForm
  externalFinancingFrancia: IExternalFinancingFranciaRequestForm
  summarySourcesFrancia: ISummarySourcesFranciaRequestForm
  shareholdersFrancia: IShareholdersFranciaRequestForm
  subsidiaryAffiliates: ISubsidiaryAffiliatesRequestForm
  branchOffices: IBranchOfficesRequestForm
  employessFrancia: IEmployessFranciaRequestForm
  facilitiesDescription: IFacilitiesDescriptionRequestForm
  banksFrancia: IBanksFranciaRequestForm
  administratorsFrancia: IAdministratorsFranciaRequestForm
  paymentFrancia: IPaymentFormRequestForm
  summaryPaymentsFrancia: ISummaryPaymentsFranciaRequestForm
  legalProceduresFrancia: ILegalProceduresFranciaRequestForm
  summaryLegalProceduresFrancia: ISummaryLegalProceduresFranciaRequestForm
  comments: ICommentsRequestForm
  guarators: IGuaratorsRequestForm
  otherUnpaidDebts: IOtherUnpaidDebtsRequestFrom
}

export interface IGeneralInformation {
  i18n: any
  data: IGeneralInformationRequestForm
  report: ReportTypes
}
