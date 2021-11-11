interface Ii18nEntityCommunication {
  'EntityCommunication:title': string
  'EntityCommunication:detailTbDeuda': string
  'EntityCommunication:detailTbDeudaDeudor': string
  'EntityCommunication:detailTbIncumplimiento': string
  'EntityCommunication:detailTbIncumplimientoDeudor': string
  'EntityCommunication:detailTbPotencial': string
  'EntityCommunication:detailTbPotencialDeudor': string
}

export interface IEntityCommunicationRequestForm{
  deuda: string
  deudaDeudor: string
  incumplimiento: string
  incumplimientoDeudor: string
  potencial: string
  potencialDeudor: string
}

export interface IEntityCommunication {
  i18n: Ii18nEntityCommunication
  data: IEntityCommunicationRequestForm
}
