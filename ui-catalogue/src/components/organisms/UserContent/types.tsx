import { IApplicationElement } from '../../molecules/ApplicationElement/types'

interface Ii18nUserMenu {
  'MenuUser:title': string
}

export interface IUserContent {
  i18n: Ii18nUserMenu
  applications: IApplicationElement[]
  handleApplication: (index) => void
}
