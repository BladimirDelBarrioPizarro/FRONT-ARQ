import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { IBalance } from './types'
import {
  Grid,
  Typography,
  AppBar,
  Tab,
  Tabs,
  Box
} from '@material-ui/core'
import {
  ElementSelect,
  ElementsInput,
  ElementRefresh,
  ElementTextArea
} from '../../atoms'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps (index: any): any {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  AppBar: {
    background: 'transparent',
    boxShadow: 'none'
  },
  tabStyleActive: {
    backgroundColor: '#ff9900',
    color: '#ffffff',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px',
    marginTop: '1rem'
  },
  labelStyleBold: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px',
    marginTop: '1rem'
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  select: {
    width: '20rem'
  },
  bold: {
    fontWeight: 600
  },
  divFlex: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divContent: {
    display: 'contents',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  labelTittleStyle: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px',
    marginTop: '20px'
  }
}))

const Balances: React.FC<IBalance> = ({
  i18n,
  formValues,
  originsBalances,
  auditConclusion,
  validateOriginBalances,
  validateSituacion,
  validatePatrimonio,
  validatedContinuedOperations
}) => {
  const objectKeysToString = (obj): any => {
    const objToString = {}
    Object
      .keys(obj)
      .forEach(ele => {
        objToString[ele] = ele
      })

    return objToString
  }
  const formValuesNames = objectKeysToString(formValues)

  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label={i18n['form:spain:balance:tabTitlers']} className={classes.tabStyleActive} {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={1}>
          <div className={classes.divFlex}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">

              <ElementSelect
                label={i18n['form:spain:balance:label1rs']}
                name={formValuesNames.originBalances}
                value={formValuesNames.originBalances}
                options={originsBalances}
                size={'l'}
              />
              <Grid item xs={2}>
              </Grid>
              <div className={classes.divContent} onClick={validateOriginBalances}>
                <ElementRefresh
                  label={i18n['form:spain:balance:upgrade']}
                  size={2}
                />
              </div>
            </Grid>
          </div>

          <Grid item xs={12}>
            <Typography className={classes.labelStyleBold}>
              {i18n['form:spain:balance:closingDates']}
            </Typography>
          </Grid>

          <TableForm
            labelHeader1={i18n['form:spain:balance:closingDatesDD']}
            labelHeader2={i18n['form:spain:balance:closingDatesMM']}
            labelHeader3={i18n['form:spain:balance:closingDatesAAAA']}
            rows={[
              {
                column1Label: i18n['form:spain:balance:closingDates1'],
                column2Name: formValuesNames.balanceClosingDates1Day,
                column3Name: formValuesNames.balanceClosingDates2Day,
                column4Name: formValuesNames.balanceClosingDates3Day
              },
              {
                column1Label: i18n['form:spain:balance:closingDates2'],
                column2Name: formValuesNames.balanceClosingDates2Day,
                column3Name: formValuesNames.balanceClosingDates2Month,
                column4Name: formValuesNames.balanceClosingDates2Year
              },
              {
                column1Label: i18n['form:spain:balance:closingDates3'],
                column2Name: formValuesNames.balanceClosingDates3Day,
                column3Name: formValuesNames.balanceClosingDates3Month,
                column4Name: formValuesNames.balanceClosingDates3Year
              }
            ]}
          />

          <TableForm2
            rows={[
              {
                column1Label: i18n['form:spain:balance:monthsBalances'],
                values: [
                  {
                    value: formValuesNames.balanceClosingMonth1
                  },
                  {
                    value: formValuesNames.balanceClosingMonth2
                  },
                  {
                    value: formValuesNames.balanceClosingMonth3
                  }
                ]
              }
            ]}
          />

          <div className={classes.divFlex}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                <Typography className={classes.labelTittleStyle}>
                  {i18n['form:spain:balance:BalanceSheet']}
                </Typography>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              <div className={classes.divContent} onClick={validateSituacion}>
                <ElementRefresh
                  label={i18n['form:spain:balance:upgrade']}
                  size={2}
                />
              </div>
            </Grid>
          </div>
          <TableForm
            labelHeader1={i18n['form:spain:balance:balance1']}
            labelHeader2={i18n['form:spain:balance:balance2']}
            labelHeader3={i18n['form:spain:balance:balance3']}
            rows={[
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:non-current-assets'],
                column2Name: formValuesNames.noncurrentassets1,
                column3Name: formValuesNames.noncurrentassets2,
                column4Name: formValuesNames.noncurrentassets3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:intangible'],
                column2Name: formValuesNames.intangible1,
                column3Name: formValuesNames.intangible2,
                column4Name: formValuesNames.intangible3
              },
              {
                column1Label: i18n['form:spain:balance:developing'],
                column2Name: formValuesNames.developing1,
                column3Name: formValuesNames.developing2,
                column4Name: formValuesNames.developing3
              },
              {
                column1Label: i18n['form:spain:balance:concessions'],
                column2Name: formValuesNames.concessions1,
                column3Name: formValuesNames.concessions2,
                column4Name: formValuesNames.concessions3
              },
              {
                column1Label: i18n['form:spain:balance:patents'],
                column2Name: formValuesNames.patents1,
                column3Name: formValuesNames.patents2,
                column4Name: formValuesNames.patents3
              },
              {
                column1Label: i18n['form:spain:balance:goodwill'],
                column2Name: formValuesNames.goodwill1,
                column3Name: formValuesNames.goodwill2,
                column4Name: formValuesNames.goodwill3
              },
              {
                column1Label: i18n['form:spain:balance:computerApplications'],
                column2Name: formValuesNames.computerApplications1,
                column3Name: formValuesNames.computerApplications2,
                column4Name: formValuesNames.computerApplications3
              },
              {
                column1Label: i18n['form:spain:balance:anotherIntangible'],
                column2Name: formValuesNames.anotherIntangible1,
                column3Name: formValuesNames.anotherIntangible2,
                column4Name: formValuesNames.anotherIntangible3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:inmobilizedMaterial'],
                column2Name: formValuesNames.inmobilizedMaterial1,
                column3Name: formValuesNames.inmobilizedMaterial2,
                column4Name: formValuesNames.inmobilizedMaterial3
              },
              {
                column1Label: i18n['form:spain:balance:land'],
                column2Name: formValuesNames.land1,
                column3Name: formValuesNames.land2,
                column4Name: formValuesNames.land3
              },
              {
                column1Label: i18n['form:spain:balance:buildings'],
                column2Name: formValuesNames.buildings1,
                column3Name: formValuesNames.buildings2,
                column4Name: formValuesNames.buildings3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:investmentsInGroup'],
                column2Name: formValuesNames.investmentsInGroup1,
                column3Name: formValuesNames.investmentsInGroup2,
                column4Name: formValuesNames.investmentsInGroup3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:financialInvestmentsLongTerm'],
                column2Name: formValuesNames.financialInvestmentsLongTerm1,
                column3Name: formValuesNames.financialInvestmentsLongTerm2,
                column4Name: formValuesNames.financialInvestmentsLongTerm3
              },
              {
                column1Label: i18n['form:spain:balance:heritageInstruments'],
                column2Name: formValuesNames.heritageInstrument1,
                column3Name: formValuesNames.heritageInstrument2,
                column4Name: formValuesNames.heritageInstrument3
              },
              {
                column1Label: i18n['form:spain:balance:thirdPartyCredits'],
                column2Name: formValuesNames.thirdPartyCredits1,
                column3Name: formValuesNames.thirdPartyCredits2,
                column4Name: formValuesNames.thirdPartyCredits3
              },
              {
                column1Label: i18n['form:spain:balance:representativeValuesDebt'],
                column2Name: formValuesNames.representativeValuesDebt1,
                column3Name: formValuesNames.representativeValuesDebt2,
                column4Name: formValuesNames.representativeValuesDebt3
              },
              {
                column1Label: i18n['form:spain:balance:derivatives'],
                column2Name: formValuesNames.derivatives1,
                column3Name: formValuesNames.derivatives2,
                column4Name: formValuesNames.derivatives3
              },
              {
                column1Label: i18n['form:spain:balance:otherFinancialAssets'],
                column2Name: formValuesNames.otherFinancialAssets1,
                column3Name: formValuesNames.otherFinancialAssets2,
                column4Name: formValuesNames.otherFinancialAssets3
              },
              {
                column1Label: i18n['form:spain:balance:otherInvestments'],
                column2Name: formValuesNames.otherInvestments1,
                column3Name: formValuesNames.otherInvestments2,
                column4Name: formValuesNames.otherInvestments3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:taxAssetsDeferred'],
                column2Name: formValuesNames.taxAssetsDeferred1,
                column3Name: formValuesNames.taxAssetsDeferred2,
                column4Name: formValuesNames.taxAssetsDeferred3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:commercialDebtsNoCurrent'],
                column2Name: formValuesNames.commercialDebtsNoCurrent1,
                column3Name: formValuesNames.commercialDebtsNoCurrent2,
                column4Name: formValuesNames.commercialDebtsNoCurrent3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:currentAssets'],
                column2Name: formValuesNames.currentAssets1,
                column3Name: formValuesNames.currentAssets2,
                column4Name: formValuesNames.currentAssets3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:non-current-assets-help-for-sale'],
                column2Name: formValuesNames.nonCurrentAssetsHelpForSale1,
                column3Name: formValuesNames.nonCurrentAssetsHelpForSale2,
                column4Name: formValuesNames.nonCurrentAssetsHelpForSale3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:stocks'],
                column2Name: formValuesNames.stocks1,
                column3Name: formValuesNames.stocks2,
                column4Name: formValuesNames.stocks3
              },
              {
                column1Label: i18n['form:spain:balance:commercial'],
                column2Name: formValuesNames.commercial1,
                column3Name: formValuesNames.commercial2,
                column4Name: formValuesNames.commercial3
              },
              {
                column1Label: i18n['form:spain:balance:rawMaterials'],
                column2Name: formValuesNames.rawMaterials1,
                column3Name: formValuesNames.rawMaterials2,
                column4Name: formValuesNames.rawMaterials3
              },
              {
                column1Label: i18n['form:spain:balance:productsInProgress'],
                column2Name: formValuesNames.productsInProgress1,
                column3Name: formValuesNames.productsInProgress2,
                column4Name: formValuesNames.productsInProgress3
              },
              {
                column1Label: i18n['form:spain:balance:finishedProducts'],
                column2Name: formValuesNames.finishedProducts1,
                column3Name: formValuesNames.finishedProducts2,
                column4Name: formValuesNames.finishedProducts3
              },
              {
                column1Label: i18n['form:spain:balance:byProductsWaste'],
                column2Name: formValuesNames.byProductsWaste1,
                column3Name: formValuesNames.byProductsWaste2,
                column4Name: formValuesNames.byProductsWaste3
              },
              {
                column1Label: i18n['form:spain:balance:advancedToSupplier'],
                column2Name: formValuesNames.advancedToSupplier1,
                column3Name: formValuesNames.advancedToSupplier2,
                column4Name: formValuesNames.advancedToSupplier3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:commercialDebtors'],
                column2Name: formValuesNames.commercialDebtors1,
                column3Name: formValuesNames.commercialDebtors2,
                column4Name: formValuesNames.commercialDebtors3
              },
              {
                column1Label: i18n['form:spain:balance:customersBySalesServicesBenefits'],
                column2Name: formValuesNames.customersBySalesServicesBenefits1,
                column3Name: formValuesNames.customersBySalesServicesBenefits2,
                column4Name: formValuesNames.customersBySalesServicesBenefits3
              },
              {
                column1Label: i18n['form:spain:balance:clientsOfGroupCompanies'],
                column2Name: formValuesNames.clientsOfGroupCompanies1,
                column3Name: formValuesNames.clientsOfGroupCompanies2,
                column4Name: formValuesNames.clientsOfGroupCompanies3
              },
              {
                column1Label: i18n['form:spain:balance:sundryDebtors'],
                column2Name: formValuesNames.sundryDebtors1,
                column3Name: formValuesNames.sundryDebtors2,
                column4Name: formValuesNames.sundryDebtors3
              },
              {
                column1Label: i18n['form:spain:balance:staff'],
                column2Name: formValuesNames.staff1,
                column3Name: formValuesNames.staff2,
                column4Name: formValuesNames.staff3
              },
              {
                column1Label: i18n['form:spain:balance:taxAssetsStreams'],
                column2Name: formValuesNames.taxAssetsStreams1,
                column3Name: formValuesNames.taxAssetsStreams2,
                column4Name: formValuesNames.taxAssetsStreams3
              },
              {
                column1Label: i18n['form:spain:balance:otherAdministrationCredits'],
                column2Name: formValuesNames.otherAdministrationCredits1,
                column3Name: formValuesNames.otherAdministrationCredits2,
                column4Name: formValuesNames.otherAdministrationCredits3
              },
              {
                column1Label: i18n['form:spain:balance:shareholders'],
                column2Name: formValuesNames.shareholders1,
                column3Name: formValuesNames.shareholders2,
                column4Name: formValuesNames.shareholders3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:investmentsInGroupCompaniesAndAssociates'],
                column2Name: formValuesNames.investmentsInGroupCompaniesAndAssociates1,
                column3Name: formValuesNames.investmentsInGroupCompaniesAndAssociates2,
                column4Name: formValuesNames.investmentsInGroupCompaniesAndAssociates3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:financialInvestmentsShortTerm'],
                column2Name: formValuesNames.financialInvestmentsShortTerm1,
                column3Name: formValuesNames.financialInvestmentsShortTerm2,
                column4Name: formValuesNames.financialInvestmentsShortTerm3
              },
              {
                column1Label: i18n['form:spain:balance:equityInstrument'],
                column2Name: formValuesNames.equityInstrument1,
                column3Name: formValuesNames.equityInstrument2,
                column4Name: formValuesNames.equityInstrument3
              },
              {
                column1Label: i18n['form:spain:balance:companyCredits'],
                column2Name: formValuesNames.companyCredits1,
                column3Name: formValuesNames.companyCredits2,
                column4Name: formValuesNames.companyCredits3
              },
              {
                column1Label: i18n['form:spain:balance:representativeValuesOfDebt'],
                column2Name: formValuesNames.representativeValuesOfDebt1,
                column3Name: formValuesNames.representativeValuesOfDebt2,
                column4Name: formValuesNames.representativeValuesOfDebt3
              },
              {
                column1Label: i18n['form:spain:balance:derivatives2'],
                column2Name: formValuesNames.representativeValuesOfDebt1,
                column3Name: formValuesNames.representativeValuesOfDebt2,
                column4Name: formValuesNames.representativeValuesOfDebt3
              },
              {
                column1Label: i18n['form:spain:balance:otherFinancialAssets2'],
                column2Name: formValuesNames.representativeValotherFinancialAssets21,
                column3Name: formValuesNames.representativeValotherFinancialAssets22,
                column4Name: formValuesNames.representativeValotherFinancialAssets23
              },
              {
                column1Label: i18n['form:spain:balance:otherInvestments2'],
                column2Name: formValuesNames.otherInvestments21,
                column3Name: formValuesNames.otherInvestments22,
                column4Name: formValuesNames.otherInvestments23
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:accrualsToShortTerm'],
                column2Name: formValuesNames.accrualsToShortTerm1,
                column3Name: formValuesNames.accrualsToShortTerm2,
                column4Name: formValuesNames.accrualsToShortTerm3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:cashOthersLiquidAssetsEquivalents'],
                column2Name: formValuesNames.cashOthersLiquidAssetsEquivalents1,
                column3Name: formValuesNames.cashOthersLiquidAssetsEquivalents2,
                column4Name: formValuesNames.cashOthersLiquidAssetsEquivalents3
              },
              {
                column1Label: i18n['form:spain:balance:treasury'],
                column2Name: formValuesNames.treasury1,
                column3Name: formValuesNames.treasury2,
                column4Name: formValuesNames.treasury3
              },
              {
                column1Label: i18n['form:spain:balance:otherLiquidAssetsEquivalents'],
                column2Name: formValuesNames.otherLiquidAssetsEquivalents1,
                column3Name: formValuesNames.otherLiquidAssetsEquivalents2,
                column4Name: formValuesNames.otherLiquidAssetsEquivalents3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:totalAssets'],
                column2Name: formValuesNames.totalAssets1,
                column3Name: formValuesNames.totalAssets2,
                column4Name: formValuesNames.totalAssets3
              }
            ]}
          />

          <div className={classes.divFlex}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                <Typography className={classes.labelTittleStyle}>
                  {i18n['form:spain:balance:balanceSheet']}
                </Typography>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              <div className={classes.divContent} onClick={validatePatrimonio}>
                <ElementRefresh
                  label={i18n['form:spain:balance:upgrade']}
                  size={2}
                />
              </div>
            </Grid>
          </div>

          <TableForm
            labelHeader1={i18n['form:spain:balance:balance1']}
            labelHeader2={i18n['form:spain:balance:balance2']}
            labelHeader3={i18n['form:spain:balance:balance3']}
            rows={[
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:equity'],
                column2Name: formValuesNames.equity1,
                column3Name: formValuesNames.equity2,
                column4Name: formValuesNames.equity3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:ownFunds'],
                column2Name: formValuesNames.ownFunds1,
                column3Name: formValuesNames.ownFunds2,
                column4Name: formValuesNames.ownFunds3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:capital'],
                column2Name: formValuesNames.capital1,
                column3Name: formValuesNames.capital2,
                column4Name: formValuesNames.capital3
              },
              {
                column1Label: i18n['form:spain:balance:capitalDeed'],
                column2Name: formValuesNames.capitalDeed1,
                column3Name: formValuesNames.capitalDeed2,
                column4Name: formValuesNames.capitalDeed3
              },
              {
                column1Label: i18n['form:spain:balance:capitalNotRequired'],
                column2Name: formValuesNames.capitalNotRequired1,
                column3Name: formValuesNames.capitalNotRequired2,
                column4Name: formValuesNames.capitalNotRequired3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:issuePremium'],
                column2Name: formValuesNames.issuePremium1,
                column3Name: formValuesNames.issuePremium2,
                column4Name: formValuesNames.issuePremium3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:bookings'],
                column2Name: formValuesNames.bookings1,
                column3Name: formValuesNames.bookings2,
                column4Name: formValuesNames.bookings3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:actionsAndShares'],
                column2Name: formValuesNames.actionsAndShares1,
                column3Name: formValuesNames.actionsAndShares2,
                column4Name: formValuesNames.actionsAndShares3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:resultOfExercisesPrevious'],
                column2Name: formValuesNames.resultOfExercisesPrevious1,
                column3Name: formValuesNames.resultOfExercisesPrevious2,
                column4Name: formValuesNames.resultOfExercisesPrevious3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:otherContributionsFromPartners'],
                column2Name: formValuesNames.otherContributionsFromPartners1,
                column3Name: formValuesNames.otherContributionsFromPartners2,
                column4Name: formValuesNames.otherContributionsFromPartners3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:resultExercise'],
                column2Name: formValuesNames.resultExercise1,
                column3Name: formValuesNames.resultExercise2,
                column4Name: formValuesNames.resultExercise3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:dividendOnAccount'],
                column2Name: formValuesNames.dividendOnAccount1,
                column3Name: formValuesNames.dividendOnAccount2,
                column4Name: formValuesNames.dividendOnAccount3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:otherInstrumentsHeritage'],
                column2Name: formValuesNames.otherInstrumentsHeritage1,
                column3Name: formValuesNames.otherInstrumentsHeritage2,
                column4Name: formValuesNames.otherInstrumentsHeritage3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:adjustmentsChangesOfValue'],
                column2Name: formValuesNames.adjustmentsChangesOfValue1,
                column3Name: formValuesNames.adjustmentsChangesOfValue2,
                column4Name: formValuesNames.adjustmentsChangesOfValue3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:financialAssetsAvailableForSale'],
                column2Name: formValuesNames.financialAssetsAvailableForSale1,
                column3Name: formValuesNames.financialAssetsAvailableForSale2,
                column4Name: formValuesNames.financialAssetsAvailableForSale3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:operationsCoverage'],
                column2Name: formValuesNames.operationsCoverage1,
                column3Name: formValuesNames.operationsCoverage2,
                column4Name: formValuesNames.operationsCoverage3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:nonCurrentAssetsRelatedLiabilities'],
                column2Name: formValuesNames.nonCurrentAssetsRelatedLiabilities1,
                column3Name: formValuesNames.nonCurrentAssetsRelatedLiabilities2,
                column4Name: formValuesNames.nonCurrentAssetsRelatedLiabilities3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:differencesOfConversion'],
                column2Name: formValuesNames.differencesOfConversion1,
                column3Name: formValuesNames.differencesOfConversion2,
                column4Name: formValuesNames.differencesOfConversion3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:others'],
                column2Name: formValuesNames.others1,
                column3Name: formValuesNames.others2,
                column4Name: formValuesNames.others3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:grantsDonationsBequestReceived'],
                column2Name: formValuesNames.grantsDonationsBequestReceived1,
                column3Name: formValuesNames.grantsDonationsBequestReceived2,
                column4Name: formValuesNames.grantsDonationsBequestReceived3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:nonCurrentLiabilities'],
                column2Name: formValuesNames.nonCurrentLiabilities1,
                column3Name: formValuesNames.nonCurrentLiabilities2,
                column4Name: formValuesNames.nonCurrentLiabilities3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:longTermProvisions'],
                column2Name: formValuesNames.longTermProvisions1,
                column3Name: formValuesNames.longTermProvisions2,
                column4Name: formValuesNames.longTermProvisions3
              },
              {
                column1Label: i18n['form:spain:balance:provisionsRestructuring'],
                column2Name: formValuesNames.provisionsRestructuring1,
                column3Name: formValuesNames.provisionsRestructuring2,
                column4Name: formValuesNames.provisionsRestructuring3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:longTermDebts'],
                column2Name: formValuesNames.longTermDebts1,
                column3Name: formValuesNames.longTermDebts2,
                column4Name: formValuesNames.longTermDebts3
              },
              {
                column1Label: i18n['form:spain:balance:obligationsOtherSecuritiesNegotiable'],
                column2Name: formValuesNames.obligationsOtherSecuritiesNegotiable1,
                column3Name: formValuesNames.obligationsOtherSecuritiesNegotiable2,
                column4Name: formValuesNames.obligationsOtherSecuritiesNegotiable3
              },
              {
                column1Label: i18n['form:spain:balance:debtsEntitiesCredit'],
                column2Name: formValuesNames.debtsEntitiesCredit1,
                column3Name: formValuesNames.debtsEntitiesCredit2,
                column4Name: formValuesNames.debtsEntitiesCredit3
              },
              {
                column1Label: i18n['form:spain:balance:creditorsFinancialLeasing'],
                column2Name: formValuesNames.creditorsFinancialLeasing1,
                column3Name: formValuesNames.creditorsFinancialLeasing2,
                column4Name: formValuesNames.creditorsFinancialLeasing3
              },
              {
                column1Label: i18n['form:spain:balance:derivatives22'],
                column2Name: formValuesNames.derivatives221,
                column3Name: formValuesNames.derivatives222,
                column4Name: formValuesNames.derivatives223
              },
              {
                column1Label: i18n['form:spain:balance:otherFinancialLiabilities'],
                column2Name: formValuesNames.otherFinancialLiabilities1,
                column3Name: formValuesNames.otherFinancialLiabilities2,
                column4Name: formValuesNames.otherFinancialLiabilities3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:debtsCompaniesGroupAssociatedLongTerm'],
                column2Name: formValuesNames.debtsCompaniesGroupAssociatedLongTerm1,
                column3Name: formValuesNames.debtsCompaniesGroupAssociatedLongTerm2,
                column4Name: formValuesNames.debtsCompaniesGroupAssociatedLongTerm3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:taxLiabilitiesDeferred'],
                column2Name: formValuesNames.taxLiabilitiesDeferred1,
                column3Name: formValuesNames.taxLiabilitiesDeferred2,
                column4Name: formValuesNames.taxLiabilitiesDeferred3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:longAccrualsTerm'],
                column2Name: formValuesNames.longAccrualsTerm1,
                column3Name: formValuesNames.longAccrualsTerm2,
                column4Name: formValuesNames.longAccrualsTerm3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:tradeCreditorsNoCurrents'],
                column2Name: formValuesNames.tradeCreditorsNoCurrents1,
                column3Name: formValuesNames.tradeCreditorsNoCurrents2,
                column4Name: formValuesNames.tradeCreditorsNoCurrents3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:debtsSpecialFeaturesLongTerm'],
                column2Name: formValuesNames.debtsSpecialFeaturesLongTerm1,
                column3Name: formValuesNames.debtsSpecialFeaturesLongTerm2,
                column4Name: formValuesNames.debtsSpecialFeaturesLongTerm3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:currentLiabilities'],
                column2Name: formValuesNames.currentLiabilities1,
                column3Name: formValuesNames.currentLiabilities2,
                column4Name: formValuesNames.currentLiabilities3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:liabilitiesRelatedNonCurrentAssetsHelpForSale'],
                column2Name: formValuesNames.liabilitiesRelatedNonCurrentAssetsHelpForSale1,
                column3Name: formValuesNames.liabilitiesRelatedNonCurrentAssetsHelpForSale2,
                column4Name: formValuesNames.liabilitiesRelatedNonCurrentAssetsHelpForSale3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:shortProvisionsTerm'],
                column2Name: formValuesNames.shortProvisionsTerm1,
                column3Name: formValuesNames.shortProvisionsTerm2,
                column4Name: formValuesNames.shortProvisionsTerm3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:shortTermDebts'],
                column2Name: formValuesNames.shortTermDebts1,
                column3Name: formValuesNames.shortTermDebts2,
                column4Name: formValuesNames.shortTermDebts3
              },
              {
                column1Label: i18n['form:spain:balance:obligationsOtherSecuritiesNegotiable2'],
                column2Name: formValuesNames.obligationsOtherSecuritiesNegotiable21,
                column3Name: formValuesNames.obligationsOtherSecuritiesNegotiable22,
                column4Name: formValuesNames.obligationsOtherSecuritiesNegotiable23
              },
              {
                column1Label: i18n['form:spain:balance:debtsEntitiesOfCredit'],
                column2Name: formValuesNames.debtsEntitiesOfCredit1,
                column3Name: formValuesNames.debtsEntitiesOfCredit2,
                column4Name: formValuesNames.debtsEntitiesOfCredit3
              },
              {
                column1Label: i18n['form:spain:balance:derivatives3'],
                column2Name: formValuesNames.derivatives31,
                column3Name: formValuesNames.derivatives32,
                column4Name: formValuesNames.derivatives33
              },
              {
                column1Label: i18n['form:spain:balance:otherFinancialLiabilities2'],
                column2Name: formValuesNames.otherFinancialLiabilities21,
                column3Name: formValuesNames.otherFinancialLiabilities22,
                column4Name: formValuesNames.otherFinancialLiabilities23
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:debtsCompaniesGroupAssociatedShortTerm'],
                column2Name: formValuesNames.debtsCompaniesGroupAssociatedShortTerm1,
                column3Name: formValuesNames.debtsCompaniesGroupAssociatedShortTerm2,
                column4Name: formValuesNames.debtsCompaniesGroupAssociatedShortTerm3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:tradeCreditorsOtherAccountsPayable'],
                column2Name: formValuesNames.tradeCreditorsOtherAccountsPayable1,
                column3Name: formValuesNames.tradeCreditorsOtherAccountsPayable2,
                column4Name: formValuesNames.tradeCreditorsOtherAccountsPayable3
              },
              {
                column1Label: i18n['form:spain:balance:suppliers'],
                column2Name: formValuesNames.suppliers1,
                column3Name: formValuesNames.suppliers2,
                column4Name: formValuesNames.suppliers3
              },
              {
                column1Label: i18n['form:spain:balance:suppliersCompaniesGroupAssociates'],
                column2Name: formValuesNames.suppliersCompaniesGroupAssociates1,
                column3Name: formValuesNames.suppliersCompaniesGroupAssociates2,
                column4Name: formValuesNames.suppliersCompaniesGroupAssociates3
              },
              {
                column1Label: i18n['form:spain:balance:variousCreditors'],
                column2Name: formValuesNames.variousCreditors1,
                column3Name: formValuesNames.variousCreditors2,
                column4Name: formValuesNames.variousCreditors3
              },
              {
                column1Label: i18n['form:spain:balance:personnelSalariesStillPaid'],
                column2Name: formValuesNames.personnelSalariesStillPaid1,
                column3Name: formValuesNames.personnelSalariesStillPaid2,
                column4Name: formValuesNames.personnelSalariesStillPaid3
              },
              {
                column1Label: i18n['form:spain:balance:taxLiabilitiesStream'],
                column2Name: formValuesNames.taxLiabilitiesStream1,
                column3Name: formValuesNames.taxLiabilitiesStream2,
                column4Name: formValuesNames.taxLiabilitiesStream3
              },
              {
                column1Label: i18n['form:spain:balance:otherDebtsPublicAdministrations'],
                column2Name: formValuesNames.otherDebtsPublicAdministrations1,
                column3Name: formValuesNames.otherDebtsPublicAdministrations2,
                column4Name: formValuesNames.otherDebtsPublicAdministrations3
              },
              {
                column1Label: i18n['form:spain:balance:advancesFromClients'],
                column2Name: formValuesNames.advancesFromClients1,
                column3Name: formValuesNames.advancesFromClients2,
                column4Name: formValuesNames.advancesFromClients3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:accrualsShortTerm'],
                column2Name: formValuesNames.accrualsShortTerm1,
                column3Name: formValuesNames.accrualsShortTerm2,
                column4Name: formValuesNames.accrualsShortTerm3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:debtsSpecialFeaturesShortTerm'],
                column2Name: formValuesNames.debtsSpecialFeaturesShortTerm1,
                column3Name: formValuesNames.debtsSpecialFeaturesShortTerm2,
                column4Name: formValuesNames.debtsSpecialFeaturesShortTerm3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:totalEquityLiabilitiesABC'],
                column2Name: formValuesNames.totalEquityLiabilitiesABC1,
                column3Name: formValuesNames.totalEquityLiabilitiesABC2,
                column4Name: formValuesNames.totalEquityLiabilitiesABC3
              }
            ]}
          />

          <div className={classes.divFlex}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                <Typography className={classes.labelTittleStyle}>
                  {i18n['form:spain:balance:incomeStatement']}
                </Typography>
              </Grid>

              <Grid item xs={2}>
              </Grid>

            </Grid>
          </div>

          <div className={classes.divFlex}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                <Typography className={classes.labelTittleStyle}>
                  {i18n['form:spain:balance:continuedOperations']}
                </Typography>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              <div className={classes.divContent} onClick={validatedContinuedOperations}>
                <ElementRefresh
                  label={i18n['form:spain:balance:upgrade']}
                  size={2}
                />
              </div>
            </Grid>
          </div>

          <TableForm
            labelHeader1={i18n['form:spain:balance:balance1']}
            labelHeader2={i18n['form:spain:balance:balance2']}
            labelHeader3={i18n['form:spain:balance:balance3']}
            rows={[
              {
                column1Label: i18n['form:spain:balance:netAmountFigureBusiness'],
                column2Name: formValuesNames.netAmountFigureBusiness1,
                column3Name: formValuesNames.netAmountFigureBusiness2,
                column4Name: formValuesNames.netAmountFigureBusiness3
              },
              {
                column1Label: i18n['form:spain:balance:sales'],
                column2Name: formValuesNames.sales1,
                column3Name: formValuesNames.sales2,
                column4Name: formValuesNames.sales3
              },
              {
                column1Label: i18n['form:spain:balance:provisionOfServices'],
                column2Name: formValuesNames.provisionOfServices1,
                column3Name: formValuesNames.provisionOfServices2,
                column4Name: formValuesNames.provisionOfServices3
              },
              {
                column1Label: i18n['form:spain:balance:variationProductStocksCompleted'],
                column2Name: formValuesNames.variationProductStocksCompleted1,
                column3Name: formValuesNames.variationProductStocksCompleted2,
                column4Name: formValuesNames.variationProductStocksCompleted3
              },
              {
                column1Label: i18n['form:spain:balance:workCarriedOutCompanyAsset'],
                column2Name: formValuesNames.workCarriedOutCompanyAsset1,
                column3Name: formValuesNames.workCarriedOutCompanyAsset2,
                column4Name: formValuesNames.workCarriedOutCompanyAsset3
              },
              {
                column1Label: i18n['form:spain:balance:workCarriedOutCompanyAsset'],
                column2Name: formValuesNames.workCarriedOutCompanyAsset1,
                column3Name: formValuesNames.workCarriedOutCompanyAsset2,
                column4Name: formValuesNames.workCarriedOutCompanyAsset3
              },
              {
                column1Label: i18n['form:spain:balance:procurement'],
                column2Name: formValuesNames.procurement1,
                column3Name: formValuesNames.procurement2,
                column4Name: formValuesNames.procurement3
              },
              {
                column1Label: i18n['form:spain:balance:personnelExpenses'],
                column2Name: formValuesNames.personnelExpenses1,
                column3Name: formValuesNames.personnelExpenses2,
                column4Name: formValuesNames.personnelExpenses3
              },
              {
                column1Label: i18n['form:spain:balance:otherExpensesExplotation'],
                column2Name: formValuesNames.otherExpensesExplotation1,
                column3Name: formValuesNames.otherExpensesExplotation2,
                column4Name: formValuesNames.otherExpensesExplotation3
              },
              {
                column1Label: i18n['form:spain:balance:amortizationImmobilized'],
                column2Name: formValuesNames.amortizationImmobilized1,
                column3Name: formValuesNames.amortizationImmobilized2,
                column4Name: formValuesNames.amortizationImmobilized3
              },
              {
                column1Label: i18n['form:spain:balance:imputationFixedAssetsGrants'],
                column2Name: formValuesNames.imputationFixedAssetsGrants1,
                column3Name: formValuesNames.imputationFixedAssetsGrants2,
                column4Name: formValuesNames.imputationFixedAssetsGrants3
              },
              {
                column1Label: i18n['form:spain:balance:excessProvisions'],
                column2Name: formValuesNames.excessProvisions1,
                column3Name: formValuesNames.excessProvisions2,
                column4Name: formValuesNames.excessProvisions3
              },
              {
                column1Label: i18n['form:spain:balance:impairmentResultDisposalsImmobilized'],
                column2Name: formValuesNames.impairmentResultDisposalsImmobilized1,
                column3Name: formValuesNames.impairmentResultDisposalsImmobilized2,
                column4Name: formValuesNames.impairmentResultDisposalsImmobilized3
              },
              {
                column1Label: i18n['form:spain:balance:impairmentLosses'],
                column2Name: formValuesNames.impairmentLosses1,
                column3Name: formValuesNames.impairmentLosses2,
                column4Name: formValuesNames.impairmentLosses3
              },
              {
                column1Label: i18n['form:spain:balance:resultsDisposalsOther'],
                column2Name: formValuesNames.resultsDisposalsOther1,
                column3Name: formValuesNames.resultsDisposalsOther2,
                column4Name: formValuesNames.resultsDisposalsOther3
              },
              {
                column1Label: i18n['form:spain:balance:negativeDifferencesBusinessCombinations'],
                column2Name: formValuesNames.negativeDifferencesBusinessCombinations1,
                column3Name: formValuesNames.negativeDifferencesBusinessCombinations2,
                column4Name: formValuesNames.negativeDifferencesBusinessCombinations3
              },
              {
                column1Label: i18n['form:spain:balance:otherResults'],
                column2Name: formValuesNames.otherResults1,
                column3Name: formValuesNames.otherResults2,
                column4Name: formValuesNames.otherResults3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:resultOperation'],
                column2Name: formValuesNames.resultOperation1,
                column3Name: formValuesNames.resultOperation2,
                column4Name: formValuesNames.resultOperation2
              },
              {
                column1Label: i18n['form:spain:balance:financialIncome'],
                column2Name: formValuesNames.financialIncome1,
                column3Name: formValuesNames.financialIncome2,
                column4Name: formValuesNames.financialIncome3
              },
              {
                column1Label: i18n['form:spain:balance:financialExpenses'],
                column2Name: formValuesNames.financialExpenses1,
                column3Name: formValuesNames.financialExpenses2,
                column4Name: formValuesNames.financialExpenses3
              },
              {
                column1Label: i18n['form:spain:balance:variationValueReasonableInstruments'],
                column2Name: formValuesNames.variationValueReasonableInstruments1,
                column3Name: formValuesNames.variationValueReasonableInstruments2,
                column4Name: formValuesNames.variationValueReasonableInstruments3
              },
              {
                column1Label: i18n['form:spain:balance:exchangeDifferences'],
                column2Name: formValuesNames.exchangeDifferences1,
                column3Name: formValuesNames.exchangeDifferences2,
                column4Name: formValuesNames.exchangeDifferences3
              },
              {
                column1Label: i18n['form:spain:balance:impairmentResultDisposalsFinnacialInstruments3'],
                column2Name: formValuesNames.impairmentResultDisposalsFinnacialInstruments1,
                column3Name: formValuesNames.impairmentResultDisposalsFinnacialInstruments2,
                column4Name: formValuesNames.impairmentResultDisposalsFinnacialInstruments3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:resultFinancial'],
                column2Name: formValuesNames.resultFinancial1,
                column3Name: formValuesNames.resultFinancial2,
                column4Name: formValuesNames.resultFinancial3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:resultBeforeTaxes'],
                column2Name: formValuesNames.resultBeforeTaxes1,
                column3Name: formValuesNames.resultBeforeTaxes2,
                column4Name: formValuesNames.resultBeforeTaxes3
              },
              {
                column1Label: i18n['form:spain:balance:taxesOnBenefits'],
                column2Name: formValuesNames.taxesOnBenefits1,
                column3Name: formValuesNames.taxesOnBenefits2,
                column4Name: formValuesNames.taxesOnBenefits3
              },
              {
                column1Bold: true,
                column1Label: i18n['form:spain:balance:resultExerciseFromOperationsContinued'],
                column2Name: formValuesNames.resultExerciseFromOperationsContinued1,
                column3Name: formValuesNames.resultExerciseFromOperationsContinued2,
                column4Name: formValuesNames.resultExerciseFromOperationsContinued3
              },
              {
                column1Label: i18n['form:spain:balance:profitYearOperationsInterrupted'],
                column2Name: formValuesNames.profitYearOperationsInterrupted1,
                column3Name: formValuesNames.profitYearOperationsInterrupted2,
                column4Name: formValuesNames.profitYearOperationsInterrupted3
              }
            ]}
          />
          <div className={classes.divFlex}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="flex-start">
              <ElementSelect
                label={i18n['form:spain:balance:auditConclusion']}
                name={formValuesNames.auditConclusion}
                value={formValuesNames.auditConclusion}
                options={auditConclusion}
                size={'l'}
              />
            </Grid>
          </div>

          {[
            {
              label: i18n['form:spain:balance:auditComments'],
              name: formValuesNames.branches
            }
          ].map(({ label, name }, index) => (
            <div className={classes.divFlex} key={index}>
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                <ElementTextArea
                  label={label}
                  name={name}
                  value={name}
                  cols={50}
                  rows={2}
                  size='xl'
                />
              </Grid>
            </div>
          ))}
        </Grid>
      </TabPanel>

    </div>
  )
}

interface ITableForm {
  readonly labelHeader1: string
  readonly labelHeader2: string
  readonly labelHeader3: string
  readonly TableActionComponent?: null|React.FC
  readonly rows: Array<{
    column1Label: string
    column1Bold?: boolean
    column2Name: string
    column3Name: string
    column4Name: string
  }>
}

const TableForm: React.FC<ITableForm> = ({
  labelHeader1,
  labelHeader2,
  labelHeader3,
  rows
}) => {
  const classes = useStyles()

  return (
    <>

      <div className={classes.divFlex}>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography className={classes.labelStyle}>

            </Typography>
          </Grid>
          {[
            {
              value: labelHeader1
            },
            {
              value: labelHeader2
            },
            {
              value: labelHeader3
            }
          ].map(({ value }, index) => (
            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
              key={index}>
              <Typography className={classes.labelStyle}>
                {value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>

      {rows.map(({
        column1Label,
        column1Bold = false,
        column2Name,
        column3Name,
        column4Name
      }, counter) => (
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={2}
          key={counter}>
          <ElementsInput
            type={'text'}
            name={column1Label}
            label={column1Label}
            values={[
              { value: column2Name },
              { value: column3Name },
              { value: column4Name }
            ]}
            index={false}
            bold={column1Bold}
          />
        </Grid>

      )

      )}
    </>
  )
}

interface ITableForm2 {
  readonly rows: Array<{
    column1Label: string
    column1Bold?: boolean
    values: any
  }>
}

const TableForm2: React.FC<ITableForm2> = ({
  rows
}) => {
  return (
    <>
      {rows.map(({
        column1Label,
        values
      }, counter) => (
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={2}
          key={counter}>
          <ElementsInput
            type={'text'}
            name={column1Label}
            label={column1Label}
            values={values}
            index={false}
            bold={false}
          />
        </Grid>
      )

      )}
    </>
  )
}

export { Balances }
