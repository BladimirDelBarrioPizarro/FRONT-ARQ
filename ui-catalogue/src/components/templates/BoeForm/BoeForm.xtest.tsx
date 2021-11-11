/* import React from 'react'
import { render, screen } from '@testing-library/react'
import { BoeForm } from './BoeForm'
import { Simulate } from 'react-dom/test-utils'

const i18nTextField = {
  label: 'Subir archivo',
  textValue: 'Sin archivos'
}

const textField = {
  name: 'Subir Archivos',
  id: 'id',
  fileRef: null,
  inputRef: null,
  i18n: i18nTextField
}

const countries = [
  {
    value: 'ES',
    result: 'España'
  },
  {
    value: 'PO',
    result: 'Portugal'
  },
  {
    value: 'FR',
    result: 'Francia'
  }
]

const businessCodeMock = [
  { 'cod-empresa': '444122312', 'cod-pais': 'ESP', 'cif-empresa': '12345678C' },
  { 'cod-empresa': '221213213', 'cod-pais': 'ESP', 'cif-empresa': '45512321D' },
  { 'cod-empresa': '123123141', 'cod-pais': 'ESP', 'cif-empresa': '12412412E' },
  { 'cod-empresa': '654645612', 'cod-pais': 'ESP', 'cif-empresa': '12315555K' },
  { 'cod-empresa': '789785653', 'cod-pais': 'ESP', 'cif-empresa': '12312412F' },
  { 'cod-empresa': '665242345', 'cod-pais': 'ESP', 'cif-empresa': '12312312G' },
  { 'cod-empresa': '112331414', 'cod-pais': 'FRA', 'cif-empresa': '11241244H' },
  { 'cod-empresa': '123141244', 'cod-pais': 'FRA', 'cif-empresa': '41241224E' },
  { 'cod-empresa': '444122314', 'cod-pais': 'FRA', 'cif-empresa': '12412412I' },
  { 'cod-empresa': '116712442', 'cod-pais': 'FRA', 'cif-empresa': '13874182K' },
  { 'cod-empresa': '551223155', 'cod-pais': 'FRA', 'cif-empresa': '12418989Q' },
  { 'cod-empresa': '551231223', 'cod-pais': 'FRA', 'cif-empresa': '21093102I' },
  { 'cod-empresa': '551279933', 'cod-pais': 'FRA', 'cif-empresa': '23910293V' },
  { 'cod-empresa': '887566344', 'cod-pais': 'FRA', 'cif-empresa': '23912893K' },
  { 'cod-empresa': '887634533', 'cod-pais': 'FRA', 'cif-empresa': '1231812124G' },
  { 'cod-empresa': '774234234', 'cod-pais': 'POR', 'cif-empresa': '10231884C' },
  { 'cod-empresa': '647426234', 'cod-pais': 'POR', 'cif-empresa': '12731263C' },
  { 'cod-empresa': '645624234', 'cod-pais': 'POR', 'cif-empresa': '48172874C' }
]

const i18nBusiness = {
  field1: 'País',
  field2: 'Nombre',
  field3: 'CIF',
  pModal1: 'Permite la búsqueda de una empresa de un país determinado. Se puede buscar por país ynombre de la empresa, país y cif de la empresa y país, nombre y cif de la empresa',
  pModal2: 'Introducir los criterios de búsqueda y pulsar el botón buscar.',
  bModal: 'Buscar:',
  pModal3: 'Introducir los criterios de búsqueda y pulsar el botón buscar.',
  titleModal: 'Descripción general',
  inputLabel: 'País',
  selectCountry: 'Selecciona País',
  countries: countries,
  buttonHelp: 'Ayuda',
  buttonSearch: 'Buscar',
  bussinessMock: businessCodeMock
}

const i18nCorresponsal = {
  modalTitle: 'Descripción general',
  modalp: 'Permite la búsqueda de una empresa de un país determinado. Se puede buscar por país y nombre de la empresa, país y cif de la empresa y país, nombre y cif de la empresa',
  modalb: 'Buscar:',
  modalp2: 'Introducir los criterios de búsqueda y pulsar el botón buscar.',
  fieldlabel1: 'País',
  selectCountry: 'Selecciona País',
  buttonHelp: 'Ayuda',
  buttonSearch: 'Buscar',
  countries: countries

}

const menuValues1 = [
  { value: '1', result: '4IP - 94 IMPUESTO SOCIEDADES' },
  { value: '2', result: '91E - INFORMACION SUP. A 3 AÑOS' },
  { value: '3', result: '93B - 93 BALANCE' },
  { value: '4', result: '94D - 94DICTAMEN AUDITORIA' },
  { value: '5', result: '96M - 96 MEMORIA GENERAL' }
]

const menuValues2 = [
  { value: '1', result: '1 - INFORME O-L INSTANTANEO' },
  { value: '2', result: '2 - NO SELECCION ON-LINE' },
  { value: '3', result: '3 - INFORME PRELIMINAR ON-LINE' },
  { value: '4', result: '4 - ENCARGO INFORME O-L URGENTE' },
  { value: '5', result: '5 - INFORME URGENTE' }
]

const menuValues3 = [
  { value: '1', result: '1 - GAST.TELEX' },
  { value: '2', result: '2 - GAST.TELEX' },
  { value: '3', result: '3 - GEIS' },
  { value: '4', result: '4 - LEGITIMAC' },
  { value: '5', result: '5 - INTERVENC' }
]

const i18n = {
  modalp1: 'Permite al departamento de alta informes de medio y largo plazo dar de alta un informe que ya está creado, al repositorio de informes. Este archivo que contiene el informe puede estar en el disco duro local o cualquier unidad de red conectada. Aeste informe se le puede asginar un código de empresa y tipo de documento.',
  modalb: 'Código de empresa',
  modalp2: 'Introducir el código del país y el código de la empresa en las casillas correspondientes. También se puede buscar una empresa mediante la opción búsqueda de empresas que se encuentra a la derecha de dichas casillas',
  modalb2: 'Tipo de documento',
  modalp3: 'Hay que introducir el código seleccionandolo de la lista que se despliega',
  modalb3: 'Nombre del documento',
  modalp4: 'Introducir el fichero usando el botón a la derecha de la casilla correspondiente',
  error1: 'Requerido',
  error2: 'Máximo 10 caracteres',
  label1: 'Código empresa',
  cardTitle: 'Alta informes',
  inputTitle: 'Tipo de documento',
  label2: 'Tipo de documento',
  label3: 'Nombre del documento',
  label4: 'Número de petición',
  label5: 'Código corresponsal',
  label6: 'Código producto',
  label7: 'Tipo de gasto',
  label8: 'Fecha de recepción informe',
  inputLabelTitle: 'Código producto',
  inputLabelTitle2: 'Tipo de gasto',
  menuTitle: 'Selecciona Tipo',
  menuValues: menuValues1,
  menuValues2: menuValues2,
  menuValues3: menuValues3,
  buttonClean: 'Limpiar',
  buttonHelp: 'Ayuda',
  buttonSend: 'Enviar'
}

test('Render test', () => {
  expect(() => render(
    <BoeForm i18nTextField={textField} i18n={i18n} i18nDrawerBusiness={i18nBusiness} i18nDrawerCorresponsal={i18nCorresponsal}/>)).not.toThrow()
})

test('Events test', () => {
  const wrapper = render(
    <BoeForm i18nTextField={textField} i18n={i18n} i18nDrawerBusiness={i18nBusiness} i18nDrawerCorresponsal={i18nCorresponsal}/>
  )
  expect(wrapper).not.toBe(null)
  const buttonOpen = screen.getByTestId('buttonOpen')
  Simulate.click(buttonOpen)
})
 */
export {}
