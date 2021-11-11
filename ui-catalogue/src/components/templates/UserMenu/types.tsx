import { IApplicationElement } from '../../molecules/ApplicationElement/types'
import { IUserAvatar } from '../../organisms/UserAvatar/types'

export interface IUserData {
  nameUser: string
  emailUser: string
  avatar: any
  notifications: boolean
  emails: boolean
  handleSettings?: () => void
  handleNotifications?: () => void
  handleMails?: () => void
}

export interface IUserMenu {
  i18n: any
  applications: IApplicationElement[]
  userData: IUserAvatar
  logo: any
}
