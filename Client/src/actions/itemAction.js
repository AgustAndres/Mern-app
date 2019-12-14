import { GET_ITEMS} from './types';

export const SetItemsFetch = ()=>async (dispatch) =>{
console.log('get items');

    // const data = await fetch('http://localhost:5000/Cities/all')
    await fetch('http://localhost:5000/Cities/all')
    .then((resp)=>{ return resp.json()})
    .then((datas)=>{console.log(datas)
        dispatch({
            type: GET_ITEMS,
            payload: datas
        });
    })
    .catch(err=>console.log(err))
};
