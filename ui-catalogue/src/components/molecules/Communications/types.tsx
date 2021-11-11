interface Ii18nCommunications {
  'Communications:title': string
  'Communications:phone': string
}

export interface ICommunicationsRequestForm {
  phone1: string
  phone2: string
  phone3: string
}

export interface ICommunications {
  i18n: Ii18nCommunications
  data: ICommunicationsRequestForm
}
