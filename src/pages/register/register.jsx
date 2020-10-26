import React, { Component, createRef } from 'react';
import './register.css'
import Foto from './../../assets/bg-login.jpg'
import {API_URL, API_URL_SQL} from './../../helpers/apiUrl'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {BsPhone} from 'react-icons/bs'
import Axios from 'axios'
import { Alert } from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom'
import {LoginFunc, LoginThunk} from './../../redux/Actions/'
import {toast} from 'react-toastify'

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
        repassword: createRef(),
        email: createRef(),
        namaLengkap: createRef(),
        alert: ''

    }

    onRegisterClick=()=>{
        var {username, password, repassword, email, namaLengkap} = this.state
        var username = username.current.value
        var password = password.current.value
        var repassword = repassword.current.value
        var email = email.current.value
        var namaLengkap = namaLengkap.current.value
        if (username && password && repassword && email && namaLengkap){ // kalau data tidak kosong
            console.log(username, password, repassword, email, namaLengkap)

            if(password === repassword){
                Axios.post(`${API_URL_SQL}/auth/register`,{
                    username, email, password, namaLengkap
                })
                .then((res)=>{
                    console.log(res.data)
                    localStorage.setItem('id', res.data.id)
                    this.props.LoginFunc(res.data, [])
                    toast('Register berhasil!', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }).catch((err)=>{
                    toast.error(err.response.data.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log(err)
                    console.log(err.response)
                })
            }else{
                toast.error('Password tidak sesuai!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }



            // Axios.get((`${API_URL}/users?username=${username}`))
            // .then((res)=>{
            //     console.log(res.data.length)
            //     if(res.data.length === 0){
            //         if(password !== repassword){
            //             toast.error('Password tidak sesuai!', {
            //                 position: "top-center",
            //                 autoClose: 5000,
            //                 hideProgressBar: false,
            //                 closeOnClick: true,
            //                 pauseOnHover: true,
            //                 draggable: true,
            //                 progress: undefined,
            //             });
            //         }else{
            //             Axios.post(`${API_URL}/users`, {
            //                 username,
            //                 password,
            //                 role: "user"
            //             }).then((res2)=>{
            //                 toast('Register berhasil!', {
            //                     position: "top-center",
            //                     autoClose: 5000,
            //                     hideProgressBar: false,
            //                     closeOnClick: true,
            //                     pauseOnHover: true,
            //                     draggable: true,
            //                     progress: undefined,
            //                     });
            //             }).catch((err)=>{
            //                 console.log(err)
            //             })
            //         }
            //     }else{
            //         toast.error('Username sudah ada', {
            //             position: "top-center",
            //             autoClose: 5000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //         });
            //     }
            // }).catch((err)=>{
            //     console.log(err)
            // })
        }else{
            toast.error('Data masih kosong', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        

    }

    render() { 
        const {classes} = this.props;
        console.log(this.props.Auth)
        if(this.props.Auth.isLogin){
            return <Redirect to='/'/>
        }
        return(
            <div className='m-0 p-0'>
                <div className='gambar m-0 p-0' style={{height:'100vh', width:'100%'}}>
                    <img width='100%' height='100%' style={{objectFit:'cover', objectPosition:'center'}} src={Foto} alt="foto"/>
                    <div className='login-kotak d-flex px-4' style={{width:'40%', height:'73%', backgroundColor:'white'}}>
                        <div className='d-flex justify-content-center'>
                            <Link to='/' className='p-2'  style={{textDecoration:'none',color:'black'}}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <BsPhone/>
                                </IconButton>
                            </Link> 
                            <h1 className='align-self-center text-dark'>Register</h1>
                        </div>
                        <div className='mt-2'>
                            <TextField className={classes.root} inputRef={this.state.namaLengkap} id="outlined-basic" fullWidth='true' label="Full Name" variant="outlined" size='small' />
                        </div>
                        <div className='mt-2'>
                            <TextField className={classes.root} inputRef={this.state.username} id="outlined-basic" fullWidth='true' label="Username" variant="outlined" size='small' />
                        </div>
                        <div className='mt-2'>
                            <TextField className={classes.root} inputRef={this.state.email} id="outlined-basic" fullWidth='true' type='email' label="Email" variant="outlined" size='small' />
                        </div>
                        <div className='mt-2'>
                            <TextField className={classes.root} inputRef={this.state.password} id="outlined-basic" fullWidth='true' type='password' label="Password" variant="outlined" size='small' />
                        </div>
                        <div className='mt-2'>
                            <TextField className={classes.root} inputRef={this.state.repassword} id="outlined-basic" fullWidth='true' type='password' label="Re-type Password" variant="outlined" size='small' />
                        </div>
                        {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
                        <div className='align-self-end mt-2'>
                            <button  className='py-2 px-3 rounded btn btn-outline-primary' onClick={this.onRegisterClick} >
                                Register
                            </button>
                        </div>
                        <div className='text-dark'>
                            Sudah punya akun?
                            <Link to='/login'>
                            <span> Login</span>
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
export default withStyles(Styles) (connect(Mapstatetoprops,{LoginFunc, LoginThunk}) (Login))
// export default withStyles(Styles) (Login)