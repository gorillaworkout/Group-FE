import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Loading from './components/Loading'
import {LoginFunc, AddcartAction} from './redux/Actions'
import Register from './pages/register/register'
import DetailProd from './pages/detailProduct/detailProd'
import MyAccount from './pages/user/MyAccount'
import Payment from './pages/Payment/Payment'
import Cart from './pages/cart/cart'
import Particles from 'react-particles-js'
import {connect} from 'react-redux'
import Axios from 'axios';
import { API_URL, API_URL_SQL } from './helpers/apiUrl';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 

toast.configure()
const particleOptions = {
  particles:{
    number:{
      value:90,
      density:{
        enable:true,
        value_area:700
      }
    }
  }
}


function App(props) {
  const [loading, setLoading] = useState(true)
  useEffect (()=>{
    var id = localStorage.getItem('id')
    if (id){
      Axios.get(`${API_URL_SQL}/auth/keepLogin/${id}`)
      .then((res)=>{
        console.log(res.data)
        console.log(res.data.cart)
        props.LoginFunc(res.data.datalogin) // untuk keep login
        props.AddcartAction(res.data.cart)
      }).catch((err)=>{
        console.log(err)
      }).finally(()=>{
        setLoading(false)
      })
    }else{
      console.log('masuk else')
      setLoading(false)
    }
  },[])

  if(loading){
    return (
      <div><Loading/></div>
    )
  }
  return (
    <>
    <Switch>
      {/* <Header/> */}
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/admin' component={Admin}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/detailproduct/:id' component={DetailProd}/>
      <Route exact path='/myaccount' component={MyAccount}/>
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/payment' component={Payment}></Route>
      
    </Switch>
     
    
    </>
  );
}

const Mapstatetoprops=({Auth})=>{
  return {
      ...Auth
  }
}

export default connect(Mapstatetoprops,{LoginFunc, AddcartAction}) (App);
