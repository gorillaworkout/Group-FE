import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
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
      <Route exact path='/' component={Home}>
        {/* <Particles className='particles' params={particleOptions}/> */}
      </Route>
        <Route exact path='/login' component={Login}>
      {/* <Particles className='particles' params={particleOptions}/> */}
      </Route>
      <Route exact path='/register' component={Register}>
        {/* <Particles className='particles' params={particleOptions}/> */}
      </Route>
      
    </Switch>
     
    
    </>
  );
}

export default App;
