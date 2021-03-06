import React, { Component,createRef } from 'react';
import {AddcartAction} from '../../redux/Actions'
import './Payment.css'
import { API_URL, API_URL_SQL, priceFormatter } from '../../helpers/apiUrl';
import {connect} from 'react-redux'
import Header from './../../components/Header'
import {RiCheckboxCircleLine} from 'react-icons/ri'
import {HiThumbUp} from 'react-icons/hi'
import {GiSelfLove} from 'react-icons/gi'
import {BsTrash ,BsPlusSquare} from 'react-icons/bs'
import {AiOutlineMinusSquare} from 'react-icons/ai'
import gorillaworkout from './../../assets/gorillaworkout.png'
import {Link} from 'react-router-dom' 
import Axios from 'axios'
import {Modal,ModalHeader,ModalBody,ModalFooter,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {toast} from 'react-toastify'  
import { CodeSharp } from '@material-ui/icons';
const MySwal = withReactContent(Swal)

class Payment extends Component {

    state = { 
        sqlCart:[],
        cc:createRef(),
        bukti:createRef(),
        successful:false,
        isOpen:false,
        idUser:0
     }

     componentDidMount(){
        var idUsers = JSON.parse(localStorage.getItem('id'))
        this.setState({idUser:idUsers})
        // Axios.get(`http://localhost:5001/cart/allQty/${this.state.idUser}`)
        Axios.get(`${API_URL_SQL}/cart/allQty/${idUsers}`)      
        .then((res)=>{
                console.log(res.data)
                this.setState({sqlCart:res.data})

        }).catch((err)=>{
            console.log(err)
        })

     }
     renderTable(){
         return this.state.sqlCart.map((val,index)=>{
             return (
                 <>
            
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
                                    <img src={val.gambar} alt="" width="100" height="100"/>
                                    <div>
                                        <p>{val.namaHp}</p>
                                        <p>{val.Qty} x {priceFormatter(val.harga)} = {priceFormatter(val.Qty * val.harga)}</p>
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
                                            <p className="zero">{val.Qty}</p>
                                        </div>
                                        <BsPlusSquare className="ikon-plus"/>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                   
                 </>
             )
         })
     }

    //  renderHarga=()=>{
    //      return this.state.sqlCart.map((val,index)=>{
    //          return (
    //              <>
                  
    //              </>
    //          )
    //      })
    //  }

     onCheckOutClick=()=>{
         this.setState({isOpen:true})
     }

     renderTotalHarga=()=>{
        //  var total = 

        var total = this.state.sqlCart.reduce((total,num)=>{
            console.log(num.harga)
            console.log(num.Qty)
            return total+(num.harga*num.Qty)
        },0)
        return total
     }


     onBayarClick=()=>{
         const {pilihan}=this.state
         if(pilihan==='1'){
             this.onbayarpakebukti()
         }else if (pilihan ==='2'){
             this.onbayarpakeCC()
         }else {
            toast.error(`Choose Your Payment Method`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
             
         }
     }

     onbayarpakebukti=()=>{
        console.log(this.props.id)
        console.log(this.state.bukti.current.value)
        var sqlcart=this.state.sqlCart.map((val)=>{
            return {
                ProductId:val.ProductId,
                harga:val.harga,
                Qty:val.Qty
            }
        })
        Axios.post(`${API_URL_SQL}/cart/addNewTransactions`,{
            userId:this.props.id,
            tanggalPembayaran:new Date().getTime(),
            buktiPembayaran:this.state.bukti.current.value,
            sqlCart:sqlcart
        }).then((res)=>{
            console.log(res.data)
            this.setState({isOpen:false})
            this.setState({successful:true})
            this.setState({sqlCart: res.data.cart})
            this.props.AddcartAction(res.data.cart)
            toast.error(`Waiting Admin For Accepting Your Payment! THANKYOU`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
            
        }).catch((err)=>{
            console.log(err)
        })

     }
     
    lunhAlgo=(answer)=>{
        
    var input = this.state.cc.current.value
    var x = input
    var counter = 0; //  ngitung total digit
    var output1 = 0; // ngitung genap
    var output2 = 0; // ngitung ganjil
    var pecah = 0; // ngitung per digit, ngeluarin digit
    do{
        pecah = x%10
        x = Math.floor(x/10)
        counter++
    }while (x>0)
    
    if (counter %2 == 0){
        this.state.countergen = 1 
    } else{
        this.state.countergen = 0
    }
    var z = input
    var a = Math.floor(z/Math.pow(10,15))
    var hacep = 0
    do{
        hacep = z%10
        z = Math.floor(z/10)
        if (this.state.countergen%2 == 0){
            var pecah2 = hacep*2
            if (pecah2 >= 10){
                var pecah3 = pecah2%10;
                var pecah4 = Math.floor(pecah2/10)
                output1 += pecah3+pecah4  
            }else{
                output1 += pecah2 //genap
            }
        } else if(this.state.countergen%2 != 0){
            output2 += hacep //ganjil
        }
        this.state.countergen++
    } while(z > 0)
    var total = output1+output2
    if(total % 10 == 0){
        if(counter == 16){
            if(a == 4) {
                console.log('visa')
                this.setState({ccName:'VISA'})
                return `VISA`
            }else {
                console.log('master card')
                this.setState({ccName:'Master Card'})
                return `Master Card`
            }
        }else if (counter == 15){
            console.log('amex')
            this.setState({ccName:'AMEX'})
            return `AMEX`
        }else if (counter == 13){ 
            console.log('visa')
            this.setState({ccName:'VISA'})
            return `VISA`
        }
    }else{
        console.log('not valid')
        this.setState({ccName:1})
        this.setState({test:'BISA DONG CUK'})
        // console.log(this.state.ccName)
        // ccredux({cc:'not valid'})
        return 'not valid'
    }  

    }
    onbayarpakeCC=()=>{
        this.lunhAlgo()
        const result = this.lunhAlgo(this.result2)
        console.log(result)
        var sqlcart=this.state.sqlCart.map((val)=>{
            return {
                ProductId:val.ProductId,
                harga:val.harga,
                Qty:val.Qty
            }
        })
        if(result ==='not valid'){
            toast.error(`Wrong Number! Check Your Credit Card Number`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });

        }else {
            console.log('masuk pake cc')
            Axios.post(`${API_URL_SQL}/cart/addNewTransactionsCC`,{
            userId:this.props.id,
            tanggalPembayaran:new Date().getTime(),
            buktiPembayaran:this.state.cc.current.value,
            sqlCart:sqlcart
            }).then((res)=>{
                this.setState({isOpen:false})
                this.setState({successful:true})
                this.setState({sqlCart: res.data.cart})
                this.props.AddcartAction(res.data.cart)
                toast.error(`Payment Success! THANKYOU`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                })
            }).catch((err)=>{
                console.log(err)
            })
        }
    }







    render() { 
        
        if(this.state.successful){
            return <Redirect to='/'></Redirect>
        }
        if(this.props.role==='user'){
            console.log(this.state.sqlCart)
            if(this.state.sqlCart.length===0){
                return(
                    <>
                        <Header/>
                        <div>
                            <center>
                                <div>
                                    <h1>BELANJA DULU <br/>
                                        BARU KESINI
                                    </h1>
                                </div>
                            </center>
                        </div>

                    </>
                )
               
            }else {
                return ( 
                    <div> 
                    <Header/>
                    <Modal isOpen={this.state.isOpen} toggle={()=>this.setState({isOpen:false})}>
                            <ModalHeader toggle={()=>this.setState({isOpen:false})}>Pembayaran</ModalHeader>
                            <ModalBody>
                                <select onChange={(e)=>this.setState({pilihan:e.target.value})} className='form-control' defaultValue={0} >
                                    <option value="0" hidden>Select payment</option>
                                    <option value="1">input bukti transfer</option>
                                    <option value="2">Credit card</option>
                                </select>
                                {
                                    this.state.pilihan==2?
                                    <input className='form-control' ref={this.state.cc} placeholder='masukkan cc'/>
                                    :
                                    this.state.pilihan==1?
                                    <input className='form-control' ref={this.state.bukti}  placeholder='input bukti pembayaran'/>
                                    :
                                    null
                                }
                                <div>
                                  {/* Total Harga  {priceFormatter(this.renderTotalHarga())} */}
                                  Total Harga: {priceFormatter(this.renderTotalHarga())}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                {/* <ButtonUi onClick={this.onBayarClick}> */}
                                    <button onClick={this.onBayarClick}>
                                    Bayar   
                                    </button>
                                {/* </ButtonUi> */}
                            </ModalFooter>
                        </Modal>
    
                     {/* BATAS MODALS */}
    
                    {/* BATAS MODALS */}
                    <div className="cart-luar">
                    <div className="cart-dalem-kiri">
                    <div className="semua-barang d-flex">
                                
                                <div className="p-2">
                                    <p>Checkout</p>
                                </div>
                                <div className="p-2">
                                    Alamat Pengiriman
                                </div>
                    
                    </div>
                    <div className="address">
                        <div className="isi-address">
                            <div className="address-dlm-1">
                                <p>Bayu(Rumah)</p>
                            </div>
                            <div className="address-dlm-2">
                                <p>087785192296</p>
                            </div>
                            <div className="address-dlm-3">
                                <p>Jalan Jalan Aja biar Gak stress</p>
                            </div>
                        </div>
                        <div className="btn-address">
                            <div className="alamat-lain">
                                <p>Pilih Alamat Lain</p>
                            </div>
                            <div className="beberapa-alamat">
                                <p>Kirim ke Beberapa Alamat</p>
                            </div>
                        </div>
                    </div>
                        {/*  */}
                            {this.renderTable()}
                            {/*  */}
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
                                                    <p className="mr-auto">Total Harga ({this.props.cart.length} Product)</p>
                                                    <p className="p-2">{priceFormatter(this.renderTotalHarga())}</p>
                                            </div>
                                            
                                            <div className="cart-kanan-bawah-bwh" onClick={this.onCheckOutClick}>           
                                            <p>Beli ({this.props.cart.length})</p>                                                                                       
                                            </div>
                                    </div>
                            </div>
                        </div>      
                            {/* {this.renderHarga()} */}
                     
        
                    </div>
                </div>
                );

            }
            
        }else {
            return <Redirect to='/'></Redirect>
        }
    }
}

const MapstatetoProps=({Auth})=>{
    return {
        ...Auth
    }
}
 
// export default Payment;
export default connect(MapstatetoProps,{AddcartAction})(Payment)