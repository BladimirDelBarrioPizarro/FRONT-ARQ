import React from 'react'
import {
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core'
import { IGeneralInformationNoRef } from './types'
import { ReportTypes } from '../../templates/BaseReportNoRef/types'
import { DatosGeneralesNoRef } from '../../molecules/DatosGeneralesNoRef/DatosGeneralesNoRef'
import { GeneralDataNoRef } from '../../molecules/GeneralDataNoRef/GeneralDataNoRef'
import { IdentificationFRPTIT } from '../../molecules/IdentificationFR_PT_IT/IdentificationFR_PT_IT'
import { IdentificationNoRef } from '../../molecules/IdentificationNoRef/IdentificationNoRef'
import { IdentificationnoDB } from '../../molecules/IdentificationnoDB/IdentificationnoDB'
import { TradeNames } from '../../molecules/TradeNames/TradeNames'
import { DatosHost } from '../../molecules/DatosHost/DatosHost'
import { AjtsDBGDP } from '../../molecules/AJTSDB-GDP/AJSDBGDP'
import { AveragePaymentDays } from '../../molecules/AveragePaymentDays/AveragePaymentDays'
import { SummaryFinancialInformation } from '../../molecules/SummaryFinancialInformation/SummaryFinancialInformation'
import { PrimaryResidence } from '../../molecules/PrimaryResidence/PrimaryResidence'
import { Managers } from '../../molecules/Managers/Managers'
import { Exports } from '../../molecules/Exports/Exports'
import { Scoring } from '../../molecules/Scoring/Scoring'
import { UnpaidClaimsProtests } from '../../molecules/UnpaidClaimsProtests/UnpaidClaimsProtests'
import { DefaultsAsnef } from '../../molecules/DefaultsAsnef/DefaultsAsnef'
import { IncidentsAsnef } from '../../molecules/IncidentsAsnef/IncidentsAsnef'
import { NonPayments } from '../../molecules/NonPayments/NonPayments'
import { Demands } from '../../molecules/Demands/Demands'
import { RatingsDBDP } from '../../molecules/RatingsDBGDP/RatingsDBGDP'
import { OtherRTE } from '../../molecules/OtherRTE/OtherRTE'
import { ObservationsDBGDP } from '../../molecules/ObservationsDBGDP/ObservationsDBGDP'
import { TaxCodesEUDBP } from '../../molecules/TaxCodesEUDBP/TaxCodesEUDBP'
import { NaceCnae } from '../../molecules/NaceCnae/NaceCnae'
import { OtherData } from '../../molecules/OtherData/OtherData'
import { ComercialNames } from '../../molecules/ComercialNames/ComercialNames'
import { AJTEUDBP } from '../../molecules/AJT-EUDBP/AjtEUDBP'
import { Resume } from '../../molecules/Resume/Resume'
import { PreviousCompany } from '../../molecules/PreviousCompany/PreviousCompany'
import { PreviousCompanyTrading } from '../../molecules/PreviousCompanyTrading/PreviousCompanyTrading'
import { CompaniesRelated } from '../../molecules/CompaniesRelated/CompaniesRelated'
import { ProtestsDemandsEUDBP } from '../../molecules/ProtestDemandsEUBDP/ProtestDemandsEUBDP'
import { NonPaymentAsnef } from '../../molecules/NonPaymentAsnef/NonPaymentAsnef'
import { BankEUDBP } from '../../molecules/BankEUBDP/BankEUBDP'
import { PrimaryResidenceNoDB } from '../../molecules/PrimaryResidenceNoDB/PrimaryResidenceNoDB'

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

const GeneralInformationNoRef: React.FC<IGeneralInformationNoRef> = ({
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
              case ReportTypes.FR_PT_IT:
                return (
                  <>
                    <p>
                      <DatosGeneralesNoRef
                        i18n={i18n}
                        data={data.generalData}
                      />
                    </p>
                    <p>
                      <IdentificationFRPTIT
                        i18n={i18n}
                        data={data.identificationFRPTIT}
                      />
                    </p>
                    <p>
                      <TaxCodesEUDBP
                        i18n={i18n}
                        data={data.taxcodesEUDBP}
                      />
                    </p>
                    <p>
                      <NaceCnae
                        i18n={i18n}
                        data={data.naceCnae}
                      />
                    </p>
                    <p>
                      <PrimaryResidence
                        i18n={i18n}
                        data={data.primaryResidence}
                      />
                    </p>
                    <p>
                      <OtherData
                        i18n={i18n}
                        data={data.otherData}
                      />
                    </p>
                    <p>
                      <ComercialNames
                        i18n={i18n}
                        data={data.comercialNames}
                      />
                    </p>
                    <p>
                      <AJTEUDBP
                        i18n={i18n}
                        data={data.ajtEUDBP}
                      />
                    </p>
                    <p>
                      <Resume
                        i18n={i18n}
                        data={data.resume}
                      />
                    </p>
                    <p>
                      <SummaryFinancialInformation
                        i18n={i18n}
                        data={data.summaryFinancialInformation}
                      />
                    </p>
                    <p>
                      <PreviousCompany
                        i18n={i18n}
                        data={data.previousCompany}
                      />
                    </p>
                    <p>
                      <PreviousCompanyTrading
                        i18n={i18n}
                        data={data.previousCompanyTrading}
                      />
                    </p>
                    <p>
                      <CompaniesRelated
                        i18n={i18n}
                        data={data.companiesRelated}
                      />
                    </p>
                    <p>
                      <Managers
                        i18n={i18n}
                        data={data.managers}
                      />
                    </p>
                    <p>
                      <Exports
                        i18n={i18n}
                        data={data.exports}
                      />
                    </p>
                    <p>
                      <Scoring
                        i18n={i18n}
                        data={data.scoring}
                      />
                    </p>
                    <p>
                      <ProtestsDemandsEUDBP
                        i18n={i18n}
                        data={data.protestsDemandsEUDBP}
                      />
                    </p>
                    <p>
                      <NonPaymentAsnef
                        i18n={i18n}
                        data={data.nonPaymentsAsnef}
                      />
                    </p>
                    <p>
                      <IncidentsAsnef
                        i18n={i18n}
                        data={data.incidentsAsnef}
                      />
                    </p>
                    <p>
                      <NonPayments
                        i18n={i18n}
                        data={data.nonPayments}
                      />
                    </p>
                    <p>
                      <Demands
                        i18n={i18n}
                        data={data.demands}
                      />
                    </p>
                    <p>
                      <BankEUDBP
                        i18n={i18n}
                        data={data.bankEUDBP}
                      />
                    </p>
                    <p>
                      <RatingsDBDP
                        i18n={i18n}
                        data={data.ratingDBDP}
                      />
                    </p>
                    <p>
                      <OtherRTE
                        i18n={i18n}
                        data={data.otherRTE}
                      />
                    </p>
                    <p>
                      <ObservationsDBGDP
                        i18n={i18n}
                        data={data.observations}
                      />
                    </p>
                  </>
                )
              case ReportTypes.RESTO_PAISES:
                return (
                  <>
                    <p>
                      <DatosGeneralesNoRef
                        i18n={i18n}
                        data={data.generalData}
                      />
                    </p>
                    <p>
                      <IdentificationNoRef
                        i18n={i18n}
                        data={data.identification}
                      />
                    </p>
                    <p>
                      <TradeNames
                        i18n={i18n}
                        data={data.tradeNames}
                      />
                    </p>
                    <p>
                      <DatosHost
                        i18n={i18n}
                        data={data.datosHost}
                      />
                    </p>
                    <p>
                      <AjtsDBGDP
                        i18n={i18n}
                        data={data.ajtsDBGDP}
                      />
                    </p>
                    <p>
                      <AveragePaymentDays
                        i18n={i18n}
                        data={data.averagePaymentDays}
                      />
                    </p>
                    <p>
                      <SummaryFinancialInformation
                        i18n={i18n}
                        data={data.summaryFinancialInformation}
                      />
                    </p>
                    <p>
                      <PrimaryResidence
                        i18n={i18n}
                        data={data.primaryResidence}
                      />
                    </p>
                    <p>
                      <Managers
                        i18n={i18n}
                        data={data.managers}
                      />
                    </p>
                    <p>
                      <Exports
                        i18n={i18n}
                        data={data.exports}
                      />
                    </p>
                    <p>
                      <Scoring
                        i18n={i18n}
                        data={data.scoring}
                      />
                    </p>
                    <p>
                      <UnpaidClaimsProtests
                        i18n={i18n}
                        data={data.unpaidClaimsProtests}
                      />
                    </p>
                    <p>
                      <DefaultsAsnef
                        i18n={i18n}
                        data={data.defaultsAsnef}
                      />
                    </p>
                    <p>
                      <IncidentsAsnef
                        i18n={i18n}
                        data={data.incidentsAsnef}
                      />
                    </p>
                    <p>
                      <NonPayments
                        i18n={i18n}
                        data={data.nonPayments}
                      />
                    </p>
                    <p>
                      <Demands
                        i18n={i18n}
                        data={data.demands}
                      />
                    </p>
                    <p>
                      <RatingsDBDP
                        i18n={i18n}
                        data={data.ratingDBDP}
                      />
                    </p>
                    <p>
                      <OtherRTE
                        i18n={i18n}
                        data={data.otherRTE}
                      />
                    </p>
                    <p>
                      <ObservationsDBGDP
                        i18n={i18n}
                        data={data.observations}
                      />
                    </p>
                  </>
                )
              case ReportTypes.NODB:
                return (
                  <>
                    <p>
                      <GeneralDataNoRef
                        i18n={i18n}
                        data={data.generalDatanoDB}
                      />
                    </p>
                    <p>
                      <IdentificationnoDB
                        i18n={i18n}
                        data={data.identificationnoDB}
                      />
                    </p>
                    <p>
                      <TaxCodesEUDBP
                        i18n={i18n}
                        data={data.taxcodesEUDBP}
                      />
                    </p>
                    <p>
                      <NaceCnae
                        i18n={i18n}
                        data={data.naceCnae}
                      />
                    </p>
                    <p>
                      <OtherData
                        i18n={i18n}
                        data={data.otherData}
                      />
                    </p>
                    <p>
                      <TradeNames
                        i18n={i18n}
                        data={data.tradeNames}
                      />
                    </p>
                    <p>
                      <PrimaryResidenceNoDB
                        i18n={i18n}
                        data={data.primaryResidenceNoDB}
                      />
                    </p>
                    <p>
                      <DatosHost
                        i18n={i18n}
                        data={data.datosHost}
                      />
                    </p>
                    <p>
                      <AJTEUDBP
                        i18n={i18n}
                        data={data.ajtEUDBP}
                      />
                    </p>
                    <p>
                      <Resume
                        i18n={i18n}
                        data={data.resume}
                      />
                    </p>
                    <p>
                      <SummaryFinancialInformation
                        i18n={i18n}
                        data={data.summaryFinancialInformation}
                      />
                    </p>
                    <p>
                      <PreviousCompany
                        i18n={i18n}
                        data={data.previousCompany}
                      />
                    </p>
                    <p>
                      <PreviousCompanyTrading
                        i18n={i18n}
                        data={data.previousCompanyTrading}
                      />
                    </p>
                    <p>
                      <CompaniesRelated
                        i18n={i18n}
                        data={data.companiesRelated}
                      />
                    </p>
                    <p>
                      <Managers
                        i18n={i18n}
                        data={data.managers}
                      />
                    </p>
                    <p>
                      <Exports
                        i18n={i18n}
                        data={data.exports}
                      />
                    </p>
                    <p>
                      <Scoring
                        i18n={i18n}
                        data={data.scoring}
                      />
                    </p>
                    <p>
                      <ProtestsDemandsEUDBP
                        i18n={i18n}
                        data={data.protestsDemandsEUDBP}
                      />
                    </p>
                    <p>
                      <DefaultsAsnef
                        i18n={i18n}
                        data={data.defaultsAsnef}
                      />
                    </p>
                    <p>
                      <IncidentsAsnef
                        i18n={i18n}
                        data={data.incidentsAsnef}
                      />
                    </p>
                    <p>
                      <NonPayments
                        i18n={i18n}
                        data={data.nonPayments}
                      />
                    </p>
                    <p>
                      <Demands
                        i18n={i18n}
                        data={data.demands}
                      />
                    </p>
                    <p>
                      <BankEUDBP
                        i18n={i18n}
                        data={data.bankEUDBP}
                      />
                    </p>
                    <p>
                      <RatingsDBDP
                        i18n={i18n}
                        data={data.ratingDBDP}
                      />
                    </p>
                    <p>
                      <OtherRTE
                        i18n={i18n}
                        data={data.otherRTE}
                      />
                    </p>
                    <p>
                      <ObservationsDBGDP
                        i18n={i18n}
                        data={data.observations}
                      />
                    </p>

                  </>
                )
              default:
                return (
                  <></>
                )
            }
          })()}
          <div className={classes.divContentBalance}>
            {(() => {
              switch (report) {
                case ReportTypes.FR_PT_IT:
                  return (
                    <></>
                  )
                default:
                  return (
                    <></>
                  )
              }
            })()}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export { GeneralInformationNoRef }
