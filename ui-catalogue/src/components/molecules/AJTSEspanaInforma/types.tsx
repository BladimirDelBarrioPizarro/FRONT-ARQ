interface Ii18nAjtsEspanaInforma {
  'AjtsEspanaInforma:title': string
  'AjtsEspanaInforma:titleDatosCualitativos': string
  'AjtsEspanaInforma:tipoderespuesta': string
  'AjtsEspanaInforma:escort': string
  'AjtsEspanaInforma:fechaconstitucion': string
  'AjtsEspanaInforma:balance': string
  'AjtsEspanaInforma:deposito': string
  'AjtsEspanaInforma:negativa': string
  'AjtsEspanaInforma:titleFormasJuridicas': string
  'AjtsEspanaInforma:compromiso': string
  'AjtsEspanaInforma:incidentes': string
  'AjtsEspanaInforma:pagos': string
  'AjtsEspanaInforma:experiencia': string
  'AjtsEspanaInforma:documentos': string
}

export interface IAjtsEspanaInformaRequestForm {
  tipoderespuesta: string
  escort: string
  fechaconstitucion: string
  balance: string
  deposito: string
  negativa: string
  compromiso: string
  incidentes: string
  pagos: string
  experiencia: string
  documentos: string
}

export interface IAjtsEspanaInforma {
  i18n: Ii18nAjtsEspanaInforma
  data: IAjtsEspanaInformaRequestForm
}
