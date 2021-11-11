import { IPaymentFormRequestForm } from '../../molecules/PaymentForm/types'
import { IPaydexHistoricRequestForm } from '../../molecules/PaydexHistoric/types'
import { IPaydexSectorialRequestForm } from '../../molecules/PaydexSectorial/types'
import { ISummaryPaymentsRequestForm } from '../../molecules/SummaryPayments/types'

interface Ii18nPayments {
  'Payments:title': string
}

export interface IPaymentsRequestForm {
  paymentForm: IPaymentFormRequestForm
  paydexHistoric: IPaydexHistoricRequestForm
  paydexSectorial: IPaydexSectorialRequestForm
  summaryPayments: ISummaryPaymentsRequestForm[]
}

export interface IPayments {
  i18n: any
  data: IPaymentsRequestForm
}
