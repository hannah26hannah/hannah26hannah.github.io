import { combineReducers } from 'redux';
import resizeReducer from './resize';
import isLoggedReducer from './isLogged'
import channelReducer from './channel';

const rootReducer = combineReducers({
    resize : resizeReducer,
    isLogged : isLoggedReducer,
    channel : channelReducer
})

export default rootReducer;