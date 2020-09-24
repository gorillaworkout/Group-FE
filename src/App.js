import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import DetailProd from './pages/detailProduct/detailProd'
import Particles from 'react-particles-js'
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


function App() {
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

export default App;
