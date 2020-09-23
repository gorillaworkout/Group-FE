import React, { Component } from 'react';
import Header from '../../components/Header'
import './home.css'
import backgroundHP from '../../assets/hp5.jpg'
import PopulerHP from '../../assets/populer.jpg'
import newBrandHP from '../../assets/newbrand.jpg'
import Button from '../../components/button'
import {SiAdobephonegap} from 'react-icons/si'
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header/>
                {/* BACKGROUND HEADER */}
              <div className="home-div">
                        <div className="img-1">
                            <img src={backgroundHP} alt="error" width="100%"/>
                        </div>  

                 {/* BUTTON TRADE */}
              <div className="trade-div">
                <div className="trade-1">
                    <Button>Trade Center</Button>
                </div>
                <div className="trade-1">
                    <Button>Trade HP Bekas</Button>
                </div>
                <div className="trade-1">
                    <Button>Service Center</Button>
                </div>
              </div>

              {/* BRAND POPULER */}

              <div className=" populer">
                <div className="div-1-populer">
                      <p>Populer Product</p>
                      <p style={{fontSize:'12px',marginTop:'-13px'}}>No Need Confused! Just Choost Which One You Want!</p>
                </div>
                <div className="d-flex">
                  <div className=" ins-populer">
                    <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                    <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                  <div className=" ins-populer">
                  <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div >
                  <div className=" ins-populer">
                  <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                  <div className=" ins-populer">
                  <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                  <div className=" ins-populer">
                  <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                </div>  
              </div>

              {/* BRAND TERLARIS */}

              <div className=" populer">
                <div className="div-1-populer">
                      <p>Brand Terlaris</p>
                      <p style={{fontSize:'12px',marginTop:'-13px'}}>Best Brand Ever!</p>
                </div>
                <div className="d-flex">
                    <div className="div-btn">
                        <div className="ins-btn">
                            {/* <button>All Handphone</button> */}
                            
                            <p>All Handphone</p>
                        </div>
                        <div className="ins-btn">
                            {/* <button>Apple</button> */}
                            <img src="https://img.icons8.com/nolan/64/mac-os.png" height="40px"/>
                            <p>Apple</p>
                        </div>
                        <div className="ins-btn">
                            {/* <button>Samsung</button> */}
                            <img src="https://img.icons8.com/color/48/000000/samsung.png"/>
                            <p>Samsung</p>
                        </div>
                        <div className="ins-btn">
                            {/* <button>Oppo</button> */}
                            <img src="https://img.icons8.com/ios-filled/50/000000/hp--v1.png"/>
                            <p>HP</p>
                        </div>
                        <div className="ins-btn">
                            {/* <button>Vivo</button> */}
                            <img src="https://img.icons8.com/color/48/000000/blackberry-app-world--v1.png"/>
                            <p>BlackBerry</p>
                        </div>
                       
                    </div>
                  <div className=" ins-populer">
                    <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                    <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                  <div className=" ins-populer">
                  <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button className="btn-pop">LIHAT</button>
                    </div>
                  </div >
                  <div className=" ins-populer">
                  <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                  <div className=" ins-populer">
                  <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                </div>  
              </div>
              {/* prodiuct terbaru */}

              <div className=" populer">
                <div className="div-1-populer">
                      <p>New Product</p>
                      <p style={{fontSize:'12px',marginTop:'-13px'}}>Best New Product Ever</p>
                </div>
                <div className="d-flex">
                    <div className="div-btn">
                        <div className="ins-btn2">
                            {/* <button>All Handphone</button> */}
                            
                           <img src={newBrandHP} alt=""width="170px" height="300px"/>
                        </div>
                    
                       
                    </div>
                  <div className=" ins-populer">
                    <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                    <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                  <div className=" ins-populer">
                    <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div >
                  <div className=" ins-populer">
                  <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                  <div className=" ins-populer">
                  <img src={PopulerHP} alt="error" width="100%" height="200px"/>
                  <div className="pop-word">
                        <p>SAMSUNG</p>
                        <p style={{fontSize:'15px'}}>Harga:</p>
                        <p>RP.1.000.000</p>
                        <button>LIHAT</button>
                    </div>
                  </div>
                </div>  
              </div>

                {/* FOOTER */}

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
                


            </div>
         );
    }
}
 
export default Home;