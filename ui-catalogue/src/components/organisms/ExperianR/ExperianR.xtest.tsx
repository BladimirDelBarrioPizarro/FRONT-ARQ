// import { fireEvent, render, screen } from '@testing-library/react'
// import React from 'react'
// import { Simulate } from 'react-dom/test-utils'

// import { ExperianR } from './ExperianR'

// const reports = [
//   {
//     code: 1231432423,
//     denomination: 'INFORMATICA EL CORTE INGLES',
//     nif: 'u866HJG',
//     agency: '123/EXPERIAN',
//     date: '30/07/2018',
//     type: 'Informe'
//   },
//   {
//     code: 1231432423,
//     denomination: 'INFORMATICA EL CORTE INGLES',
//     nif: 'u866HJG',
//     agency: '123/EXPERIAN',
//     date: '30/07/2018',
//     type: 'Informe'
//   },
//   {
//     code: 1231432423,
//     denomination: 'INFORMATICA EL CORTE INGLES',
//     nif: 'u866HJG',
//     agency: '123/EXPERIAN',
//     date: '30/07/2018',
//     type: 'Informe'
//   },
//   {
//     code: 1231432423,
//     denomination: 'INFORMATICA EL CORTE INGLES',
//     nif: 'u866HJG',
//     agency: '123/EXPERIAN',
//     date: '30/07/2018',
//     type: 'Informe'
//   }
// ]
// const i18n = {
//   label1: 'Experian+R',
//   label2: 'Badexcug',
//   label3: 'NIF',
//   button1: 'Buscar últimos',
//   button2: 'Buscar todos',
//   button3: 'Limpiar',
//   button4: 'Ayuda',
//   modalh2: 'Transition modal',
//   modalp: 'react-transition-group animates me.'
// }
// const handleSearchLastExperian = jest.fn()
// const handleSearchAllExperian = jest.fn()
// const deleteSearchReports = jest.fn()
// const handleRowClickData = jest.fn()

// test('Render test', () => {
//   const wrapper = render(
//     <ExperianR
//       i18n={i18n}
//       reports={reports}
//       handleSearchLastExperian={handleSearchLastExperian}
//       handleSearchAllExperian={handleSearchAllExperian}
//       deleteSearchReports={deleteSearchReports}
//       handleRowClickData={handleRowClickData}/>)
//   expect(wrapper).not.toBe(null)
// }
// )

// test('Event test', () => {
//   render(
//     <ExperianR i18n={i18n}
//       reports={reports}
//       handleSearchLastExperian={handleSearchLastExperian}
//       handleSearchAllExperian={handleSearchAllExperian}
//       deleteSearchReports={deleteSearchReports}
//       handleRowClickData={handleRowClickData}/>
//   )
//   fireEvent.click(screen.getByLabelText('Badexcug'))
//   fireEvent.click(screen.getByTestId('nif'))
//   fireEvent.click(screen.getByTestId('help'))

//   const input1 = screen.getByTestId('nif').querySelector('input')
//   fireEvent.change(input1, { target: { value: '23' } })
//   expect(input1.value).toBe('23')
//   fireEvent.click(input1)
//   fireEvent.click(screen.getByTestId('lastSearch'))
//   const lastSearchButton = screen.getByTestId('lastSearch')
//   const allSearchButton = screen.getByTestId('allSearch')
//   const cleanButton = screen.getByTestId('clean')
//   Simulate.submit(lastSearchButton)
//   Simulate.submit(allSearchButton)
//   Simulate.submit(cleanButton)
// }
// )
export {}
