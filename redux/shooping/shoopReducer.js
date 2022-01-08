import * as actionTypes from './Types';


const INITIAL_STATE = {
    products: [],

}

const shoopReducer = (state = INITIAL_STATE, { type, payload }) => {
     switch (type){
        case actionTypes.SET_PRODUCTS:
            return {...state,
                    products: payload};
           default:
               return state;
     }
};

export default shoopReducer;