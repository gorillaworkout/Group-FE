import Axios from 'axios'
import {API_URL} from './../../helpers/apiUrl'

export const LoginFunc = (obj) => {
    return {
        type: 'LOGIN',
        payload: obj
    }
}

export const LoginThunk = (username, password)=>{
    return (dispatch) =>{
        Axios.get((`${API_URL}/users?username=${username}&password=${password}`))
        .then((res)=>{
            console.log(res.data)
            if(res.data.length){
                alert('sukses login')
                localStorage.setItem('id', res.data[0].id)
                dispatch({type: 'LOGIN', payload:res.data[0]})
            }else{
                alert('username/password salah')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
}