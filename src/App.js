import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'


function App() {
  return (
    <>
    <Switch>
      {/* <Header/> */}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/register' component={Register}></Route>
      
    </Switch>
     
    
    </>
  );
}

export default App;
