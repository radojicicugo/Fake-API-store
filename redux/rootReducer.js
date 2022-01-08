import {combineReducers} from 'redux';
import shoopReducer from './shooping/shoopReducer';


const rootReducer = combineReducers({
    shop: shoopReducer,
});


export default rootReducer;