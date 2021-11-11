import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { monitorReducerEnhancer } from './enhancer/monitor-reducer.js'
import { logger } from './middleware/logger.js'

import BoeForm from '../features/MetaBoeForm/ducks'
import ReportReferences from '../features/MetaReportReferences/ducks'
import CopyFileProcess from '../features/MetaCopyFileProcess/ducks'
import ConsultReports from '../features/MetaConsultReports/ducks'
import FilesTableFTP from '../features/MetaFilesTableFTP/ducks'
import RequestList from '../features/MetaRequestList/ducks'
import MasiveGestion from '../features/MetaMasiveGestion/ducks'
import CreateReports from '../features/MetaCreateReports/ducks'
import BaseReport from '../features/MetaBaseReport/ducks'
import { composeWithDevTools } from 'redux-devtools-extension'

/* Importar el reducer de la feature
  por ejemplo
  import counter from '../features/counter/ducks'
*/

const store = createStore(
  combineReducers(
    Object.assign(
      {},
      // reducers
      BoeForm,
      ReportReferences,
      CopyFileProcess,
      ConsultReports,
      FilesTableFTP,
      RequestList,
      MasiveGestion,
      CreateReports,
      BaseReport,
      // enhancers
      monitorReducerEnhancer
    )
  ),
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
)

export { store }
