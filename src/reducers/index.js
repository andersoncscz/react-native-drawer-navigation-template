import { combineReducers } from 'redux';
import anyReducer from './anyReducer';


const rootReducer = combineReducers({
    someReducer: anyReducer
});

export default rootReducer;