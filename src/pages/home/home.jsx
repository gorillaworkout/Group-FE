import React, { Component } from 'react';
import Header from '../../components/Header'
import './home.css'
import backgroundHP from '../../assets/hp5.jpg'
import PopulerHP from '../../assets/populer.jpg'
import newBrandHP from '../../assets/newbrand.jpg'
import BG1 from '../../assets/bg1.jpg'
import BG2 from '../../assets/bg2.jpg'
import BG3 from '../../assets/bg3.jpg'
import BG4 from '../../assets/bg-4.jpg'
import Button from '../../components/button'
import {SiAdobephonegap} from 'react-icons/si'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from 'react-router-dom'
import {toDetail} from './../../redux/Actions'
import {connect} from 'react-redux';
import { API_URL,API_URL_SQL,priceFormatter } from '../../helpers/apiUrl';
import Axios from 'axios'
import { SignalCellularNoSimOutlined } from '@material-ui/icons';




class Home extends Component {

    state = { 
      product:[],
      brandterlaris:[],
      newproduct:[],
      sqlAllProduct:[],
      sqlMostView:[],
      sqlApple:[],
      sqlSamsung:[]
     }

     componentDidMount(){

       Axios.get(`${API_URL_SQL}/product/prodHomeAll`)
       .then((res)=>{
          console.log(res.data)
          this.setState({
            sqlAllProduct:res.data.dataProduct,
            sqlApple:res.data.dataApple,
            sqlSamsung:res.data.dataSamsung,
          sqlMostView:res.data.dataViewer})
          
          // console.log(res.data)
       }).catch((err)=>{
         alert(err)
         console.log(err)
       })



     }

     renderTable=()=>{
       return this.state.sqlMostView.map((val,index)=>{
         return (
          <div key ={val.id}className=" ins-populer">
            <img src={val.gambar} alt="error" width="100%" height="200px"/>
            <div className="pop-word">
                <p>{val.namaHp}</p>
                <p style={{fontSize:'15px'}}>Harga:</p>
                <p>{priceFormatter(val.harga)}</p>
            <Link to={'/detailproduct/'+val.id}>
                <button className="btn-pop" onClick={()=>this.onClick(this.jenis='Products',index)}>LIHAT</button>
            </Link>
            </div>
        </div>
         )
       })
     }

     renderBrandTerlaris=()=>{
       return this.state.sqlApple.map((val,index)=>{

         return (
          <div key ={val.id}className=" ins-populer">
          <img src={val.gambar} alt="error" width="100%" height="200px"/>
          <div className="pop-word">
              <p>{val.namaHp}</p>
              <p style={{fontSize:'15px'}}>Harga:</p>
              <p>{priceFormatter(val.harga)}</p>
          <Link to={'/detailproduct/'+val.id}>
              <button className="btn-pop" onClick={()=>this.onClick(this.jenis='brandterlaris',index)}>LIHAT</button>
          </Link>
          </div>
      </div>

         )
       })
     }

     renderNewProduct=()=>{
       return this.state.sqlSamsung.map((val,index)=>{
         console.log(index + 'ke ' + ' data' + val.namaHp)
         
         return (
          <div key ={val.id}className=" ins-populer">
          <img src={val.gambar} alt="error" width="100%" height="200px"/>
          <div className="pop-word">
              <p>{val.namaHp}</p>
              <p style={{fontSize:'15px'}}>Harga:</p>
              <p>{priceFormatter(val.harga)}</p>
          <Link to={'/detailproduct/'+val.id}>
              <button className="btn-pop" onClick={()=>this.onClick(this.jenis='newproduct',index)}>LIHAT</button>
          </Link>
          </div>
      </div>
         )
       })
     }

     onClick=(jenis,index)=>{
       console.log(index + 'ini index')
       console.log(jenis + ' in ijenis')
       if(jenis === 'newproduct'){
         console.log(' masuk ke if newPRODUCT')
         console.log(this.state.sqlSamsung[index])
         localStorage.setItem('Products',JSON.stringify(this.state.sqlSamsung[(index)]))
         this.props.toDetail(jenis,index)

       }else if  ( jenis === 'brandterlaris'){
         console.log('masuk ke if BRANDTERLARIS')
         console.log(this.state.sqlApple[index])
         localStorage.setItem('Products',JSON.stringify(this.state.sqlApple[(index)]))
         this.props.toDetail(jenis,index)
       }else {
         console.log(' masuk ke elsePRODUCT')
         console.log(this.state.sqlMostView[index])
         localStorage.setItem('Products',JSON.stringify(this.state.sqlMostView[(index)]))
         this.props.toDetail(jenis,index)

       }
     }

    render() { 

      console.log(this.props.cart)
        return ( 
            <div>
                <Header/>
                {/* BACKGROUND HEADER */}
              <div className="home-div">
              <div style={{width: "60%",height: '90vh',marginLeft:'280px',backgroundColor:'red',height:'350px'}}>
                    {/* <img src={Homescreen} width='100%' height='100%'></img> */}
                    <Carousel autoPlay showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true}>
                    <div className="background">
                        <img src={backgroundHP} width="100%" height="355px"/>
                        <p>PURWA STORE</p>
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div className="background">
                        <img src={BG2} width="100%" height="355px"/>
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div className="background" >
                        <img src={BG3} width="100%" height="355px"/>
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                    </Carousel>
              </div>



 
                 {/* BUTTON TRADE */}
              <div className="trade-div">
                <div className="trade-1">
                    <Button className="btn-trade">Trade Center</Button>
                </div>
                <div className="trade-1">
                    <Button className="btn-trade">Trade HP Bekas</Button>
                </div>
                <div className="trade-1">
                    <Button className="btn-trade">Service Center</Button>
                </div>
              </div>

              {/* BRAND POPULER */}

              <div className=" populer">
                <div className="div-1-populer">
                      <p>Most View Product</p>
                      <p style={{fontSize:'12px',marginTop:'-13px'}}>No Need Confused! Just Choost Which One You Want!</p>
                </div>
                <div className="d-flex">
                  {this.renderTable()}
                </div>  
              </div>

              {/* BRAND TERLARIS */}

              <div className=" populer">
                <div className="div-1-populer">
                      <p>Apple</p>
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
                  {this.renderBrandTerlaris()}
                </div>  
              </div>
              {/* prodiuct terbaru */}

              <div className=" populer">
                <div className="div-1-populer">
                      <p>Samsung</p>
                      <p style={{fontSize:'12px',marginTop:'-13px'}}>Best New Product Ever</p>
                </div>
                <div className="d-flex">
                    <div className="div-btn">
                        <div className="ins-btn2">
                            {/* <button>All Handphone</button> */}
                            
                           <img src={newBrandHP} alt=""width="150px" height="300px"/>
                        </div>
                    </div>
                    {this.renderNewProduct()}
                  
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

const Mapstatetoprops=({Auth})=>{
  return{
    ...Auth
  }
}
 
// export default Home;
export default (connect(Mapstatetoprops,{toDetail})(Home))