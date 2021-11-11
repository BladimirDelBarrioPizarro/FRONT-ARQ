export enum MenusType{
  STANDARD,
  UTILITIES,
  SIMULATION
}

export interface Ii18nDashboardMenu {
  'DashboardMenu:labelMenuConsultaInformes': string
  'DashboardMenu:labelMenuUtilidades': string
  'DashboardMenu:labelMenuReturnUtilidades': string
  'DashboardMenu:labelMenuReferenciacion': string
  'DashboardMenu:labelMenuBOEN': string
  'DashboardMenu:labelMenuSimulacion': string
  'DashboardMenu:labelMenuReturnSimulacion': string
  'DashboardMenu:labelMenuCopia': string
  'DashboardMenu:labelMenuFTP': string
  'DashboardMenu:labelMenuPeticiones': string
  'DashboardMenu:labelMenuGestionMasiva': string
}

export interface IDashboardMenu {
  i18n: Ii18nDashboardMenu
  handleSetPage: (page: any) => void
}
