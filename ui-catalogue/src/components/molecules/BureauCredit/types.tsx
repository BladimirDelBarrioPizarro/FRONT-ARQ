interface Ii18nBureauCredit {
  'BureauCredit:title': string
  'BureauCredit:porcentajesituacion': string
  'BureauCredit:situacion': string
  'BureauCredit:codigoentidad': string
  'BureauCredit:periodo': string
  'BureauCredit:monto': string
  'BureauCredit:porcentajetotal': string
}

export interface IBureauCreditRequestForm {
  porcentajesituacion1: string
  porcentajesituacion2: string
  porcentajesituacion3: string
  porcentajesituacion4: string
  porcentajesituacion5: string
  porcentajesituacion6: string
  porcentajesituacion7: string
  porcentajesituacion8: string
  porcentajesituacion9: string
  porcentajesituacion10: string
  porcentajesituacion11: string
  porcentajesituacion12: string
  porcentajesituacion13: string
  porcentajesituacion14: string

  situacion1: string
  situacion2: string
  situacion3: string
  situacion4: string
  situacion5: string
  situacion6: string
  situacion7: string
  situacion8: string
  situacion9: string
  situacion10: string
  situacion11: string
  situacion12: string
  situacion13: string
  situacion14: string

  codigoentidad1: string
  codigoentidad2: string
  codigoentidad3: string
  codigoentidad4: string
  codigoentidad5: string
  codigoentidad6: string
  codigoentidad7: string
  codigoentidad8: string
  codigoentidad9: string
  codigoentidad10: string
  codigoentidad11: string
  codigoentidad12: string
  codigoentidad13: string
  codigoentidad14: string

  periodo1: string
  periodo2: string
  periodo3: string
  periodo4: string
  periodo5: string
  periodo6: string
  periodo7: string
  periodo8: string
  periodo9: string
  periodo10: string
  periodo11: string
  periodo12: string
  periodo13: string
  periodo14: string

  monto1: string
  monto2: string
  monto3: string
  monto4: string
  monto5: string
  monto6: string
  monto7: string
  monto8: string
  monto9: string
  monto10: string
  monto11: string
  monto12: string
  monto13: string
  monto14: string

  porcentajetotal1: string
  porcentajetotal2: string
  porcentajetotal3: string
  porcentajetotal4: string
  porcentajetotal5: string
  porcentajetotal6: string
  porcentajetotal7: string
  porcentajetotal8: string
  porcentajetotal9: string
  porcentajetotal10: string
  porcentajetotal11: string
  porcentajetotal12: string
  porcentajetotal13: string
  porcentajetotal14: string

}

export interface IBureauCredit {
  i18n: Ii18nBureauCredit
  data: IBureauCreditRequestForm
}
