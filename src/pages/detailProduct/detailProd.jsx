import React, { Component } from 'react';
import Axios from 'axios'
import { API_URL } from '../../helpers/apiUrl';
import Header from '../../components/Header'
import backgroundHP from '../../assets/hp5.jpg'
import './detailProd.css'
import {FcCheckmark} from 'react-icons/fc'
class DetailProduct extends Component {
    state = {  }
    componentDidMount(){
        Axios.get(`${API_URL}/products/`)
    }
    
    render() { 
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
                                    <p> Sisa 1 Unit</p>
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
                                        <p>Standar</p>
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

            </div>
         );
    }
}
 
export default DetailProduct;