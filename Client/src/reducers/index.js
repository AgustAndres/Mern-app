import {combineReducers} from 'redux';
import itemReducer from './itemReducer'
import itineraryReducer from './itineraryReducer'
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';

export default combineReducers ({
    reducerCity: itemReducer,
    reducerItinerary: itineraryReducer,
    registerReducer,
    loginReducer
})