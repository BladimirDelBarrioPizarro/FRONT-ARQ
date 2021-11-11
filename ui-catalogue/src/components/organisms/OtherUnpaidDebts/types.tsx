import { IDebsReportedInfoCorpSicomRequestForm } from '../../molecules/DebtsReportedInfoCorpSicom/types'
import { INegativeSunatRequestForm } from '../../molecules/NegativeSunat/types'
import { IOmissionRequestForm } from '../../molecules/Omission/types'
import { IProtestBulletinRequestForm } from '../../molecules/ProtestBulletin/types'
import { IVoidedCardsRequestForm } from '../../molecules/VoidedCards/types'
import { ICanceledAccountsRequestForm } from '../../molecules/CanceledAccounts/types'

interface i18nOtherUnpaidDebts {
  'OtherUnpaidDebts:title': string
}

export interface IOtherUnpaidDebtsRequestFrom {
  debtsReportedInfoCorpSicom: IDebsReportedInfoCorpSicomRequestForm
  negativeSunat: INegativeSunatRequestForm
  omission: IOmissionRequestForm
  protestBulletin: IProtestBulletinRequestForm
  voidedCards: IVoidedCardsRequestForm
  canceledAccounts: ICanceledAccountsRequestForm
}

export interface IOtherUnpaidDebts {
  i18n: any
  data: IOtherUnpaidDebtsRequestFrom
}
