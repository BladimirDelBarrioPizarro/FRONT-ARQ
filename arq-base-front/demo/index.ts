/* eslint-disable no-console */
import { createButton } from './utils'

import facadeTest from './facade-test'
import mediadorTest from './mediator-test'
import configTest from './config-test'
import i18nTest from './i18n-test'
import traceabilityTest from './traceability-test'
import communicationsTest from './communications-test'
import auth from './auth-test'

console.log('Este espacio lo podemos usar para probar la librería/modulo')
console.info(
  [
    'Existe un servidor de mocks disponible para desarrollo en',
    'http://localhost:9000/api/'
  ].join('\n')
)

createButton('Fachada - pruebas', facadeTest)
createButton('Mediador - pruebas', mediadorTest)
createButton('Configuración - pruebas', configTest)
createButton('Comunicaciones - pruebas', communicationsTest)
createButton('Literales - pruebas', i18nTest)
createButton('Trazabilidad - pruebas', traceabilityTest)
createButton('Auth - pruebas', auth)
/* eslint-enable no-console */
