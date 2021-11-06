import axios from 'axios';

export const login = (username,password) => async(dispatch) =>{
    try{
        dispatch({type:"USER_LOGIN_REQUEST"})

        const headers={
            headers:{
                "Content-type":"application/json"
            }
        }
        const data={
            'username':username,
            'password':password,
        }
        const {userData} = await axios.post('/api/users/login/', headers.headers,data)

        dispatch({
            type:"USER_LOGIN_SUCCESS",
            payload:userData,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch (e){
        console.log(e);
        dispatch({
            type:"PRODUCT_LIST_FAILED",
            error: e.response,
        })
    }
}