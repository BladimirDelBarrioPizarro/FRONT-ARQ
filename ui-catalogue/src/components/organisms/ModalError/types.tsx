interface Ii18nModalError {
  'ModalError:error': string
  'ModalError:button': string
}

export interface IModalError {
  logo: any
  i18n: Ii18nModalError
  message: any
  open: boolean
  handleClose: () => void
}
