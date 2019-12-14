import { GET_ITINERARY } from '../actions/types';

var initialState = {
    data:[]
};
const itineraryReducer= (state = initialState, action) => {
    console.log("action.payload de ITINERARY")
console.log(action.payload)
    switch (action.type) {
        case GET_ITINERARY:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default itineraryReducer;