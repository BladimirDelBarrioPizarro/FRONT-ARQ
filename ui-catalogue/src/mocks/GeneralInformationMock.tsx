import {
  dataGeneralDataFaker,
  dataIdentificationFaker,
  dataCommunicationsFaker,
  dataTaxCodesFaker,
  dataBasicDataFaker,
  dataCapitalFaker,
  dataLegalFormFaker,
  dataCnaeFaker,
  dataRelationShipFaker,
  dataDealFormFaker,
  dataImportsExportsFaker,
  dataOtherEventsFaker,
  dataCompanyAssetsFaker,
  dataAdministratorFaker,
  dataPaymentFormFaker,
  dataPaydexHistoricFaker,
  dataPaydexSectorialFaker,
  dataLegalProceduresFaker,
  dataSummaryPaymentsFaker,
  dataLegalConfirmedFaker,
  dataRatingFormFaker,
  datosHostDataFaker,
  aggregateSummaryDataFaker,
  entityCommunicationDataFaker,
  dataExternalFinancingFaker,
  dataSubsidiaryAffiliatesFaker,
  dataBranchOfficesFaker,
  dataBankFaker,
  dataLegalProceduresITFormFaker,
  creditResponsabilityDataFaker,
  bankDataFaker,
  dataCommunicationsPOAFaker,
  datosSummaryExternalFinancingFaker,
  dataExternalFinancingPOAFaker,
  paymentsLegalProcessFaker,
  dataAJTSPOAFaker,
  dataDenominacionesComercialesFaker,
  dataSummaryFaker,
  dataSpecificItemsFaker,
  dataProtestsDemandsFaker,
  dataInformaDataFaker
} from '.'
import {
  dataNaceSicFaker
} from './NaceSicMock'
import {
  dataIdentificacionEspanaInformaFaker
} from './IdentificacionEspanaInformaMock'
import {
  dataCompanyAssetsEUDBFRFaker
} from './CompanyAssetsEUDBFRMock'
import {
  dataAJTSEspanaInformaFaker
} from './AJTSEspanaInformaMock'
import {
  dataDatosInformaFaker
} from './DatosInformaMock'
import {
  dataScoreFaker
} from './ScoreMock'
import {
  dataIdentityVerificationFaker
} from './IdentityVerificationMock'
import {
  dataConsultasFaker
} from './ConsultasMock'
import {
  dataBouncedChecksFaker
} from './BouncedChecksMock'
import {
  dataRejectChecksLegalFaker
} from './RejectChecksLegalMock'
import {
  dataBureauCreditFaker
} from './BureauCreditMock'
import {
  dataJudicialSourcesAlertsFaker
} from './JudicialSourcesAlertsMock'
import { dataScorePeruFaker } from './ScorePeruMock'
import { dataDirectoryNaturalPersonsFaker } from './DirectoryNaturalPersonsMock'
import { dataDirectorySunatFaker } from './DirectorySunatMock'
import { dataLastAddressesFaker } from './LastAddressesMock'
import { dataLegalAgentsFaker } from './LegalAgentsMock'
import { dataRegulatedNonFinancialSystemFaker } from './RegulatedNonFinancialSystemMock'
import { dataDebtsLastPeriodFaker } from './DebtsLastPeriodMock'
import { dataDebtHistorySystemFaker } from './DebtHistoryMock'
import { dataLastPeriodDetailFaker } from './LastPeriodDetailMock'
import { dataHistoryPeruFaker } from './HistoryPeruMock'
import { dataMicrofinanceDebtFaker } from './MicrofinanceDebtMock'
import { dataGeneralInformationMexicoFaker } from './GeneralInformationMexico'
import { dataScorePymeMexicoFaker } from './ScorePymeMock'
import { dataGeneralDataFranciaFaker } from './GeneralDataFranciaMock'
import { dataDocumentRegistrationFaker } from './DocumentRegistrationMock'
import { dataOtherEventsOneFaker } from './OtherEventsMock'
import { dataBussinessNameFranciaFaker } from './BusinessNameFranciaMock'
import { dataPreviousCompanyFranciaFaker } from './PreviousCompanyFranciaMock'
import { dataPreviousTradeNamesFaker } from './PreviousTradeNamesMock'
import { dataAddressFranciaFaker } from './AddressFranciaMock'
import { dataTaxCodesFranciaFaker } from './TaxCodesFranciaMock'
import { dataOrganizationTypeFaker } from './OrganizationTypeMock'
import { dataLegalFormFranciaFaker } from './LegalFormFranciaMock'
import { dataExternalFinancingFranciaFaker } from './ExternalFinancingFranciaMock'
import { dataSummarySourcesFranciaFaker } from './SummarySourcesFranciaMock'
import { dataShareholdersFranciaFaker } from './ShareholdersFranciaMock'
import { dataEmployessFranciaFaker } from './EmployeesFranciaMock'
import { dataFacilitiesDescriptionFaker } from './FacilitiesDescriptionMock'
import { dataBanksFranciaFaker } from './BanksFranciaMock'
import { dataAdministratorsFranciaFaker } from './AdministratorsFranciaMock'
import { dataLegalProceduresFranciaFaker } from './LegalProceduresFranciaMock'
import { dataSummaryPaymentsFranciaFaker } from './SummaryPaymentsFranciaMock'
import { dataSummaryLegalProceduresFranciaFaker } from './SummaryLegalProceduresFranciaMock'
import { dataCommentsFaker } from './CommentsMock'
import { dataGuaratorsFaker } from './GuaratorsMock'
import { dataOtherUnpaidDebtsFaker } from './OtherUnpaidDebtsMock'

const dataGeneralFaker = {
  generalData: dataGeneralDataFaker,
  identification: dataIdentificationFaker,
  denominacionesComerciales: dataDenominacionesComercialesFaker,
  summary: dataSummaryFaker,
  specificItems: dataSpecificItemsFaker,
  informaData: dataInformaDataFaker,
  protestsDemands: dataProtestsDemandsFaker,
  communications: dataCommunicationsFaker,
  taxCodes: dataTaxCodesFaker,
  naceSic: dataNaceSicFaker,
  legalForm: dataLegalFormFaker,
  basicData: dataBasicDataFaker,
  capital: dataCapitalFaker,
  deal: {
    cnae: dataCnaeFaker,
    dealForm: dataDealFormFaker,
    importsExports: dataImportsExportsFaker,
    otherEvents: dataOtherEventsFaker
  },
  companyAssets: dataCompanyAssetsFaker,
  relationsShip: {
    shareHolders: dataRelationShipFaker,
    administrators: dataAdministratorFaker,
    subsidiaryAffiliates: dataSubsidiaryAffiliatesFaker,
    branchOffices: dataBranchOfficesFaker,
    banks: dataBankFaker
  },
  payments: {
    paymentForm: dataPaymentFormFaker,
    paydexHistoric: dataPaydexHistoricFaker,
    paydexSectorial: dataPaydexSectorialFaker,
    summaryPayments: dataSummaryPaymentsFaker
  },
  legalProcedures: {
    legalProcedures: dataLegalProceduresFaker,
    legalConfirmed: dataLegalConfirmedFaker
  },
  ratingForm: dataRatingFormFaker,
  datosHost: datosHostDataFaker,
  aggregateSummary: aggregateSummaryDataFaker,
  entityCommunication: entityCommunicationDataFaker,
  externalFinancing: dataExternalFinancingFaker,
  legalProceduresIT: dataLegalProceduresITFormFaker,
  creditResponsability: creditResponsabilityDataFaker,
  bankData: bankDataFaker,
  paymentsLegalProcess: paymentsLegalProcessFaker,
  communicationsPOA: dataCommunicationsPOAFaker,
  companyAssetsPOA: {
    companyAssetsPOAForm: dataCompanyAssetsFaker,
    summaryExternalFinancing: datosSummaryExternalFinancingFaker,
    externalFinancingPOA: dataExternalFinancingPOAFaker,
    ajtspoa: dataAJTSPOAFaker
  },
  identificacionEspanaInforma: dataIdentificacionEspanaInformaFaker,
  ajtsEspanaInforma: dataAJTSEspanaInformaFaker,
  datosInforma: dataDatosInformaFaker,
  generalDataEUDBP: dataGeneralDataFaker,
  companyAssetsEUDBPFR: dataCompanyAssetsEUDBFRFaker,
  score: dataScoreFaker,
  identityVerification: dataIdentityVerificationFaker,
  consultas: dataConsultasFaker,
  bouncedChecks: dataBouncedChecksFaker,
  rejectChecksLegal: dataRejectChecksLegalFaker,
  bureauCredit: dataBureauCreditFaker,
  judicialSourcesAlerts: dataJudicialSourcesAlertsFaker,
  scorePeru: dataScorePeruFaker,
  directoryNaturalPersons: dataDirectoryNaturalPersonsFaker,
  directorySunat: dataDirectorySunatFaker,
  lastAddresses: dataLastAddressesFaker,
  legalAgents: dataLegalAgentsFaker,
  regulatedNonFinancialSystem: dataRegulatedNonFinancialSystemFaker,
  debtsLastPeriod: dataDebtsLastPeriodFaker,
  debtHistory: dataDebtHistorySystemFaker,
  lastPeriodDetail: dataLastPeriodDetailFaker,
  historyPeru: dataHistoryPeruFaker,
  microfinanceDebt: dataMicrofinanceDebtFaker,
  informationMexico: dataGeneralInformationMexicoFaker,
  scorepymemexico: dataScorePymeMexicoFaker,
  generalDataFrancia: dataGeneralDataFranciaFaker,
  documentRegistration: dataDocumentRegistrationFaker,
  otherEventsFrancia: dataOtherEventsOneFaker,
  ajtsPOA: dataAJTSPOAFaker,
  paydexHistoric: dataPaydexHistoricFaker,
  paydexSectorial: dataPaydexSectorialFaker,
  businessNameFrancia: dataBussinessNameFranciaFaker,
  previousCompanyFrancia: dataPreviousCompanyFranciaFaker,
  comercialDesignation: dataBussinessNameFranciaFaker,
  previousTradeNames: dataPreviousTradeNamesFaker,
  addressFrancia: dataAddressFranciaFaker,
  taxCodesFrancia: dataTaxCodesFranciaFaker,
  organizacionType: dataOrganizationTypeFaker,
  legalFormFrancia: dataLegalFormFranciaFaker,
  externalFinancingFrancia: dataExternalFinancingFranciaFaker,
  summarySourcesFrancia: dataSummarySourcesFranciaFaker,
  shareholdersFrancia: dataShareholdersFranciaFaker,
  subsidiaryAffiliates: dataSubsidiaryAffiliatesFaker,
  branchOffices: dataBranchOfficesFaker,
  employessFrancia: dataEmployessFranciaFaker,
  facilitiesDescription: dataFacilitiesDescriptionFaker,
  banksFrancia: dataBanksFranciaFaker,
  administratorsFrancia: dataAdministratorsFranciaFaker,
  paymentFrancia: dataPaymentFormFaker,
  summaryPaymentsFrancia: dataSummaryPaymentsFranciaFaker,
  legalProceduresFrancia: dataLegalProceduresFranciaFaker,
  summaryLegalProceduresFrancia: dataSummaryLegalProceduresFranciaFaker,
  comments: dataCommentsFaker,
  guarators: dataGuaratorsFaker,
  otherUnpaidDebts: dataOtherUnpaidDebtsFaker
}

export {
  dataGeneralFaker
}
