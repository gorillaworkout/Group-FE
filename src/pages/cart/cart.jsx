import React, { Component } from 'react';
import './cart.css'
import Header from './../../components/Header'
import {RiCheckboxCircleLine} from 'react-icons/ri'
import {HiThumbUp} from 'react-icons/hi'
import {GiSelfLove} from 'react-icons/gi'
import {BsTrash ,BsPlusSquare} from 'react-icons/bs'
import {AiOutlineMinusSquare} from 'react-icons/ai'
import gorillaworkout from './../../assets/gorillaworkout.png'
class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
                <Header/>
                <div className="cart-luar">
                <div className="cart-dalem-kiri">
                <div className="semua-barang d-flex">
                            <div className="p-2">
                                <RiCheckboxCircleLine className="ikon-check"/>                              
                            </div>
                            <div className="p-2">
                                <p>Pilih Semua Barang</p>
                            </div>
                            <div className="ml-auto p-2">
                                <p style={{color:'green'}}>Hapus</p>    
                            </div>
                        </div>
                        <div className="render-cart">
                            <div className="ml-2 mt-1"> 
                                <RiCheckboxCircleLine className="ikon-check"/>                              
                            </div>
                            <div className="ml-3">
                                <div className="cart-1">
                                <HiThumbUp className="ikon-hi"/>
                                <p className="mt-1">GorillaStore</p>
                            </div>
                            <div className="cart-2">
                                <p>Jakarta Barat </p>
                            </div>
                            <div className="cart-3">
                                <img src={gorillaworkout} alt="" width="100" height="100"/>
                                <div>
                                    <p>IKAN SALMON KU INGIN MAKAN TP GAADA DUIT</p>
                                    <p>Rp.50.000</p>
                                </div>
                            </div>
                                <div className="cart-4 d-flex">
                                    <div className="mr-auto p-2 mt-1">
                                        <p>Tulis Catatan Untuk Toko</p>     
                                    </div>
                                    <div className="p-2 d-flex mt-3">
                                        <GiSelfLove className="ikon-gry"/>
                                        <BsTrash className="ikon-gry"/>
                                    <div className="cart-4-pm">
                                        
                                            <AiOutlineMinusSquare className="ikon-plus"/>
                                            <div>
                                                <p className="zero">0</p>
                                            </div>
                                            <BsPlusSquare className="ikon-plus"/>
                                     </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* batas */}
                        <div className="render-cart">
                            <div className="ml-2 mt-1"> 
                                <RiCheckboxCircleLine className="ikon-check"/>                              
                            </div>
                            <div className="ml-3">
                                <div className="cart-1">
                                <HiThumbUp className="ikon-hi"/>
                                <p className="mt-1">GorillaStore</p>
                            </div>
                            <div className="cart-2">
                                <p>Jakarta Barat </p>
                            </div>
                            <div className="cart-3">
                                <img src={gorillaworkout} alt="" width="100" height="100"/>
                                <div>
                                    <p>IKAN SALMON KU INGIN MAKAN TP GAADA DUIT</p>
                                    <p>Rp.50.000</p>
                                </div>
                            </div>
                                <div className="cart-4 d-flex">
                                    <div className="mr-auto p-2 mt-1">
                                        <p>Tulis Catatan Untuk Toko</p>     
                                    </div>
                                    <div className="p-2 d-flex mt-3">
                                        <GiSelfLove className="ikon-gry"/>
                                        <BsTrash className="ikon-gry"/>
                                    <div className="cart-4-pm">
                                        
                                            <AiOutlineMinusSquare className="ikon-plus"/>
                                            <div>
                                                <p className="zero">0</p>
                                            </div>
                                            <BsPlusSquare className="ikon-plus"/>
                                     </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BATAS */}
                        <div className="render-cart">
                            <div className="ml-2 mt-1"> 
                                <RiCheckboxCircleLine className="ikon-check"/>                              
                            </div>
                            <div className="ml-3">
                                <div className="cart-1">
                                <HiThumbUp className="ikon-hi"/>
                                <p className="mt-1">GorillaStore</p>
                            </div>
                            <div className="cart-2">
                                <p>Jakarta Barat </p>
                            </div>
                            <div className="cart-3">
                                <img src={gorillaworkout} alt="" width="100" height="100"/>
                                <div>
                                    <p>IKAN SALMON KU INGIN MAKAN TP GAADA DUIT</p>
                                    <p>Rp.50.000</p>
                                </div>
                            </div>
                                <div className="cart-4 d-flex">
                                    <div className="mr-auto p-2 mt-1">
                                        <p>Tulis Catatan Untuk Toko</p>     
                                    </div>
                                    <div className="p-2 d-flex mt-3">
                                        <GiSelfLove className="ikon-gry"/>
                                        <BsTrash className="ikon-gry"/>
                                    <div className="cart-4-pm">
                                        
                                            <AiOutlineMinusSquare className="ikon-plus"/>
                                            <div>
                                                <p className="zero">0</p>
                                            </div>
                                            <BsPlusSquare className="ikon-plus"/>
                                     </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/* line 2 */}
                    
                     <div className="cart-dalem-kanan">
                        <div className="cart-kanan">
                                <div className="cart-kanan-atas">
                                    <div className="discount">
                                            <div className="bulat">
                                                <p>%</p>
                                                
                                            </div>
                                            <div className="loading">
                                                <p>Makin Hemat Pakai Promo</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="cart-kanan-bawah">
                                        <div className="cart-kanan-bawah-ats">
                                                <p>Ringkasan Belanja</p>
                                        </div>
                                        <div className="cart-kanan-bawah-tng d-flex">
                                                <p className="mr-auto">Total Harga</p>
                                                <p className="p-2">Rp.150.000</p>
                                        </div>
                                        <div className="cart-kanan-bawah-bwh">
                                            <p>Beli(3)</p>
                                        </div>

                                </div>
                        </div>

                    </div>

                </div>
            </div>
         );
    }
}
 
export default Cart;