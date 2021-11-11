interface Ii18nModalSuccess {
  'ModalSuccess:message': string
  'ModalSuccess:button': string
}

export interface IModalSuccess {
  logo: any
  i18n: Ii18nModalSuccess
  message: any
  open: boolean
  handleClose: () => void
}
