import axios from 'axios';

//dispatch is calling reducer

export const listProducts = () => async(dispatch) => {
    try{
        //first call request reducer
        dispatch({type:"PRODUCT_LIST_REQUEST"})

        const {data} = await axios.get('/api/products/')
        
        //request reducer call passed, pass data to reducer to make changes to poducts state
        dispatch({
            type:"PRODUCT_LIST_SUCCESS",
            payload: data,
        })
    }catch (e){
        console.log(e);
        dispatch({
            type:"PRODUCT_LIST_FAILED",
            error: e.response,
        })
    }
}