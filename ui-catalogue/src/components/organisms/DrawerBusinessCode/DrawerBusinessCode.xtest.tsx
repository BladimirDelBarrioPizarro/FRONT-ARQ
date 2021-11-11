// import React from 'react'
// import { render, fireEvent, screen } from '@testing-library/react'
// import { Simulate } from 'react-dom/test-utils'
// import { DrawerBusinessCode } from './DrawerBusinessCode'

// const countries = [
//   {
//     value: 'ES',
//     result: 'España'
//   },
//   {
//     value: 'PO',
//     result: 'Portugal'
//   },
//   {
//     value: 'FR',
//     result: 'Francia'
//   }
// ]

// const businessCodeMock = [
//   { 'cod-empresa': '444122312', 'cod-pais': 'ESP', 'cif-empresa': '12345678C' },
//   { 'cod-empresa': '221213213', 'cod-pais': 'ESP', 'cif-empresa': '45512321D' },
//   { 'cod-empresa': '123123141', 'cod-pais': 'ESP', 'cif-empresa': '12412412E' },
//   { 'cod-empresa': '654645612', 'cod-pais': 'ESP', 'cif-empresa': '12315555K' },
//   { 'cod-empresa': '789785653', 'cod-pais': 'ESP', 'cif-empresa': '12312412F' },
//   { 'cod-empresa': '665242345', 'cod-pais': 'ESP', 'cif-empresa': '12312312G' },
//   { 'cod-empresa': '112331414', 'cod-pais': 'FRA', 'cif-empresa': '11241244H' },
//   { 'cod-empresa': '123141244', 'cod-pais': 'FRA', 'cif-empresa': '41241224E' },
//   { 'cod-empresa': '444122314', 'cod-pais': 'FRA', 'cif-empresa': '12412412I' },
//   { 'cod-empresa': '116712442', 'cod-pais': 'FRA', 'cif-empresa': '13874182K' },
//   { 'cod-empresa': '551223155', 'cod-pais': 'FRA', 'cif-empresa': '12418989Q' },
//   { 'cod-empresa': '551231223', 'cod-pais': 'FRA', 'cif-empresa': '21093102I' },
//   { 'cod-empresa': '551279933', 'cod-pais': 'FRA', 'cif-empresa': '23910293V' },
//   { 'cod-empresa': '887566344', 'cod-pais': 'FRA', 'cif-empresa': '23912893K' },
//   { 'cod-empresa': '887634533', 'cod-pais': 'FRA', 'cif-empresa': '12312124G' },
//   { 'cod-empresa': '774234234', 'cod-pais': 'POR', 'cif-empresa': '10231884C' },
//   { 'cod-empresa': '647426234', 'cod-pais': 'POR', 'cif-empresa': '12731263C' },
//   { 'cod-empresa': '645624234', 'cod-pais': 'POR', 'cif-empresa': '48172874C' }
// ]

// const i18n = {
//   field1: 'País',
//   field2: 'Nombre',
//   field3: 'CIF',
//   pModal1: 'Permite la búsqueda de una empresa de un país determinado. Se puede buscar por país ynombre de la empresa, país y cif de la empresa y país, nombre y cif de la empresa',
//   pModal2: 'Introducir los criterios de búsqueda y pulsar el botón buscar.',
//   bModal: 'Buscar:',
//   pModal3: 'Introducir los criterios de búsqueda y pulsar el botón buscar.',
//   titleModal: 'Descripción general',
//   inputLabel: 'País',
//   selectCountry: 'Selecciona País',
//   countries: countries,
//   buttonHelp: 'Ayuda',
//   buttonSearch: 'Buscar',
//   bussinessMock: businessCodeMock
// }

// test('Test de renderizado', () => {
//   const wrapper = render(
//     <DrawerBusinessCode i18n={i18n}
//     />
//   )
//   expect(wrapper).not.toBe(null)
// })

// test('Test de funciones', () => {
//   const wrapper = render(
//     <DrawerBusinessCode i18n={i18n}
//     />
//   )
//   expect(wrapper).not.toBe(null)

//   const codCompany = screen.getByTestId('cod-empresa-pais').querySelector('input')
//   fireEvent.change(codCompany, { target: { value: '' } })
//   expect(codCompany.value).toBe('')
//   Simulate.change(codCompany)

//   const buttonHelp = screen.getByTestId('cod-empresa-nombre')
//   Simulate.click(buttonHelp)

//   expect(() => render(
//     <DrawerBusinessCode i18n={i18n}/>)).not.toThrow()
// })
export {}
