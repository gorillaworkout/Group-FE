import Axios from 'axios'
import {API_URL} from './../../helpers/apiUrl'
import {toast} from 'react-toastify'  

export const LoginFunc = (obj) => {
    return {
        type: 'LOGIN',
        payload: obj
    }
}

export const toDetail = (jenis, index)=>{
    return (dispatch) =>{
       console.log(jenis,index)
       dispatch({type:'LOADING'})
       Axios.get(`${API_URL}/${jenis}?id=${index}`)
       .then((res)=>{
           dispatch({type:'ADDPRODUCT',payload:res.data,json:{jenis,index}})
        console.log(res.data)
       }).catch((err)=>{
           console.log(err)
       })

    }
}


export const LoginThunk = (username, password)=>{
    return (dispatch) =>{
        dispatch({type:'LOADING'})
        Axios.get(`${API_URL}/users`,{
            params:{
                username:username,
                password:password
            }
        }).then((res)=>{
            if(res.data.length){
                Axios.get(`${API_URL}/carts`,{
                    params:{
                        userId:res.data[0].id,
                        _expand:'product'
                    }
                }).then((res1)=>{
                    Axios.get(`${API_URL}/users?username=${username}&password=${password}`)
                    .then((res2)=>{
                        if(res2.length){
                            toast.info(`Username / password Sudah ada `, {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }else {
                            localStorage.setItem('id',res.data[0].id)
                            toast.info(`Selamat Datang ${username}`, {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                draggable: true,
                                progress: undefined,
                            });
                            dispatch({type:'CART',payload:res.data[0]})
                            dispatch({type:'LOGIN',payload:res.data[0],cart:res1.data})
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                }).catch((err)=>{
                    dispatch({type:'Error',payload:'error server'})
                })
            }else {
                dispatch({type:'Error',payload:'error dari Redux'})
                toast.error(`Username / password Anda Salah`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }).catch((err)=>{
            dispatch({type:'Error',
            payload:'server error cuk'})
        })
    }
}