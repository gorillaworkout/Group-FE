import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Loading from './components/Loading'
import {LoginFunc} from './redux/Actions'
import Register from './pages/register/register'
import DetailProd from './pages/detailProduct/detailProd'
import Particles from 'react-particles-js'
import {connect} from 'react-redux'
import Axios from 'axios';
import { API_URL } from './helpers/apiUrl';
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
      Axios.get(`${API_URL}/users/${id}`)
      .then((res)=>{
        props.LoginFunc(res.data) // untuk keep login
      }).catch((err)=>{
        console.log(err)
      }).finally(()=>{
        setLoading(false)
      })
    }else{
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
 
      <Route exact path='/register' component={Register}/>
      <Route exact path='/detailproduct/:id' component={DetailProd}></Route>
      
    </Switch>
     
    
    </>
  );
}

const Mapstatetoprops=({Auth})=>{
  return {
      ...Auth
  }
}

export default connect(Mapstatetoprops,{LoginFunc}) (App);
