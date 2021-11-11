import * as Faker from 'faker'

const selectElementRow = (): any => ({
  value: Faker.random.number(9),
  label: Faker.random.words(3)
})

const origenBalancesRows = (): any => [
  {
    lang: 'ES',
    value: '1',
    label: 'Información ilegible'
  },
  {
    lang: 'ES',
    value: '2',
    label: 'No cumple filtros'
  },
  {
    lang: 'ES',
    value: '3',
    label: 'Peticiíon duplicada'
  },
  {
    lang: 'ES',
    value: '4',
    label: 'Datos en INFORMA'
  },
  {
    lang: 'ES',
    value: '5',
    label: 'Información no válida'
  }
]

const cancelTypeRows = (): any => [
  {
    lang: 'ES',
    value: '1',
    label: 'Información ilegible'
  },
  {
    lang: 'ES',
    value: '2',
    label: 'No cumple filtros'
  },
  {
    lang: 'ES',
    value: '3',
    label: 'Peticiíon duplicada'
  },
  {
    lang: 'ES',
    value: '4',
    label: 'Datos en INFORMA'
  },
  {
    lang: 'ES',
    value: '5',
    label: 'Información no válida'
  }
]

const formsJuridicRows = (): any => [
  {
    lang: 'ES',
    value: 'SOCIEDAD ANONIMA',
    label: 'SOCIEDAD ANONIMA'
  },
  {
    lang: 'ES',
    value: 'SOCIEDAD LIMITADA',
    label: 'SOCIEDAD LIMITADA'
  },
  {
    lang: 'ES',
    value: 'SOCIEDAD REGULAR COLECTIVA',
    label: 'SOCIEDAD REGULAR COLECTIVA'
  },
  {
    lang: 'ES',
    value: 'SOCIEDAD COMANDITARIA',
    label: 'SOCIEDAD COMANDITARIA'
  },
  {
    lang: 'ES',
    value: 'COMUNIDAD DE BIENES',
    label: 'COMUNIDAD DE BIENES'
  },
  {
    lang: 'ES',
    value: 'COOPERATIVA',
    label: 'COOPERATIVA'
  },
  {
    lang: 'ES',
    value: 'ASOCIACION Y NO DEFINIDAS',
    label: 'ASOCIACION Y NO DEFINIDAS'
  },
  {
    lang: 'ES',
    value: 'COMUNIDAD DE PROPIETARIOS',
    label: 'COMUNIDAD DE PROPIETARIOS'
  },
  {
    lang: 'ES',
    value: 'AUTONOMO MENOR DE EDAD',
    label: 'AUTONOMO MENOR DE EDAD'
  },
  {
    lang: 'ES',
    value: 'AUTONOMO RESIDENCIA EN EL EXTRANJERO',
    label: 'AUTONOMO RESIDENCIA EN EL EXTRANJERO'
  },
  {
    lang: 'ES',
    value: 'CORPORACION LOCAL',
    label: 'CORPORACION LOCAL'
  },
  {
    lang: 'ES',
    value: 'CONG. RELIGIOSA',
    label: 'CONG. RELIGIOSA,ORG. AUTONOMO , ASIMILADO'
  },
  {
    lang: 'ES',
    value: 'ORGANISMO DE LA ADMINISTRACION',
    label: 'ORGANISMO DE LA ADMINISTRACION'
  },
  {
    lang: 'ES',
    value: 'AUTONOMO EXTRANJERO',
    label: 'AUTONOMO EXTRANJERO'
  },
  {
    lang: 'ES',
    value: 'AUTONOMO EXTRANJERO 2',
    label: 'AUTONOMO EXTRANJERO 2'
  },
  {
    lang: 'ES',
    value: 'SOCIEDAD DERECHO EXTRANJERO',
    label: 'SOCIEDAD DERECHO EXTRANJERO'
  },
  {
    lang: 'ES',
    value: 'AUTONOMO EXTRANJERO',
    label: 'AUTONOMO EXTRANJERO'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL 1',
    label: 'EMPRESARIO INDIVIDUAL 1'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL',
    label: 'EMPRESARIO INDIVIDUAL 2'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL 3',
    label: 'EMPRESARIO INDIVIDUAL 3'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL 4',
    label: 'EMPRESARIO INDIVIDUAL 4'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL 5',
    label: 'EMPRESARIO INDIVIDUAL 5'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL 6',
    label: 'EMPRESARIO INDIVIDUAL 6'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL 7',
    label: 'EMPRESARIO INDIVIDUAL 7'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL 8',
    label: 'EMPRESARIO INDIVIDUAL 8'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL 9',
    label: 'EMPRESARIO INDIVIDUAL 9'
  },
  {
    lang: 'ES',
    value: 'EMPRESARIO INDIVIDUAL 10',
    label: 'EMPRESARIO INDIVIDUAL 10'
  }
]

const referencesBankRows = (): any => [
  {
    lang: 'ES',
    value: 'BUENA',
    label: 'BUENA'
  },
  {
    lang: 'ES',
    value: 'NORMAL',
    label: 'NORMAL'
  },
  {
    lang: 'ES',
    value: 'MALA',
    label: 'MALA'
  }
]

const commentsFactoryRows = (): any => [
  {
    lang: 'ES',
    value: 'BUENA',
    label: 'BUENA'
  },
  {
    lang: 'ES',
    value: 'NORMAL',
    label: 'NORMAL'
  },
  {
    lang: 'ES',
    value: 'MALA',
    label: 'MALA'
  }
]

export {
  selectElementRow,
  origenBalancesRows,
  cancelTypeRows,
  formsJuridicRows,
  referencesBankRows,
  commentsFactoryRows
}
