

import {combineReducers} from 'redux';
import movies from './movies_rducer';
import carsReducer from './carsReducer';


const rootReducer = combineReducers({
    movies,
    carsReducer

});
export default rootReducer;