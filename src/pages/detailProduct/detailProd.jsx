import React, { Component } from 'react';
import Axios from 'axios'
import { API_URL } from '../../helpers/apiUrl';
import Header from '../../components/Header'
import backgroundHP from '../../assets/hp5.jpg'
import './detailProd.css'
import {FcCheckmark} from 'react-icons/fc'
import {FaEye} from 'react-icons/fa'
import newBrandHP from '../../assets/newbrand.jpg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
class DetailProduct extends Component {
    state = { 
        product:[],
        JSON:[],
        productThunk:[]
     }
     
    componentDidMount(){
        Axios.get(`${API_URL}/products/`)
        .then((res)=>{
            this.setState({product:res.data})
        }).catch((err)=>{
            console.log(err)
        })

        if(this.props.dataJSON===null){
           console.log('LOADING')

        }else {
            console.log('masuk ke if')
            console.log(this.props.dataJSON.jenis)
            var parseJson = JSON.parse(localStorage.getItem(`${this.props.dataJSON.jenis}`))
            var test = window.localStorage.getItem('id')
            console.log(this.test)
            console.log(this.parseJson)
            this.setState({productThunk:parseJson})
        }
        console.log('testing')
       
    }


    renderTable=()=>{
        return this.state.product.map((val,index)=>{
          return (
           <div key ={val.id}className=" ins-populer">
             <Link to={'/detailproduct/'+val.id}>
             <img src={val.gambar} alt="error" width="100%" height="200px"/>
             <div className="pop-word">
                 <p>{val.namaHp}</p>
                 <p style={{fontSize:'15px'}}>Harga:</p>
                 <p>RP.{val.harga}</p>
                 <button className="btn-pop">LIHAT</button>
             </div>
             </Link>
         </div>
          )
        })
      }
    
    render() { 
        console.log(this.props.dataJSON.index)
        console.log(this.props.dataJSON.jenis)
        console.log(this.state.productThunk)
        console.log(this.test)
        console.log(this.parseJson)
        
        return ( 
            <div>
                <Header/>
                <div className="detailProd-big">
                    <div className="detailProd-left">
                            <div className="img-dp-left">
                                <img src={backgroundHP} alt="error" width="538px" height="450px"/>
                            </div>
                    </div>
                    <div className="detailProd-right">
                            <div className="inf-dp-right">
                                <div className="namaHP">
                                    <p>[Standar] Samsung Galaxy J7</p>
                                </div>
                                <div className="harga">
                                    <p>RP.1.0000.000</p>
                                </div>
                                <div className="sisa-unit">
                                    <div style={{backgroundColor:'red'}}>
                                        <p> Sisa 1 Unit</p>
                                    </div>
                                    <p><FaEye/> 1 Viewer</p>

                                </div>
                                <div className="gradeType">
                                    <p>Grade Type</p>
                                    <div className="ins-gradeType">
                                        <div className="box-ins">
                                            <p>Ekonomis</p>
                                        </div>
                                        <div className="box-ins">
                                        <p>Baru</p>
                                        </div>
                                        <div className="box-ins">
                                        <p >Standar</p>
                                        </div>
                                        <div className="pilihan-type">
                                        <p className="icns-gt"><FcCheckmark/></p>
                                        <p className="icns-gt-1">Curian</p>
                                        </div>
                                        <div className="box-ins">
                                        <p>Mulus</p>
                                        </div>
                                        <div className="box-ins">
                                        <p>Lelang</p>
                                        </div>
                                        <div className="box-ins">
                                        <p>Nemu</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="storage">
                                    <p>Storage</p>
                                    <div className="box-ins-stor">
                                        <div className="memory">
                                            <p>32 GB</p>
                                        </div>
                                        <div className="memory1">
                                            <p>64</p>
                                        </div>
                                        <div className="pilihan-stor">
                                            <p className="icns"><FcCheckmark/></p>
                                            <p className="icns-1">128</p>
                                        </div>
                                        <div className="memory1">
                                            <p>256</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="storage">
                                        <p>Warna</p>
                                    <div className="box-ins-stor">
                                        <div className="memory">
                                            <p>Pink</p>
                                        </div>
                                        <div className="pilihan-stor">
                                            <p className="icns"><FcCheckmark/></p>
                                            <p className="icns-1" >Black</p>
                                        </div>
                                        <div className="memory1">
                                            <p>Gold</p>
                                        </div>
                                    </div>
                                   
                                </div>
                              
                            </div>

                    </div>          
                </div>
                        <div className="btn-1">
                            <div className="btn-kiri">
                                
                            </div>
                            <div className="btn-kanan">
                                <div className="btn-ins">
                                    <p>BELI SEKARANG</p>
                                </div> 
                            </div>
                        </div>  

                <div className="description">
                    <div className="desc-kiri">
                        <p className="align-self-center mb-2">Description</p>
                        <p style={{fontSize:'10px', marginLeft:'50px', marginRight:'50px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui blanditiis quibusdam ipsam voluptatibus nesciunt numquam, ea nisi delectus enim deleniti mollitia itaque, optio commodi dolore iusto iste? Porro, quo!</p>
                        
                        <div className="desc-kiri-bawah">
                                <h1>PURWA STORE</h1>
                        </div>
                    </div>
                    
                    <div className="desc-kanan">
                        <p style={{borderBottom:'1px solid gray', width:'40%', fontWeight:'800'}}>Spesifikasi</p>
                        <div className="spek">
                            <div className="spek-ins">
                                <p>ScreenSize </p>
                                
                            </div>
                            <div className="spek-ins2"> 
                                <p>5.5"</p>
                            </div>
                        </div>
                        <div className="spek">
                        <div className="spek-ins">
                                <p>Screen Resolution </p>
                                
                            </div>
                            <div className="spek-ins2"> 
                                <p>720 X 1280</p>
                            </div>

                        </div>
                        <div className="spek">
                        <div className="spek-ins">
                                <p>Back Camera </p>
                                
                            </div>
                            <div className="spek-ins2"> 
                                <p>8 Mp</p>
                            </div>

                        </div>
                        <div className="spek">
                        <div className="spek-ins">
                                <p>Front Camera </p>
                                
                            </div>
                            <div className="spek-ins2"> 
                                <p>5 Mp</p>
                            </div>

                        </div>
                        <div className="spek">
                            <div className="spek-ins">
                                    <p>Battery Capacity </p>
                                    
                            </div>
                            <div className="spek-ins2"> 
                                <p>2630 Mah</p>
                            </div>

                        </div>


                    </div>
                    <div className="desc-kanan-1">
                            <p style={{borderBottom:'1px solid gray', width:'40%',color:'gray',fontSize:'30px',marginTop:'-25px' , marginLeft:'30px',fontWeight:'800'}}>Spesifikasi</p>
                        <div className="desc-kanan-ins">
                        <div className="spek">
                                <div className="spek-ins">
                                        <p>Sim</p>
                                        
                                </div>
                                <div className="spek-ins2"> 
                                    <p>Dual</p>
                                </div>

                            </div>
                            <div className="spek">
                                <div className="spek-ins">
                                    <p>OS (Operating System) </p>
                                        
                                </div>
                                <div className="spek-ins2"> 
                                    <p>Android Os, 8.0 (oreo)</p>
                                </div>

                            </div>
                            <div className="spek">
                                <div className="spek-ins">
                                    <p>Storage </p>
                                        
                                </div>
                                <div className="spek-ins2"> 
                                    <p>64GB</p>
                                </div>

                            </div>
                            <div className="spek">
                                <div className="spek-ins">
                                    <p>Warna </p>
                                        
                                </div>
                                <div className="spek-ins2"> 
                                    <p>Gold</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>     


                <div className=" populer">
                <div className="div-1-populer">
                      <p>Related Items</p>
                      <p style={{fontSize:'12px',marginTop:'-13px'}}>Best New Product Ever</p>
                </div>
                <div className="d-flex">
                    <div className="div-btn">
                        <div className="ins-btn2">
                            {/* <button>All Handphone</button> */}
                            
                           <img src={newBrandHP} alt=""width="150px" height="300px"/>
                        </div>
                    </div>
                    {this.renderTable()}
                  
                </div>  
              </div>
                
                <div className="box-5-biggest">
                        <div className="box-5-kecil">
                            <h2>PurwaStore</h2>
                            <p>We Provide Anything You WANT!&nbsp;</p>
                        </div> 
                        <div className="box-5-kecil">
                            <h2>For Beginners</h2>
                            <p>New Account</p>
                            <p>Find a Phone</p>
                            <p>Payments</p>
                        </div>
                        <div className="box-5-kecil">
                            <h2>Explore Us</h2>
                            <p>About</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Condition</p>
                        </div>
                        <div className="box-5-kecil">
                            <h2>Getting Touch</h2>
                            <p>Support@PurwaStore.id</p>
                            <p>021-96080200</p>
                            <p>Explore US</p>
                        </div>
                    
                    </div>   

                    <div class="d-flex flex-column footerbottom">
                            <footer class="footer">
                                <div>
                                <a href="/">Purwa-UI</a>
                                <span>&copy; 2020 creativeLabs.</span>
                                </div>
                                <div class="ml-auto">
                                <span>Powered by</span>
                                <a href="/">Purwa-UI</a>
                                </div>
                            </footer>
                        </div>

            </div>
         );
    }
}

const Mapstatetoprops=({Auth})=>{
    return {
        ...Auth
    }
}
 
// export default DetailProduct;
export default (connect(Mapstatetoprops,{})(DetailProduct))