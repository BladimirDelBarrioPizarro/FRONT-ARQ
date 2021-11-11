import * as Faker from 'faker'

const dataIdentityVerificationEmpty = {
  nombre: '',
  identificacion: '',
  numeroduns: '',
  calle: '',
  localidad: '',
  codigopostal: '',
  provincia: '',
  profesion: '',
  actividadeconomica: '',
  domicilioCompleto1: '',
  domicilioCompleto2: '',
  domicilioCompleto3: '',
  domicilioCompleto4: '',
  fechaconstitucion: '',
  fechanacimiento: '',
  edad: '',
  formajuridica: '',
  codigoactividadprincipal: '',
  actividadprincipal: '',
  codigoactividadsecundaria: '',
  actividadsecundaria: '',
  empleadosverificados: '',
  sinactividad: '',
  concursopresentado: '',
  iva: '',
  ganaciassociedades: '',
  ganaciaspersonasfisicas: ''
}

const dataIdentityVerificationFaker = {
  nombre: Faker.random.words(),
  identificacion: Faker.random.words(),
  numeroduns: Faker.random.words(),
  calle: Faker.random.words(),
  localidad: Faker.random.words(),
  codigopostal: Faker.random.words(),
  provincia: Faker.random.words(),
  profesion: Faker.random.words(),
  actividadeconomica: Faker.random.words(),
  domicilioCompleto1: Faker.random.words(),
  domicilioCompleto2: Faker.random.words(),
  domicilioCompleto3: Faker.random.words(),
  domicilioCompleto4: Faker.random.words(),
  fechaconstitucion: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechanacimiento: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  edad: Faker.random.words(),
  formajuridica: Faker.random.words(),
  codigoactividadprincipal: Faker.random.words(),
  actividadprincipal: Faker.random.words(),
  codigoactividadsecundaria: Faker.random.words(),
  actividadsecundaria: Faker.random.words(),
  empleadosverificados: Faker.random.words(),
  sinactividad: Faker.random.words(),
  concursopresentado: Faker.random.words(),
  iva: Faker.random.words(),
  ganaciassociedades: Faker.random.words(),
  ganaciaspersonasfisicas: Faker.random.words()
}

export {
  dataIdentityVerificationEmpty,
  dataIdentityVerificationFaker
}
