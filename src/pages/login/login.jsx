import React, { Component, createRef } from 'react';
import './login.css'
import Foto from './../../assets/bg-login.jpg'
import {API_URL} from './../../helpers/apiUrl'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {BsPhone} from 'react-icons/bs'
import Axios from 'axios'
import { Alert } from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom'
import {LoginFunc} from './../../redux/Actions/'

const Styles={
    root:{
        '& label.Mui-focused': {
            color: 'black',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
              border:'3px solid '
            },
          },
    }
}

class Login extends Component {
    state = { 
        username: createRef(),
        password: createRef(),
        email: createRef(),
        alert: ''

    }

    onLoginClick=()=>{
        var {username, password} = this.state
        var username = username.current.value
        var password = password.current.value
        console.log(username, password)
        Axios.get((`${API_URL}/users?username=${username}&password=${password}`))
        .then((res)=>{
            console.log(res.data)
            if(res.data.length){
                this.props.LoginFunc(res.data[0])
            }else{
                alert('username/password salah')
            }
        }).catch((err)=>{
            console.log(err)
        })

    }

    render() { 
        const {classes} = this.props;
        console.log(this.props.Auth)
        // if(this.props.Auth.isLogin){
        //     return <Redirect to='/'/>
        // }
        return(
            <div className='m-0 p-0'>
                <div className='gambar m-0 p-0' style={{height:'100vh', width:'100%'}}>
                    <img width='100%' height='100%' style={{objectFit:'cover', objectPosition:'center'}} src={Foto} alt="foto"/>
                    <div className='login-kotak d-flex px-4' style={{width:'40%', height:'55%', backgroundColor:'white'}}>
                        <div className='d-flex justify-content-center'>
                            <Link to='/' className='p-2'  style={{textDecoration:'none',color:'black'}}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <BsPhone/>
                                </IconButton>
                            </Link> 
                            <h1 className='align-self-center text-dark'>Login</h1>
                        </div>
                        <div className='mt-2'>
                            <TextField className={classes.root} inputRef={this.state.username} id="outlined-basic" fullWidth='true' label="Username" variant="outlined" size='small' />
                        </div>
                        <div className='mt-2'>
                            <TextField className={classes.root} inputRef={this.state.password} id="outlined-basic" fullWidth='true' type='password' label="Password" variant="outlined" size='small' />
                        </div>
                        {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
                        <div className='align-self-end mt-2'>
                            <button  className='py-2 px-3 rounded' onClick={this.onLoginClick} style={{border:'black 1px solid', backgroundColor:'transparent'}}>
                                Login
                            </button>
                        </div>
                        <div className='text-dark'>
                            Belum punya akun?
                            <Link to='/register'>
                            <span> Register</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
const Mapstatetoprops=(state)=>{
    return {
        Auth: state.Auth
    }
}
export default withStyles(Styles) (connect(Mapstatetoprops,{LoginFunc}) (Login))
// export default withStyles(Styles) (Login)