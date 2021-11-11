import {
  ReportTypes
} from '@cesce/ui-catalogue'
import {
  mapperNoRefRestoPaises,
  mapperEspanaInforma,
  mapperBadexcug,
  mapperEudbpPT,
  mapperBureauMexico,
  mapperPeruEquifax
} from './mappers'

export const getReportTypes = (template): any => {
  switch (template) {
    case 'Informes_DB-DB_EUDBP_IT':
      return null
    case 'Informes_DB-DB_EUDBP_FR':
      return null
    case 'Informes_DB-DB_EUDBP_PT':
      return null
    case 'Informes_DB-DB_RESTO_PAISES':
      return null
    case 'Informes_España_BADEXCUG':
      return ReportTypes.BADEXCUG
    case 'Informes_España_INFORMA':
      return ReportTypes.ESPANA_INFORMA
    case 'Informes_Latinos_Equifax_Chile':
      return null
    case 'Informes_Latinos_Equifax_Chile_Platinum':
      return null
    case 'Informes_Latinos_Equifax_Peru':
      return ReportTypes.PERU_EQUIFAX
    case 'Informes_Latinos_Informa_Colombia':
      return null
    case 'Informes_Latinos_Nosis_Argentina':
      return null
    case 'Informes_Latinos-Serasa_Brasil':
      return null
    case 'Informes_Latinos-Serasa_Brasil_Concentre':
      return null
    case 'Informes_Red_Agencial-ESPAÑA':
      return null
    case 'Informes_Red_Agencial-FRANCIA':
      return null
    case 'Informes_Red_Agencial-LATINO':
      return null
    case 'Informes_Red_Agencial-PORTUGAL':
      return null
    case 'Otros_Corresponsales_Banco_De_Portugal':
      return null
    case 'Otros_Corresponsales_Bureau_De_Mexico':
      return ReportTypes.BUREAU_MEJICO
    case 'Informes_no_referenciados-DB-FR_PT_IT':
      return null
    case 'Informes_no_referenciados-DB_Resto_de_paises':
      return ReportTypes.NOREF_RESTO_PAISES
    case 'Informes_no_referenciados-noDB':
      return null
  }
}

export const mapperBaseReport = (data, report, json): any => {
  switch (report) {
    case ReportTypes.BADEXCUG:
      return mapperBadexcug(data, json)
    case ReportTypes.ESPANA_INFORMA:
      return mapperEspanaInforma(data, json)
    case ReportTypes.NOREF_RESTO_PAISES:
      return mapperNoRefRestoPaises(data, json)
    case ReportTypes.BUREAU_MEJICO:
      return mapperBureauMexico(data, json)
    case ReportTypes.PERU_EQUIFAX:
      return mapperPeruEquifax(data, json)
    case ReportTypes.Standard:
    default:
      return mapperEudbpPT(data, json)
  }
}
