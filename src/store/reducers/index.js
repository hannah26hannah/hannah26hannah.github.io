import { combineReducers } from 'redux';
import resizeReducer from './resize';
import isLoggedReducer from './isLogged'

const rootReducer = combineReducers({
    resize : resizeReducer,
    isLogged : isLoggedReducer
})

export default rootReducer;