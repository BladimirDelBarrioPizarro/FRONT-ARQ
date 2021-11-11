import React from 'react'
import {
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core'
import { IGeneralInformation } from './types'
import { ReportTypes } from '../../templates/BaseReport/types'
import { DirectoryNaturalPersons } from '../../molecules/DirectoryNaturalPersons/DirectoryNaturalPersons'
import { DirectorySunat } from '../../molecules/DirectorySunat/DirectorySunat'
import { LastAddresses } from '../../molecules/LastAddresses/LastAddresses'
import { LegalAgents } from '../../molecules/LegalAgents/LegalAgents'
import { RegulatedNonFinancialSystem } from '../../molecules/RegulatedNonFinancialSystem/RegulatedNonFinancialSystem'
import { LastPeriodDetail } from '../../molecules/LastPeriodDetail/LastPeriodDetail'
import { ScorePeru } from '../../molecules/ScorePeru/ScorePeru'
import { HistoryPeru } from '../../molecules/HistoryPeru/HistoryPeru'
import { MicrofinanceDebt } from '../../molecules/MicrofinanceDebt/MicrofinanceDebt'
import { DebtsLastPeriod } from '../../molecules/DebtsLastPeriod/DebtsLastPeriod'
import { DebtHistory } from '../../molecules/DebtHistory/DebtHistory'
import { GeneralData } from '../../molecules/GeneralData/GeneralData'
import { Identification } from '../../molecules/Identification/Identification'
import { IdentificationBadexcug } from '../../molecules/IdentificationBadexcug/IdentificationBadexcug'
import { Communications } from '../../molecules/Communications/Communications'
import { TaxCodes } from '../../molecules/TaxCodes/TaxCodes'
import { LegalForm } from '../../molecules/LegalForm/LegalForm'
import { BasicData } from '../../molecules/BasicData/BasicData'
import { Capital } from '../../molecules/Capital/Capital'
import { Deal } from '../../organisms/Deal/Deal'
import { CompanyAssets } from '../../molecules/CompanyAssets/CompanyAssets'
import { RelationsShip } from '../Relationships/Relationships'
import { Payments } from '../Payments/Payments'
import { LegalProcedures } from '../../molecules/LegalProcedures/LegalProcedures'
import { Ratings } from '../Ratings/Ratings'
import { InfoGeneralMoveUrl } from '../../molecules/InfoGeneralMoveUrl/InfoGeneralMoveUrl'
import { DatosHost } from '../../molecules/DatosHost/DatosHost'
import { AggregateSummary } from '../../molecules/AggregateSummary/AggregateSummary'
import { EntityCommunication } from '../../molecules/EntityCommunication/EntityCommunication'
import { ExternalFinancing } from '../../molecules/ExternalFinancing/ExternalFinancing'
import { LegalProceduresIT } from '../../molecules/LegalProceduresIT/LegalProceduresIT'
import { CreditResponsability } from '../../molecules/CreditResponsability/CreditResponsability'
import { BankData } from '../../molecules/BankData/BankData'
import { PaymentsLegalProcess } from '../../molecules/PaymentsLegalProcess/PaymentsLegalProcess'
import { CommunicationsPOA } from '../../molecules/CommunicationsPOA/CommunicationsPOA'
import { CompanyAssetsPOA } from '../CompanyAssetsPOA/CompanyAssetsPOA'
import { Summary } from '../../molecules/Summary/Summary'
import { ProtestsDemandsBadexcug } from '../../molecules/ProtestsDemandsBadexcug/ProtestsDemandsBadexcug'
import { IdentificacionEspanaInforma } from '../../molecules/IdentificacionEspanaInforma/IdentificacionEspanaInforma'
import { AjtsEspanaInforma } from '../../molecules/AJTSEspanaInforma/AJTSEspanaInforma'
import { DatosInforma } from '../../molecules/DatosInforma/DatosInforma'
import { GeneralDataEUDBP } from '../../molecules/GeneralDataEUDBP/GeneralDataEUDBP'
import { CompanyAssetsEUDBPFR } from '../../molecules/CompanyAssetsEUDBPFR/CompanyAssetsEUDBPFR'
import { Score } from '../../molecules/Score/Score'
import { IdentityVerification } from '../../molecules/IdentityVerification/IdentityVerification'
import { Consultas } from '../../molecules/Consultas/Consultas'
import { BouncedChecks } from '../../molecules/BouncedChecks/BouncedChecks'
import { RejectChecksLegal } from '../../molecules/RejectChecksLegal/RejectChecksLegal'
import { BureauCredit } from '../../molecules/BureauCredit/BureauCredit'
import { JudicialSourcesAlerts } from '../../molecules/JudicialSourcesAlerts/JudicialSourcesAlerts'
import { TaxCodesRef } from '../../molecules/TaxCodesRef/TaxCodesRef'
import { NaceSic } from '../../molecules/NaceSic/NaceSic'
import { GeneralDataNoRef } from '../../molecules/GeneralDataNoRef/GeneralDataNoRef'
import { IdentificationNoRef } from '../../molecules/IdentificationNoRef/IdentificationNoRef'
import { GeneralInformationMexico } from '../../molecules/GeneralInformationMexico/GeneralInformationMexico'
import { ScorePymeMexico } from '../../molecules/ScorePymeMexico/ScorePymeMexico'
import { GeneralDataFrancia } from '../../molecules/GeneralDataFrancia/GeneralDataFrancia'
import { DocumentRegistration } from '../../molecules/DocumentRegistration/DocumentRegistration'
import { AJTSPOAComponent } from '../../molecules/AJTSPOA/AJSPOA'
import { PaydexHistoric } from '../../molecules/PaydexHistoric/PaydexHistoric'
import { PaydexSectorial } from '../../molecules/PaydexSectorial/PaydexSectorial'
import { BussinessNameFrancia } from '../../molecules/BussinessNameFrancia/BussinessNameFrancia'
import { PreviousCompanyFrancia } from '../../molecules/PreviousCompanyFrancia/PreviousCompanyFrancia'
import { ComercialDesignation } from '../../molecules/ComercialDesignation/ComercialDesignation'
import { PreviousTradeNames } from '../../molecules/PreviousTradeNames/PreviousTradeNames'
import { AddressFrancia } from '../../molecules/AddressFrancia/AddressFrancia'
import { TaxCodesFrancia } from '../../molecules/TaxCodesFrancia/TaxCodesFrancia'
import { OrganizationType } from '../../molecules/OrganizationType/OrganizationType'
import { LegalFormFrancia } from '../../molecules/LegalFormFrancia/LegalFormFrancia'
import { ExternalFinancingFrancia } from '../../molecules/ExternalFinancingFrancia/ExternalFinancingFrancia'
import { SummarySourcesFrancia } from '../../molecules/SummarySourcesFrancia/SummarySourcesFrancia'
import { ShareHoldersFrancia } from '../../molecules/ShareHoldersFrancia/ShareHoldersFrancia'
import { SubsidiaryAffiliates } from '../../molecules/SubsidiaryAffiliates/SubsidiaryAffiliates'
import { BranchOffices } from '../../molecules/BranchOffices/BranchOffices'
import { EmployessFrancia } from '../../molecules/EmployessFrancia/EmployessFrancia'
import { FacilitiesDescription } from '../../molecules/FacilitiesDescription/FacilitiesDescription'
import { BanksFrancia } from '../../molecules/BanksFrancia/BanksFrancia'
import { AdministratorsFrancia } from '../../molecules/AdministratorsFrancia/AdministratorsFrancia'
import { PaymentForm } from '../../molecules/PaymentForm/PaymentForm'
import { SummaryPaymentsFrancia } from '../../molecules/SummaryPaymentsFrancia/SummaryPaymentsFrancia'
import { LegalProceduresFrancia } from '../../molecules/LegalProceduresFrancia/LegalProceduresFrancia'
import { SummaryLegalProceduresFrancia } from '../../molecules/SummaryLegalProceduresFrancia/SummaryLegalProceduresFrancia'
import { RatingForm } from '../../molecules/RatingForm/RatingForm'
import { Comments } from '../../molecules/Comments/Comments'
import { Guarators } from '../../molecules/Guarators/Guarators'
import { OtherUnpaisDebts } from '../OtherUnpaidDebts/OtherUnpaidDebts'

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee'
  },
  hrStyle: {
    borderTadius: '5px',
    borderTop: '5px solid #f9f9f9',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none'
  },
  divContentBalance: {
  }
})

const GeneralInformation: React.FC<IGeneralInformation> = ({
  i18n,
  data,
  report
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card className={classes.margen}>
        <CardContent>
          {(() => {
            switch (report) {
              case ReportTypes.NOREF_RESTO_PAISES:
                return (
                  <>
                  </>
                )
              default:
                return (
                  <>
                    <p id='INFO_GENERAL_URL_1'>
                      <InfoGeneralMoveUrl
                        i18n={i18n}
                        report={report}
                      />
                    </p>
                    <hr className={classes.hrStyle}></hr>
                  </>
                )
            }
          })()}
          <div className={classes.divContentBalance}>
            {(() => {
              switch (report) {
                case ReportTypes.FRANCIA:
                  return (
                    <>
                      <p>
                        <GeneralDataFrancia
                          i18n={i18n}
                          data={data.generalDataFrancia}
                        />
                      </p>
                      <p>
                        <BussinessNameFrancia
                          i18n={i18n}
                          data={data.businessNameFrancia}
                        />
                      </p>
                      <p>
                        <PreviousCompanyFrancia
                          i18n={i18n}
                          data={data.previousCompanyFrancia}
                        />
                      </p>
                      <p>
                        <ComercialDesignation
                          i18n={i18n}
                          data={data.comercialDesignation}
                        />
                      </p>
                      <p>
                        <PreviousTradeNames
                          i18n={i18n}
                          data={data.previousTradeNames}
                        />
                      </p>
                      <p>
                        <AddressFrancia
                          i18n={i18n}
                          data={data.addressFrancia}
                        />
                      </p>
                      <p>
                        <FacilitiesDescription
                          i18n={i18n}
                          data={data.facilitiesDescription}
                        />
                      </p>
                      <p>
                        <TaxCodesFrancia
                          i18n={i18n}
                          data={data.taxCodesFrancia}
                        />
                      </p>
                      <p>
                        <OrganizationType
                          i18n={i18n}
                          data={data.organizacionType}
                        />
                      </p>
                      <p>
                        <LegalFormFrancia
                          i18n={i18n}
                          data={data.legalFormFrancia}
                        />
                      </p>
                      <p>
                        <Capital
                          i18n={i18n}
                          data={data.capital}
                        />
                      </p>
                      <p>
                        <DocumentRegistration
                          i18n={i18n}
                          data={data.documentRegistration}
                        />
                      </p>
                      <p>
                        <EmployessFrancia
                          i18n={i18n}
                          data={data.employessFrancia}
                        />
                      </p>
                      <p>
                        <Deal
                          report={report}
                          i18n={i18n}
                          data={data.deal}
                        />
                      </p>
                      <p>
                        <CompanyAssets
                          i18n={i18n}
                          data={data.companyAssets}
                        />
                      </p>
                      <p>
                        <ExternalFinancingFrancia
                          i18n={i18n}
                          data={data.externalFinancingFrancia}
                        />
                      </p>
                      <p>
                        <SummarySourcesFrancia
                          i18n={i18n}
                          data={data.summarySourcesFrancia}
                        />
                      </p>
                      <p>
                        <AJTSPOAComponent
                          i18n={i18n}
                          data={data.ajtsPOA}
                        />
                      </p>
                      <p>
                        <ShareHoldersFrancia
                          i18n={i18n}
                          data={data.shareholdersFrancia}
                        />
                      </p>
                      <p>
                        <SubsidiaryAffiliates
                          i18n={i18n}
                          data={data.subsidiaryAffiliates}
                        />
                      </p>
                      <p>
                        <BranchOffices
                          i18n={i18n}
                          data={data.branchOffices}
                        />
                      </p>
                      <p>
                        <BanksFrancia
                          i18n={i18n}
                          data={data.banksFrancia}
                        />
                      </p>
                      <p>
                        <AdministratorsFrancia
                          i18n={i18n}
                          data={data.administratorsFrancia}
                        />
                      </p>
                      <p>
                        <PaymentForm
                          i18n={i18n}
                          data={data.paymentFrancia}
                        />
                      </p>
                      <p>
                        <PaydexHistoric
                          i18n={i18n}
                          data={data.paydexHistoric}
                        />
                      </p>
                      <p>
                        <PaydexSectorial
                          i18n={i18n}
                          data={data.paydexSectorial}
                        />
                      </p>
                      <p>
                        <SummaryPaymentsFrancia
                          i18n={i18n}
                          data={data.summaryPaymentsFrancia}
                        />
                      </p>
                      <p>
                        <LegalProceduresFrancia
                          i18n={i18n}
                          data={data.legalProceduresFrancia}
                        />
                      </p>
                      <p>
                        <SummaryLegalProceduresFrancia
                          i18n={i18n}
                          data={data.summaryLegalProceduresFrancia}
                        />
                      </p>
                      <p>
                        <RatingForm
                          i18n={i18n}
                          data={data.ratingForm}
                        />
                      </p>
                      <p>
                        <Comments
                          i18n={i18n}
                          data={data.comments}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.BUREAU_MEJICO:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralData
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>
                      <p>
                        <GeneralInformationMexico
                          i18n={i18n}
                          data={data.informationMexico}
                        />
                      </p>
                      <p>
                        <ScorePymeMexico
                          i18n={i18n}
                          data={data.scorepymemexico}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.ARGENTINA_NOSIS:
                  return (
                    <>
                      <p id="SCORE">
                        <Score
                          i18n={i18n}
                          data={data.score}
                        />
                      </p>
                      <p id="IDENTIDAD">
                        <IdentityVerification
                          i18n={i18n}
                          data={data.identityVerification}
                        />
                      </p>
                      <p id="CONSULTAS">
                        <Consultas
                          i18n={i18n}
                          data={data.consultas}
                        />
                      </p>
                      <p id="CHEQUES_RECHAZADOS">
                        <BouncedChecks
                          i18n={i18n}
                          data={data.bouncedChecks}
                        />
                      </p>
                      <p id="CHEQUES_RECHAZADOS_JURI">
                        <RejectChecksLegal
                          i18n={i18n}
                          data={data.rejectChecksLegal}
                        />
                      </p>
                      <p id="BUREAU_DE_CREDITO">
                        <BureauCredit
                          i18n={i18n}
                          data={data.bureauCredit}
                        />
                      </p>
                      <p id="ALERTAS">
                        <JudicialSourcesAlerts
                          i18n={i18n}
                          data={data.judicialSourcesAlerts}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.EUDBP_FR:
                  return (
                    <>
                      <p id="DATOS_GENERALES">
                        <GeneralDataEUDBP
                          i18n={i18n}
                          data={data.generalDataEUDBP}
                        />
                      </p>
                      <p id='IDENTIFICACIÓN'>
                        <Identification
                          i18n={i18n}
                          data={data.identification}
                        />
                      </p>
                      <Communications
                        i18n={i18n}
                        data={data.communications}
                      />
                      <TaxCodes
                        i18n={i18n}
                        data={data.taxCodes}
                      />
                      <p id='DATOS_BÁSICOS'>
                        <BasicData
                          i18n={i18n}
                          data={data.basicData}
                        />
                      </p>
                      <LegalForm
                        i18n={i18n}
                        data={data.legalForm}
                      />
                      <Capital
                        i18n={i18n}
                        data={data.capital}
                      />
                      <p id='NEGOCIO'>
                        <Deal
                          report={report}
                          i18n={i18n}
                          data={data.deal}
                        />
                      </p>
                      <p id="ACTIVOS">
                        <CompanyAssetsEUDBPFR
                          i18n={i18n}
                          data={data.companyAssetsEUDBPFR}
                        />
                      </p>
                      <p id="RELACIONES">
                        <RelationsShip
                          report={report}
                          i18n={i18n}
                          data={data.relationsShip}
                        />
                      </p>
                      <p id='PAGOS'>
                        <Payments
                          i18n={i18n}
                          data={data.payments}
                        />
                      </p>
                      <p id='PROCEDIMIENTOS'>
                        <LegalProcedures
                          i18n={i18n}
                          data={data.legalProcedures}
                        />
                      </p>
                      <p id='RATINGS'>
                        <Ratings
                          i18n={i18n}
                          data={data.ratingForm}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.BADEXCUG:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralData
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>

                      <p id='IDENTIFICACIÓN'>
                        <IdentificationBadexcug
                          i18n={i18n}
                          data={data.identification}
                        />
                      </p>
                      <p id='PROTESTOS_DEMANDAS_IMPAGOS'>
                        <ProtestsDemandsBadexcug
                          i18n={i18n}
                          data={data.protestsDemands}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.ESPANA_INFORMA:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralData
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>
                      <p id="IDENTIFICACIÓN">
                        <IdentificacionEspanaInforma
                          i18n={i18n}
                          data={data.identificacionEspanaInforma}
                        />
                      </p>
                      <p id="AJTS">
                        <AjtsEspanaInforma
                          i18n={i18n}
                          data={data.ajtsEspanaInforma}
                        />
                      </p>
                      <p id="DATOS_INFORMA">
                        <DatosInforma
                          i18n={i18n}
                          data={data.datosInforma}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.EUDBP_PO_A:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralData
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>
                      <p id='IDENTIFICACIÓN'>
                        <Identification
                          i18n={i18n}
                          data={data.identification}
                        />
                      </p>
                      <CommunicationsPOA
                        i18n={i18n}
                        data={data.communicationsPOA}
                        report={report}
                      />
                      <TaxCodes
                        i18n={i18n}
                        data={data.taxCodes}
                      />
                      <p id='DATOS_BÁSICOS'>
                        <BasicData
                          i18n={i18n}
                          data={data.basicData}
                        />
                      </p>
                      <LegalForm
                        i18n={i18n}
                        data={data.legalForm}
                      />
                      <Capital
                        i18n={i18n}
                        data={data.capital}
                      />
                      <p id='NEGOCIO'>
                        <Deal
                          report={report}
                          i18n={i18n}
                          data={data.deal}
                        />
                      </p>
                      <p id='ACTIVOS'>
                        <CompanyAssetsPOA
                          i18n={i18n}
                          data={data.companyAssetsPOA}
                        />
                      </p>
                      <p id='RELACIONES'>
                      </p>
                    </>
                  )
                case ReportTypes.EUDBP_IT:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralData
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>
                      <p id='IDENTIFICACIÓN'>
                        <Identification
                          i18n={i18n}
                          data={data.identification}
                        />
                      </p>
                      <Communications
                        i18n={i18n}
                        data={data.communications}
                      />
                      <TaxCodes
                        i18n={i18n}
                        data={data.taxCodes}
                      />
                      <p id='DATOS_BÁSICOS'>
                        <BasicData
                          i18n={i18n}
                          data={data.basicData}
                        />
                      </p>
                      <LegalForm
                        i18n={i18n}
                        data={data.legalForm}
                      />
                      <Capital
                        i18n={i18n}
                        data={data.capital}
                      />
                      <p id='NEGOCIO'>
                        <Deal
                          report={report}
                          i18n={i18n}
                          data={data.deal}
                        />
                      </p>
                      <p id='ACTIVOS'>
                        <CompanyAssets
                          i18n={i18n}
                          data={data.companyAssets}
                        />
                      </p>
                      <ExternalFinancing
                        i18n={i18n}
                        data={data.externalFinancing}
                      />
                      <RelationsShip
                        report={report}
                        i18n={i18n}
                        data={data.relationsShip}
                      />
                      <p id='PAGOS'>
                        <Payments
                          i18n={i18n}
                          data={data.payments}
                        />
                      </p>
                      <LegalProceduresIT
                        i18n={i18n}
                        data={data.legalProceduresIT}
                      />
                      <p id='RATINGS'>
                        <Ratings
                          i18n={i18n}
                          data={data.ratingForm}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.EUDBP_PT:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralData
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>
                      <p id='BANCO_PORTUGAL'>
                        <BankData
                          i18n={i18n}
                          data={data.bankData}
                        />
                      </p>
                      <p id='COMUNICACION_ENTIDADES'>
                        <EntityCommunication
                          i18n={i18n}
                          data={data.entityCommunication}
                        />
                      </p>
                      <p id='RESPONSABILIDADES_CREDITO'>
                        <CreditResponsability
                          i18n={i18n}
                          data={data.creditResponsability}
                        />
                      </p>
                      <p id='RESUMEN_AGREGADO'>
                        <AggregateSummary
                          i18n={i18n}
                          data={data.aggregateSummary}
                        />
                      </p>
                      <p id='DATOS_HOST'>
                        <DatosHost
                          i18n={i18n}
                          data={data.datosHost}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.RESTO_PAISES:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralData
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>
                      <p id='IDENTIFICACIÓN'>
                        <Identification
                          i18n={i18n}
                          data={data.identification}
                        />
                      </p>
                      <Communications
                        i18n={i18n}
                        data={data.communications}
                      />
                      <TaxCodes
                        i18n={i18n}
                        data={data.taxCodes}
                      />
                      <TaxCodesRef
                        i18n={i18n}
                        data={data.taxCodes}
                      />
                      <NaceSic
                        i18n={i18n}
                        data={data.naceSic}
                      />
                      <LegalForm
                        i18n={i18n}
                        data={data.legalForm}
                      />
                      <p id='RESUMEN'>
                        <Summary
                          i18n={i18n}
                          data={data.summary}
                        />
                      </p>
                      <p id='DATOS_BÁSICOS'>
                        <BasicData
                          i18n={i18n}
                          data={data.basicData}
                        />
                      </p>
                      <Capital
                        i18n={i18n}
                        data={data.capital}
                      />
                      <p id='NEGOCIO'>
                        <Deal
                          report={report}
                          i18n={i18n}
                          data={data.deal}
                        />
                      </p>
                      <p id='ACTIVOS'>
                        <CompanyAssets
                          i18n={i18n}
                          data={data.companyAssets}
                        />
                      </p>
                      <p id='RELACIONES'>
                        <RelationsShip
                          report={report}
                          i18n={i18n}
                          data={data.relationsShip}
                        />
                      </p>
                      <p id='PAGOS_PROCEDIMIENTOS_LEGALES'>
                        <PaymentsLegalProcess
                          i18n={i18n}
                          data={data.paymentsLegalProcess}
                        />
                      </p>
                      <p id='PROCEDIMIENTOS'>
                        <LegalProcedures
                          i18n={i18n}
                          data={data.legalProcedures}
                        />
                      </p>
                      <p id='RATINGS'>
                        <Ratings
                          i18n={i18n}
                          data={data.ratingForm}
                        />
                      </p>
                      <p id='COMENTARIOS_ENCUESTADOS'>
                      </p>
                    </>
                  )
                case ReportTypes.NOREF_RESTO_PAISES:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralDataNoRef
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>
                      <p id='IDENTIFICACIÓN'>
                        <IdentificationNoRef
                          i18n={i18n}
                          data={data.identification}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.PERU_EQUIFAX:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralData
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>
                      <p id='SCORE_EMPRESAS_PERU'>
                        <ScorePeru
                          i18n={i18n}
                          data={data.scorePeru}
                        />
                      </p>
                      <p id='DIRECTORIO_PERSONAS'>
                        <DirectoryNaturalPersons
                          i18n={i18n}
                          data={data.directoryNaturalPersons}
                        />
                      </p>
                      <p id='DIRECTORIO_SUNAT'>
                        <DirectorySunat
                          i18n={i18n}
                          data={data.directorySunat}
                        />
                      </p>
                      <p id='DIRECCIONES'>
                        <LastAddresses
                          i18n={i18n}
                          data={data.lastAddresses}
                        />
                      </p>
                      <p id='REPRESENTACIONES_LEGALES'>
                        <LegalAgents
                          i18n={i18n}
                          data={data.legalAgents}
                        />
                      </p>
                      <p id='SISTEMA_FINANCIERO'>
                        <RegulatedNonFinancialSystem
                          i18n={i18n}
                          data={data.regulatedNonFinancialSystem}
                        />
                      </p>
                      <p id='DebtsLastPeriod'>
                        <DebtsLastPeriod
                          i18n={i18n}
                          data={data.debtsLastPeriod}
                        />
                      </p>
                      <p id='DebtHistory'>
                        <DebtHistory
                          i18n={i18n}
                          data={data.debtHistory}
                        />
                      </p>
                      <p id='LastPeriodDetail'>
                        <LastPeriodDetail
                          i18n={i18n}
                          data={data.lastPeriodDetail}
                        />
                      </p>

                      <p id='HistoryPeru'>
                        <HistoryPeru
                          i18n={i18n}
                          data={data.historyPeru}
                        />
                      </p>

                      <p id='Guarators'>
                        <Guarators
                          i18n={i18n}
                          data={data.guarators}
                        />
                      </p>

                      <p id='MicrofinanceDebt'>
                        <MicrofinanceDebt
                          i18n={i18n}
                          data={data.microfinanceDebt}
                        />
                      </p>
                      <p>
                        <OtherUnpaisDebts
                          i18n={i18n}
                          data={data.otherUnpaidDebts}
                        />
                      </p>
                    </>
                  )
                case ReportTypes.Standard:
                default:
                  return (
                    <>
                      <p id='DATOS_GENERALES'>
                        <GeneralData
                          i18n={i18n}
                          data={data.generalData}
                        />
                      </p>
                      <p id='IDENTIFICACIÓN'>
                        <Identification
                          i18n={i18n}
                          data={data.identification}
                        />
                      </p>
                      <Communications
                        i18n={i18n}
                        data={data.communications}
                      />
                      <TaxCodes
                        i18n={i18n}
                        data={data.taxCodes}
                      />
                      <LegalForm
                        i18n={i18n}
                        data={data.legalForm}
                      />
                      <p id='DATOS_BÁSICOS'>
                        <BasicData
                          i18n={i18n}
                          data={data.basicData}
                        />
                      </p>
                      <Capital
                        i18n={i18n}
                        data={data.capital}
                      />
                      <p id='NEGOCIO'>
                        <Deal
                          report={report}
                          i18n={i18n}
                          data={data.deal}
                        />
                      </p>
                      <p id='ACTIVOS'>
                        <CompanyAssets
                          i18n={i18n}
                          data={data.companyAssets}
                        />
                      </p>
                      <p id='RELACIONES'>
                        <RelationsShip
                          report={report}
                          i18n={i18n}
                          data={data.relationsShip}
                        />
                      </p>
                      <p id='PAGOS'>
                        <Payments
                          i18n={i18n}
                          data={data.payments}
                        />
                      </p>
                      <p id='PROCEDIMIENTOS'>
                        <LegalProcedures
                          i18n={i18n}
                          data={data.legalProcedures}
                        />
                      </p>
                      <p id='RATINGS'>
                        <Ratings
                          i18n={i18n}
                          data={data.ratingForm}
                        />
                      </p>
                    </>
                  )
              }
            })()}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export { GeneralInformation }
