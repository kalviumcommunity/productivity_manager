import { applyMiddleware,  createstore as legacy_createStore} from 'redux'
import logger from 'redux-logger'
import { Reducer } from './Reducer/Reducer';
let Store = createstore( Reducer ,applyMiddleware(logger) );

export default Store;