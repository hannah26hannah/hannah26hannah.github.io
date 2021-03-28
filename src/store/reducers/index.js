import { combineReducers } from 'redux';
import resizeReducer from './resize';
import channelReducer from './channel';

const rootReducer = combineReducers({
    resize: resizeReducer,
    channel: channelReducer
})

export default rootReducer;