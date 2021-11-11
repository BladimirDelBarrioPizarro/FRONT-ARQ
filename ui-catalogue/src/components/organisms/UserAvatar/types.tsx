export interface IUserAvatar{
  nameUser: string
  emailUser: string
  avatar: string
  notifications: boolean
  emails: boolean
  handleSettings?: () => void
  handleNotifications?: () => void
  handleMails?: () => void
}
