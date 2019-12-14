import { GET_ITINERARY} from './types';

export const SetItemsFetchIt = (nameCity)=>(dispatch) =>{
    fetch('http://localhost:5000/Itinerarys/'+nameCity)
    .then((resp)=>{ return resp.json()})
    .then((data)=>{ 
        dispatch({
            type: GET_ITINERARY,
            payload: data
        });
    })
    .catch(err=>console.log(err))
};
