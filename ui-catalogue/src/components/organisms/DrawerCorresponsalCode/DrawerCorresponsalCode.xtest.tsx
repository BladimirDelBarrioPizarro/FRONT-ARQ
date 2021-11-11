// import React from 'react'
// import { render, fireEvent, screen } from '@testing-library/react'
// import { Simulate } from 'react-dom/test-utils'

// import { DrawerCorresponsalCode } from './DrawerCorresponsalCode'

// const countries = [
//   {
//     value: 'ES',
//     result: 'España'
//   },
//   {
//     value: 'PO',
//     result: 'PORTUGAL'
//   },
//   {
//     value: 'FR',
//     result: 'Francia'
//   }
// ]

// const i18n = {
//   inputLabelTitle: 'Pais',
//   modalTitle: 'Descripción general',
//   modalp: 'Permite la búsqueda de una empresa de un país determinado. Se puede buscar por país y nombre de la empresa, país y cif de la empresa y país, nombre y cif de la empresa',
//   modalb: 'Buscar:',
//   modalp2: 'Introducir los criterios de búsqueda y pulsar el botón buscar.',
//   fieldlabel1: 'País',
//   selectCountry: 'Selecciona País',
//   buttonHelp: 'Ayuda',
//   buttonSearch: 'Buscar',
//   countries: countries
// }

// test('Render test', () => {
//   const wrapper = render(
//     <DrawerCorresponsalCode i18n={i18n}
//     />
//   )
//   expect(wrapper).not.toBe(null)
// })

// test('Event testing', () => {
//   const wrapper = render(
//     <DrawerCorresponsalCode i18n={i18n}
//     />
//   )
//   expect(wrapper).not.toBe(null)

//   const codCountry = screen.getByTestId('cod-corr-pais-label').querySelector('input')
//   fireEvent.change(codCountry, { target: { value: '' } })
//   expect(codCountry.value).toBe('')
//   Simulate.change(codCountry)

//   const buttonHelp = screen.getByTestId('buttonHelp')
//   Simulate.click(buttonHelp)
//   const buttonSearch = screen.getByTestId('buttonSearch')
//   Simulate.click(buttonSearch)

//   expect(() => render(
//     <DrawerCorresponsalCode i18n={i18n}/>)).not.toThrow()
// })

export {}
