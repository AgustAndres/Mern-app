import { GET_ITEMS } from '../actions/types';

var initialState = {
    data:[]
};
const itemReducer= (state = initialState, action) => {
    console.log("action.payload de ITEM")
console.log(action.payload)
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default itemReducer;