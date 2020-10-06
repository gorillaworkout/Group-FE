import React,{useEffect, useState,useCallback} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {fade} from '@material-ui/core/styles';
import {HOME_URL, API_URL} from './../helpers/apiUrl'
import FlightTakeoff from '@material-ui/icons/FlightTakeoff'
import {Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import InputBase from '@material-ui/core/InputBase';
import {FaUserAstronaut,FaCartArrowDown} from 'react-icons/fa'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import {LogoutFunc} from '../redux/Actions'
import {toast} from 'react-toastify'
import {BsPhone} from 'react-icons/bs'
import './header.css'
import Axios from 'axios';
import debounce from "lodash.debounce";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchField: {
    backgroundColor: '#2E3B55',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warna:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const StyledBadge = withStyles(() => ({
  badge: {
    right: -3,
    top: 5,
    color:'white',
    fontSize:11,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    
    padding: '0 0px',
  },
}))(Badge);


function ButtonAppBar({username,isLogin,role,LogoutFunc,qtyProduct,cart}) {
  const classes = useStyles();
  const [anchorEl,setopen]=useState(null)
  const [anchorEl2,setopen2]=useState(null)
  const [products, setProducts] = useState([])
  const [filterProd, setFilterProd] = useState([])
  const [isOpen, setopen3] = useState(false)

  useEffect (()=>{
    Axios.get(`${API_URL}/Products`)
    .then((res)=>{
      setProducts(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  // console.log(cart)
  // console.log(cart[0].product)

  
   // console.log(qtyProduct)
  const logoutbtn = () => {  
    console.log('logout')
    localStorage.removeItem('id')
    localStorage.removeItem('Products')
    localStorage.removeItem('brandterlaris')
    localStorage.removeItem('newproduct')

    window.location.assign(`${HOME_URL}`)

    // LogoutFunc()
    toast('Logout Berhasil', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
}
 
  // const renderCart=()=>{
  //   return cart.map((val,index)=>{
  //     return (
  //       <div>
  //         testing {val}
  //       </div>
  //     )
  //   })
  // }

  const onIsiSearchClick=(id)=>{
    var indexProd = products.findIndex((val)=> val.id == id)
    localStorage.setItem('Products',JSON.stringify(products[indexProd]))
    console.log(products[indexProd])
  }

  const renderSearchData=(arr)=>{
    return arr.map((val)=>{
      return(
        <Link to={`/detailproduct/${val.id}`}>
          <div className={classes.searchField}
          onClick={()=>onIsiSearchClick(val.id)}
          style={{textDecoration:'none', color:'white'}}>
            <div className='m-2'>
              {val.namaHp}
            </div>
          </div>
        </Link>
      )
    })
  }

  const filterSearch=(input)=>{
    var filterdata = products.filter((val)=>{
      return val.namaHp.toLowerCase().includes(input.toLowerCase())
    })
    setFilterProd(filterdata)
  }

  // const onChangeSearch=(e)=>{
  //   if(e.target.value){
  //     setopen3(true)
  //     filterSearch(e.target.value)
  //   }else{
  //     setopen3(false)
  //   }
  // }




  /*
  testing bayu
  */
 const [userQuery,setUserQuery] = useState('')
 const onChangeSearch=(e)=>{
  if(e.target.value){
    setUserQuery(e.target.value)
    setopen3(true)  
  }else {
    setopen3(false)
  }

}
  // const sendQuery=(query)=>{
  //   console.log(`querying for ${query}`)
  //   // setProducts(query)
    
  // }
  
    const updateQuery=()=>{
      filterSearch(userQuery)
      // sendQuery(userQuery)
      // setopen3(true)
    }
    const delayedQuery=useCallback(debounce(updateQuery,1000),[userQuery])



    useEffect(()=>{
      delayedQuery() // didmount 
      // return delayedQuery.cancel // willmount
    },[userQuery])
  

  /*
  */

  const remove=()=>{
    localStorage.removeItem('Products')
    localStorage.removeItem('brandterlaris')
    localStorage.removeItem('newproduct')
    console.log('ngapus, balik ke home')
  }
  return (
    <div className={classes.root} >
      <AppBar className={classes.warna} position='static' style={{ background: '#2E3B55' }}>
        <Toolbar>
            <NavLink to='/'  style={{textDecoration:'none',color:'white'}} >
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={remove}>
                    <BsPhone/>
                </IconButton>
            </NavLink> 
          <Typography variant="h6" className={classes.title}>
            PurwaStore
          </Typography>
            <div className={classes.search} style={{}}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange = {(e)=>onChangeSearch(e)}
                // onFocus = {()=>setopen3(true)}
                // onBlur ={()=>setopen3(false)}
                // value={userQuery}
              />
            </div>
            {
              isOpen
              ?
              <Box p={2}
              style={{
                width:320,
                position:'absolute',
                top:70,
                right:175,
                zIndex:10,
                color: 'white',
                borderRadius: 5,
                background:'#2E3B55'}}
              anchorEl={isOpen} // ga ngaruh :((((
              open={Boolean(isOpen)}
              onClose={()=>setopen3(null)}>
                <Typography>{renderSearchData(filterProd)}</Typography>
              </Box>
              :
              null
            }
           
                        
          {
            role==='admin'?
            <>
            <Link to='/manageAdmin' style={{textDecoration:'none',color:'white'}}>
              <Button color="inherit">Manage Product</Button>
            </Link>
             <Link to='/paymentAdmin' style={{textDecoration:'none',color:'white'}}>
             <Button color="inherit">Payment Checking</Button>
            </Link>
           </>
            :
            role==='user'?
            <>
            <Link to='/products' style={{textDecoration:'none',color:'white'}}>
              <Button color="inherit">
                <StyledBadge color='secondary' >
                  <span style={{fontSize:20}}>
                    Our Product
                  </span>
                </StyledBadge>
              </Button>
            </Link>
            {/* <Link to='/cart' style={{textDecoration:'none',color:'white'}}>
              <Button color="inherit">
                <StyledBadge badgeContent={cart.length} color='secondary' >
                  <span style={{fontSize:20}}>
                    <FaCartArrowDown />
                  </span>
                </StyledBadge>
              </Button>
            </Link> */}
            </>
            :
            null
          }
          {
            isLogin?
            <>
              <Button color="inherit" onClick={(e)=>setopen2(e.currentTarget)}>
              <StyledBadge badgeContent={2} color='secondary' >
                  <span style={{fontSize:20}}>
                    <FaCartArrowDown />
                  </span>
                </StyledBadge>
                {/* <FaCartArrowDown/> */}
                
                </Button>
              <Menu
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={()=>setopen2(null)}> 
  
                <Link to='/cart'>
                  <MenuItem>Lihat Cart</MenuItem>
                  {/* <MenuItem >
                  {
                    cart.length?
                     <div className="d-flex">
                       
                      <img src={cart[0].product.gambar}  width="50px" height="50px"></img>
                       <div>
                         <p>{cart[0].product.namatrip}</p>
                         <p>{cart[0].qty}</p>
                         <p>Go to Cart</p>
                       </div>
                    </div>
                    :
                    <MenuItem>Lihat Cart</MenuItem>

                  }
                 {renderCart()}
                  </MenuItem> */}
                  
                </Link>
              
              </Menu>

              {/* LOGOUT */}



              <Button color="inherit" onClick={(e)=>setopen(e.currentTarget)}><FaUserAstronaut/>&nbsp;{username}</Button>
              <Menu
                // id="simple-menu"
                anchorEl={anchorEl}
                // keepMounted
                open={Boolean(anchorEl)}
                onClose={()=>setopen(null)}
                // onClose={handleClose}
              > 
                {/* <Link to='/history'> */}
                  {
                    role === 'admin'?
                    <Link to='/manageUser'>
                      <MenuItem >Manage Data User</MenuItem>
                    </Link>
                    :
                    <Link to='/history'>
                      <MenuItem >History</MenuItem>
                    </Link>
                  }
                {/* </Link> */}


                <Link to='/myAccount'>
                  <MenuItem >My account</MenuItem>
                </Link>
                <Link to='/'>
                <MenuItem onClick={logoutbtn}>Logout</MenuItem>
                </Link>
              </Menu>
            </>
            :
            <>
            <Link to='/register' style={{textDecoration:'none',color:'white'}}>
            <Button color="inherit">Register</Button>
            </Link>
            <Link to='/login' style={{textDecoration:'none',color:'white'}}>
              <Button color="inherit">Login</Button>
            </Link>
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

const MapstatetoProps=({Auth})=>{
  return {
    ...Auth
  }
}
export default connect(MapstatetoProps)(ButtonAppBar);
// export default ButtonAppBar

