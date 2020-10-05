import React, { Component } from 'react';
import Header from './../../components/Header'
import './myAccount.css'
import bgKecil from './../../assets/bayu.JPG'
import gorillaworkout from './../../assets/gorillaworkout.png'
import {FaRegMoneyBillAlt,FaUser,FaKey,FaLock} from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
class MyAccount extends Component {
    state = {
        activeTab:0
     }
    // var Dropdown = require("react-bootstrap-dropdown");
    toggle=(tab)=>{
        if(this.state.activeTab !== tab) {
            this.setState({activeTab:tab})
        }
    }
    render() { 
        return ( 
            <div>
                <Header/>
                <div className="div-luar">
                    <div className="div-dalem-kiri">
                        <div className="box-kiri">
                            <div className="img-kecil">
                                <img src={bgKecil} alt="error cok" width="50px" height="50px" style={{border:'1px solid black'}}/>
                                <p>Bayu Darmawan</p>
                            </div>
                            <div className="img-kecil2">
                                <img src={gorillaworkout} alt="error cok" width="50px" height="50px" />
                                <div className="go-bay">
                                    <div className="gobay-kiri">
                                        <p>Go-Bay Cash</p>
                                        <p>Go-Bay Points</p>
                                    </div>
                                    <div className="gobay-kanan"> 
                                        <p>Rp.1.000.500</p>
                                        <p>999</p>
                                    </div>
                                </div>
                            </div>
                            <div className="img-kecil3">
                            <FaRegMoneyBillAlt className="ikon"/>
                                <div className="go-bay">
                                    <div className="saldo-kiri">
                                        <p>Saldo</p>
                                    </div>
                                    <div className="saldo-kanan"> 
                                        <p>Rp.1.000.500</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <Dropdown className="big-dd">
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dd-atas">
                                    INBOX
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dd-bawah">
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1" className="dd-inside">Chat</Dropdown.Item>
                                    </Zoom>
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1"  className="dd-inside">Product Discussion</Dropdown.Item>
                                    </Zoom>
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1"  className="dd-inside">review</Dropdown.Item>
                                    </Zoom>
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1"  className="dd-inside">Complain Message</Dropdown.Item>
                                    </Zoom>
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1"  className="dd-inside">Update</Dropdown.Item>
                                    </Zoom>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>

                            <div>
                            <Dropdown className="big-dd">
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dd-atas">
                                    Pembelian
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dd-bawah">
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1" className="dd-inside">Waiting Payment</Dropdown.Item>
                                    </Zoom>
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1"  className="dd-inside">List Of Transaction</Dropdown.Item>
                                    </Zoom>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>

                            <div>
                            <Dropdown className="big-dd">
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dd-atas">
                                    My Profile
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dd-bawah">
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1" className="dd-inside">Wishlist</Dropdown.Item>
                                    </Zoom>
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1"  className="dd-inside">Toko Favorit</Dropdown.Item>
                                    </Zoom>
                                    <Zoom clear>
                                        <Dropdown.Item href="#/action-1"  className="dd-inside">Pengaturan</Dropdown.Item>
                                    </Zoom>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="div-dalem-kanan">
                        <div className="logokecil">
                            <FaUser className="logo-dlm"/>
                            <p>Bayu Darmawan</p>
                        </div>
                        <div>
                        <Nav tabs>
                                <NavItem className="cursor-nav">

                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}>
                                        Biodata Diri
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}>
                                        Daftar Alamat
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }}>
                                        Pembayaran
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '4' })}
                                        onClick={() => { this.toggle('4'); }}>
                                        Rekening Bank
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '5' })}
                                        onClick={() => { this.toggle('5'); }}>
                                        Notification
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '6' })}
                                        onClick={() => { this.toggle('6'); }}>
                                        Keamanan
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                                <TabPane  tabId="1" className="tab-row-1 tabpanel">
                                    <Row className="tabpanel">
                                    <div className="biodata">
                                            <div className="div-biodata">
                                                <div className="biodata-kiri">
                                                    <div className="img-biodata">
                                                        <img src={bgKecil} alt="error" width="280px" height="250px"/>
                                                        <div className="btn-pilih"> 
                                                            <p>Change Photo</p>
                                                        </div>
                                                    </div>
                                                    <div className="password-change">
                                                        <div className="btn-pass">
                                                            <FaKey className="ikon-1"/>
                                                            <p className="pass-1">Change Your Password</p>
                                                        </div>

                                                    </div>
                                                    <div className="pin-purwa">
                                                        <div className="btn-pin">
                                                        <FaLock className="ikon-1"/>
                                                        <p className="pass-1">Pin Purwa Store</p>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="biodata-kanan">
                                                    <div className="bio-kiri">
                                                        
                                                        <p>Ubah Biodata Diri</p>
                                                        <p>Nama</p>
                                                        <p>Tanggal Lahir</p>
                                                        <p>Jenis Kelamin</p>
                                                        <p>Ubah Kontak</p>
                                                        <div className="d-flex">
                                                            <p>Email</p> &nbsp;
                                                            <p className="ubah"> ubah</p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <p>Nomor Hp</p>  &nbsp;
                                                            <p className="ubah">ubah</p>
                                                        </div>


                                                    </div>
                                                    <div className="bio-kanan">
                                                      
                                                        <p>Bayu Darmawan</p>
                                                        <p>2 Agustus 1996</p>
                                                        <p>Laki-Laki</p>
                                                        <p>Ubah Kontak</p>
                                                        <p>darmawanbayu1@gmail.com</p>
                                                        <p>087785192296</p>

                                                    </div>
                                                </div>
                                            </div>
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
                                                            <p>OS</p>
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

                    </div>

                </div>
            </div>
         );
    }
}
 
export default MyAccount;