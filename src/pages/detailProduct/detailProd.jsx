import React, { Component, createRef } from 'react';
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
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { BsCursor } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import {AddcartAction} from './../../redux/Actions'

class DetailProduct extends Component {
    state = { 
        product:[],
        dataParse:{},
        productThunk:[],
        activeTab:1,
        gradeType: ['Ekonomis', 'Baru', 'Standar','Mulus', 'Curian', 'Lelang', 'Nemu'],
        storage: [8, 16, 32, 64, 128, 256],
        focusPage: createRef(),
        idUser:0
     }

     toggle=(tab)=>{
         if(this.state.activeTab !== tab) {
             this.setState({activeTab:tab})
         }
     }
     
    componentDidMount(){
        window.scrollTo(0,0) //(x,y)
        Axios.get(`${API_URL}/products/`)
        .then((res)=>{
            this.setState({product:res.data})
            var populerProduct = JSON.parse(localStorage.getItem(`Products`))
            var idUsers = JSON.parse(localStorage.getItem('id'))
            
            this.setState({dataParse:populerProduct})
            this.setState({idUser:idUsers})
            console.log(this.state.idUser)
            console.log(this.state.dataParse)

        }).catch((err)=>{
            console.log(err)
        })
        console.log('testing')


    }

    sendtoCart=()=>{
        console.log(this.state.dataParse.id)
        console.log(this.props.role)
        console.log(this.state.idUser)
        if(this.props.role==='admin'){
            alert('ADMIN GABOLEH BELI BGST')
        }else if (this.props.role==='user'){
            var data = {
                id:this.state.dataParse.id
            }
            // Axios.get(`http://localhost:5001/cart/getQtyById/${this.state.idUser}`) // ERROR GABISA PAKE 2 PARAMS. jangan lupa ganti querynya di backend masih 7
            Axios.get(`http://localhost:5001/cart/getQtyById`,{     // ini masih error tanya dino bsk
                params:{
                    id:this.state.idUser,
                    productId:this.state.dataParse.id
                }
            })
            .then((res)=>{
                // console.log(res.data)
                // nanti res.data dimasukin ke state
                if(res.data.length){ // kalo si product udh ada maka hanya update qty tambah 1 
                    alert('data udah ada. update qty +1')
                }else { // product di cart masih kosong jadi push semua data ke cart
                    alert('data kosong. post full data')
                    
                    Axios.get(`http://localhost:5001/product/getProductById/${this.state.dataParse.id}`)
                    .then((res3)=>{
                        console.log(res3.data)        

                    }).catch((err)=>{
                        console.log(err)
                    })
                    console.log(this.state.idUser)
                    console.log(this.state.dataParse.id)
                    
                    Axios.post(`http://localhost:5001/cart/addQty`,{
                        userId:this.state.idUser,
                        productId:this.state.dataParse.id,
                        tanggalPembelian:1600683705179,
                        qty:1
                    })
                    .then((res4)=>{
                            console.log(res4.data) 
                            Axios.get(`http://localhost:5001/cart/allQty/${this.state.idUser}`)
                            .then((res2)=>{
                                this.props.AddcartAction(res2.data)
                                    console.log(res2.data)
                            }).catch((err)=>{
                                console.log(err)
                            })
                    }).catch((err)=>{
                        console.log(err)
                    })
                }
            }).catch((err)=>{
                console.log(err)
            })
        
        }else {
            alert('login dulu')
        }
        // console.log(data)
        // console.log(data.id)

    }



    renderTable=()=>{
        return this.state.product.map((val,index)=>{
          return (
            <div key ={val.id}className=" ins-populer">
             <img src={val.gambar} alt="error" width="100%" height="200px"/>
             <div className="pop-word">
                 <p ref={this.state.focusPage}>{val.namaHp}</p>
                 <p style={{fontSize:'15px'}}>Harga:</p>
                 <p>RP.{val.harga}</p>
             <Link to={'/detailproduct/'+val.id}>
                 <button className="btn-pop">LIHAT</button>
             </Link>
             </div>
            </div>
          )
        })
    }


    renderGrade=()=>{
        return this.state.gradeType.map((val,index)=>{
            console.log(val, 'val')
            if (this.state.dataParse.grade == val){
                return (
                    <div className="pilihan-type">
                        <p className="icns-gt"><FcCheckmark/></p>
                        <p className="icns-gt-1">{val}</p>
                    </div>
              )
            }
            return (
              <div className="box-ins">
                  <p>{val}</p>
              </div>
            )
        })
    }

    renderStorage=()=>{
        return this.state.storage.map((val)=>{
            console.log(val, 'val')
            if (this.state.dataParse.storage == val){
                return (
                    <div className="pilihan-stor">
                        <p className="icns"><FcCheckmark/></p>
                        <p className="icns-1">{val}</p>
                    </div>
              )
            }
            return (
                <div className="memory">
                    <p>{val}</p>
                </div>
            )
        })
    }

    render() { 
        console.log(this.state.JSON)
        console.log(this.state.dataParse) // nanti dipake
        console.log(this.props.role) // nanti dipake
        return ( 
            <div>
                <Header/>
                <div className="detailProd-big">
                    <div className="detailProd-left">
                            <div className="img-dp-left">
                                <img src={this.state.dataParse.gambar} alt="error" width="538px" height="450px"/>
                            </div>
                    </div>
                    <div className="detailProd-right">
                            <div className="inf-dp-right">
                                <div className="namaHP">
                                    <p>{this.state.dataParse.namaHp}</p>
                                </div>
                                <div className="harga">
                                <p>RP.{this.state.dataParse.harga}</p>
                                </div>
                                <div className="sisa-unit">
                                    <div style={{backgroundColor:'red'}}>
                                        <p> Sisa {this.state.dataParse.unit} Unit</p>
                                    </div>
                                    <p><FaEye/> {this.state.dataParse.viewer} Viewer</p>

                                </div>
                                <div className="gradeType">
                                    <p>Grade Type</p>
                                    <div className="ins-gradeType">
                                        {this.renderGrade()}
                                        
                                       
                                    </div>
                                </div>
                                <div className="storage">
                                    <p>Storage</p>
                                    <div className="box-ins-stor">
                                        {this.renderStorage()}
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
                                <div className="btn-ins" onClick={this.sendtoCart}>
                                    {/* <Link to='/payment' > */}
                                        <p>BELI SEKARANG</p>
                                    {/* </Link> */}
                                </div> 
                            </div>
                        </div>

                        <div>
                            <Nav tabs>
                                <NavItem className="cursor-nav">

                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}>
                                        Description
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}>
                                        Specification
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('3'); }}>
                                        Q & A
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane  tabId="1" className="tab-row-1">
                                    <Row>
                                    <div className="desc-kiri">
                                        <Fade top>
                                            <p className="desc-word">Description</p>
                                        </Fade>
                                        <Fade bottom>
                                            <p className="desc-isi">{this.state.dataParse.description}</p>

                                        </Fade>
                                        
                                        {/* <div className="desc-kiri-bawah">
                                                <h1>PURWA STORE</h1>
                                        </div> */}
                                    </div>
                                      
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2" className="tab-row-2">
                                <Row>
                                    <Col sm="6">
                                        {/* <Card body> */}
                                        <div className="desc-kanan">
                                            <Fade>
                                                <p className="spek-word ">Spesifikasi</p>   
                                            </Fade>
                                            <div className="spek">
                                            <Fade left>
                                                <div className="spek-ins">
                                                    <p>ScreenSize </p>           
                                                </div>
                                            </Fade>
                                            <Fade right>
                                                <div className="spek-ins2"> 
                                                    <p>5.5"</p>
                                                </div>
                                            </Fade>
                                            </div>
                                            <div className="spek">
                                                <Fade left>
                                                 <div className="spek-ins">
                                                    <p>Screen Resolution </p>
                                                    
                                                </div>

                                                </Fade>
                                                <Fade right>
                                                    <div className="spek-ins2"> 
                                                        <p>720 X 1280</p>
                                                    </div>
                                                </Fade>

                                            </div>
                                            <div className="spek">
                                                <Fade left>
                                                    <div className="spek-ins">
                                                        <p>Back Camera </p>
                                                        
                                                    </div>
                                                </Fade>
                                                <Fade right>
                                                    <div className="spek-ins2"> 
                                                        <p>8 Mp</p>
                                                    </div>
                                                </Fade>

                                            </div>
                                            <div className="spek">
                                                <Fade left>
                                                <div className="spek-ins">
                                                    <p>Front Camera </p>        
                                                </div>
                                                </Fade>
                                                <Fade right>
                                                <div className="spek-ins2"> 
                                                    <p>5 Mp</p>
                                                </div>
                                                </Fade>

                                            </div>
                                            <div className="spek">
                                                <Fade left>
                                                <div className="spek-ins">
                                                        <p>Battery Capacity </p>                                            
                                                </div>
                                                </Fade>
                                                <Fade right>
                                                    <div className="spek-ins2"> 
                                                        <p>2630 Mah</p>
                                                    </div>
                                                </Fade>

                                            </div>
                                        </div>
                                        {/* </Card> */}
                                    </Col>
                                    <Col sm="6">
                                        {/* <Card body> */}
                                        <div className="desc-kanan-1">
                                            <Fade>
                                                <p className="spek-word-1">Spesifikasi</p>
                                            </Fade>
                                            <div className="desc-kanan-ins">
                                            <div className="spek">
                                                <Fade left>
                                                    <div className="spek-ins">
                                                            <p>Sim</p>                                
                                                    </div>
                                                </Fade>
                                                <Fade right >
                                                    <div className="spek-ins2"> 
                                                        <p>Dual</p>
                                                    </div>
                                                </Fade>

                                                </div>
                                                <div className="spek">
                                                    <Fade left>
                                                    <div className="spek-ins">
                                                        <p>OS (Operating System) </p>                                                         
                                                    </div>
                                                    </Fade>
                                                    <Fade right>
                                                        <div className="spek-ins2"> 
                                                            <p>{this.state.dataParse.os}</p>
                                                        </div>
                                                    </Fade>

                                                </div>
                                                <div className="spek">
                                                    <Fade left>
                                                        <div className="spek-ins">
                                                            <p>Storage </p>                                                              
                                                        </div>
                                                    </Fade>
                                                    <Fade right>
                                                        <div className="spek-ins2"> 
                                                            <p>64GB</p>
                                                        </div>
                                                    </Fade>

                                                </div>
                                                <div className="spek">
                                                    <Fade left>
                                                        <div className="spek-ins">
                                                            <p>Warna </p>                                                             
                                                        </div>
                                                    </Fade>
                                                    <Fade right>
                                                        <div className="spek-ins2"> 
                                                            <p>Gold</p>
                                                        </div>
                                                    </Fade>

                                                </div>
                                            </div>
                                        </div>
                                        {/* </Card> */}
                                    </Col>
                                </Row>
                                </TabPane>
                                <TabPane  tabId="3" className="tab-row-1">
                                    <Row>
                                    <div className="desc-kiri">
                                        <div className="overflow-auto">
                                            <div className="scroll-div"> 
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam, praesentium perferendis minima cumque ipsum suscipit. Tempore cupiditate, neque, temporibus quo deserunt aperiam commodi nam magnam odit repudiandae in. Eveniet.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam, praesentium perferendis minima cumque ipsum suscipit. Tempore cupiditate, neque, temporibus quo deserunt aperiam commodi nam magnam odit repudiandae in. Eveniet.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam, praesentium perferendis minima cumque ipsum suscipit. Tempore cupiditate, neque, temporibus quo deserunt aperiam commodi nam magnam odit repudiandae in. Eveniet.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam, praesentium perferendis minima cumque ipsum suscipit. Tempore cupiditate, neque, temporibus quo deserunt aperiam commodi nam magnam odit repudiandae in. Eveniet.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam, praesentium perferendis minima cumque ipsum suscipit. Tempore cupiditate, neque, temporibus quo deserunt aperiam commodi nam magnam odit repudiandae in. Eveniet.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam, praesentium perferendis minima cumque ipsum suscipit. Tempore cupiditate, neque, temporibus quo deserunt aperiam commodi nam magnam odit repudiandae in. Eveniet.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam, praesentium perferendis minima cumque ipsum suscipit. Tempore cupiditate, neque, temporibus quo deserunt aperiam commodi nam magnam odit repudiandae in. Eveniet.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam, praesentium perferendis minima cumque ipsum suscipit. Tempore cupiditate, neque, temporibus quo deserunt aperiam commodi nam magnam odit repudiandae in. Eveniet.

                                            </div>
                                        </div>
                                    </div>
                                      
                                    </Row>
                                </TabPane>
                            </TabContent>
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
export default (connect(Mapstatetoprops,{AddcartAction})(DetailProduct))