/* istanbul ignore file */
import { init } from './init'
import { configure } from './store-plugin-localstorage'
import { changeLanguage } from './change-language'

export {
  changeLanguage,
  configure as pluginLocalStorage
}
export default init
