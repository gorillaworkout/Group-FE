import React, { Component,createRef,useEffect,useState } from 'react'
import Axios from 'axios'
import Header from './../../components/Header'
import HeaderAdmin from './headerAdmin'
import './admin.css'
import {API_URL_SQL} from './../../helpers/apiUrl'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {toast} from 'react-toastify'

const Admin = () => {
    // const []
    const [isOpen, setIsOpen] = useState(false)
    const [allProduct, setAllProd] = useState([])
    const [indexEdit, setIndexEdit] = useState(0)
    const [modalEdit, setModalEdit] = useState(false);
    const [modalAdd, setModalAdd] = useState(false)
    const [editForm, setEditForm] = useState({
        merk: createRef(),
        namaHp: createRef(),
        harga: createRef(),
        unit: createRef(),
        viewer: createRef(),
        gambar: createRef(),
        description: createRef(),
        warna: createRef(),
        storage: createRef(),
        screenSize: createRef(),
        screenResolution: createRef(),
        backCamera: createRef(),
        frontCamera: createRef(),
        batteryCapacity: createRef(),
        sim: createRef(),
        os: createRef(),
        grade: createRef()
    })
    const [addForm, setAddForm] = useState({
        merk: createRef(),
        namaHp: createRef(),
        harga: createRef(),
        unit: createRef(),
        viewer: createRef(),
        gambar: createRef(),
        description: createRef(),
        warna: createRef(),
        storage: createRef(),
        screenSize: createRef(),
        screenResolution: createRef(),
        backCamera: createRef(),
        frontCamera: createRef(),
        batteryCapacity: createRef(),
        sim: createRef(),
        os: createRef(),
        grade: createRef()
    })

    const toggle = () => setIsOpen(!isOpen);
    const toggleEdit = () => setModalEdit(!modalEdit)
    const toggleAdd = () => setModalAdd(!modalAdd)
    const MySwal = withReactContent(Swal)

    useEffect(()=>{
        Axios.get(`http://localhost:5001/product/prodHomeAll`)
        .then((res)=>{
        //    console.log(res.data)
        console.log(res.data)
           setAllProd(res.data.dataProduct)
        }).catch((err)=>{
          alert('alert di axios sql')
          console.log(err)
        })
    },[])

    const onAddDataClick=()=>{
        let obj = {
            merk: addForm.merk.current.value,
            namaHp: addForm.namaHp.current.value,
            harga: addForm.harga.current.value,
            unit: addForm.unit.current.value,
            viewer: addForm.viewer.current.value,
            gambar: addForm.gambar.current.value,
            description: addForm.description.current.value,
            warna: addForm.warna.current.value,
            storage: addForm.storage.current.value,
            screenSize: addForm.screenSize.current.value,
            screenResolution: addForm.screenResolution.current.value,
            backCamera: addForm.backCamera.current.value,
            frontCamera: addForm.frontCamera.current.value,
            batteryCapacity: addForm.batteryCapacity.current.value,
            sim: addForm.sim.current.value,
            os: addForm.os.current.value,
            grade: addForm.grade.current.value
        }
        Axios.post(`${API_URL_SQL}/product/addProd`, obj)
        .then((res)=>{
            console.log(obj)
            setModalAdd(false)
            setAllProd(res.data)
            toast('Tambah data berhasil!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }).catch((err)=>{
            console.log(err)
            toast.error('Error!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

    const onDeleteClick=(id, index)=>{
        MySwal.fire({
          title: `Are you sure want to delete ${allProduct[index].namaHp} ?`,
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            console.log(id, 'id')
            Axios.delete(`${API_URL_SQL}/product/deleteProd/${id}`)
            .then((res)=>{
                setAllProd(res.data)
                MySwal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success')
            }).catch((err)=>{
                toast.error('Error! Gagal delete', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(err)
            })
          }
        })
    }

    const onEditClick=(index)=>{
        setIndexEdit(index)
        setModalEdit(true)
    }

    const onSaveEditClick=(id)=>{
        let obj = {
            merk: editForm.merk.current.value,
            namaHp: editForm.namaHp.current.value,
            harga: editForm.harga.current.value,
            unit: editForm.unit.current.value,
            viewer: editForm.viewer.current.value,
            gambar: editForm.gambar.current.value,
            description: editForm.description.current.value,
            warna: editForm.warna.current.value,
            storage: editForm.storage.current.value,
            screenSize: editForm.screenSize.current.value,
            screenResolution: editForm.screenResolution.current.value,
            backCamera: editForm.backCamera.current.value,
            frontCamera: editForm.frontCamera.current.value,
            batteryCapacity: editForm.batteryCapacity.current.value,
            sim: editForm.sim.current.value,
            os: editForm.os.current.value,
            grade: editForm.grade.current.value
        }
        console.log(id)
        Axios.put(`${API_URL_SQL}/product/editProd/${id}`, obj)
        .then((res)=>{
            console.log(res.data)
            console.log(obj)
            setModalEdit(false)
            setAllProd(res.data)
            toast('Edit data berhasil!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }).catch((err)=>{
            toast.error('Error!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log(err)
        })
    }
    
    // RENDER
    const renderCard=()=>{
        if(allProduct){
            return allProduct.map((val, index)=>{
                return (
                    <div key={index}>
                        <Card className='card d-flex flex-row'>
                            <div>
                                <CardImg style={{width:'300px'}} src={val.gambar} alt={val.namaHp} />
                            </div>
                            <div>
                                <CardBody>
                                <CardTitle>{index+1}. {val.merk}</CardTitle>
                                <CardSubtitle className='mb-1'>{val.namaHp}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Harga: {val.harga}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Unit: {val.unit}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Viewer: {val.viewer}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Deskripsi: {val.description}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Warna: {val.warna}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Storage: {val.storage}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Screen Size: {val.screenSize}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Screen Resolution: {val.screenResolution}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Back Camera: {val.backCamera}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Front Camera: {val.frontCamera}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Battery Capacity: {val.batteryCapacity}</CardSubtitle>
                                <CardSubtitle className='mb-1'>SIM: {val.sim}</CardSubtitle>
                                <CardSubtitle className='mb-1'>OS: {val.os}</CardSubtitle>
                                <CardSubtitle className='mb-1'>Grade: {val.grade}</CardSubtitle>
                                <button onClick={()=>{onEditClick(index)}} className='mr-3 btn btn-outline-primary'>Edit</button>
                                <button onClick={()=>{onDeleteClick(val.id, index)}} className='btn btn-outline-danger'>Delete</button>
                                </CardBody>
                            </div>
                        </Card>
                    </div>
                )
            })
        }else{
            return (
                <div>Loading....</div>
            )
            
        }
    }

    const renderProducts=()=>{
        return (
            <div>
                <h2 className='d-flex justify-content-center'>Manage Products</h2>
                <div>
                    <button style={{marginLeft:'20px'}} onClick={toggleAdd} className='btn btn-outline-dark'>Add data</button>
                    {renderCard()}
                </div>
                
            </div>
        )
    }

    return ( 
        <div className='admin-body'>
            <Modal isOpen={modalAdd} toggle={toggleAdd}>
                <ModalHeader toggle={toggleAdd}>Add new data</ModalHeader>
                <ModalBody>
                    <textarea type='text' ref={addForm.merk} placeholder='Masukkan merk' className='form-control mb-2'/>
                    <input type='text' ref={addForm.namaHp} placeholder='Masukkan nama HP' className='form-control mb-2'/>
                    <input type='number' ref={addForm.harga} placeholder='Masukkan harga' className='form-control mb-2'/>
                    <input type='number' ref={addForm.unit} placeholder='Masukkan unit' className='form-control mb-2'/>
                    <input type='number' ref={addForm.viewer} placeholder='Masukkan jumlah viewer' className='form-control mb-2'/>
                    <input type='text' ref={addForm.gambar} placeholder='Masukkan gambar' className='form-control mb-2'/>
                    <input type='text' ref={addForm.warna} placeholder='Masukkan warna' className='form-control mb-2'/>
                    <input type='number' ref={addForm.storage} placeholder='Masukkan storage' className='form-control mb-2'/>
                    <input type='number' ref={addForm.screenSize} placeholder='Masukkan screen size' className='form-control mb-2'/>
                    <input type='text' ref={addForm.screenResolution} placeholder='Masukkan screen resolution' className='form-control mb-2'/>
                    <input type='text' ref={addForm.backCamera} placeholder='Masukkan back camera' className='form-control mb-2'/>
                    <input type='text' ref={addForm.frontCamera} placeholder='Masukkan front camera' className='form-control mb-2'/>
                    <input type='text' ref={addForm.batteryCapacity} placeholder='Masukkan battery capacity' className='form-control mb-2'/>
                    <input type='text' ref={addForm.sim} placeholder='Masukkan sim' className='form-control mb-2'/>
                    <input type='text' ref={addForm.os} placeholder='Masukkan os' className='form-control mb-2'/>
                    <input type='text' ref={addForm.grade} placeholder='Masukkan grade' className='form-control mb-2'/>
                    <textarea ref={addForm.description} cols='30' rows='7' placeholder='Masukkan deskripsi' className='form-control mb-2'/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onAddDataClick} color="primary">Add</Button>{' '}
                    <Button color="secondary">Cancel</Button>
                </ModalFooter>
            </Modal>
            {
                allProduct.length ?
                <Modal isOpen={modalEdit} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>Edit data {allProduct[indexEdit].namaHp}</ModalHeader>
                    <ModalBody>
                        <textarea type='text' defaultValue={allProduct[indexEdit].merk} ref={editForm.merk} placeholder='Masukkan merk' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].namaHp} ref={editForm.namaHp} placeholder='Masukkan nama HP' className='form-control mb-2'/>
                        <input type='number' defaultValue={allProduct[indexEdit].harga} ref={editForm.harga} placeholder='Masukkan harga' className='form-control mb-2'/>
                        <input type='number' defaultValue={allProduct[indexEdit].unit} ref={editForm.unit} placeholder='Masukkan unit' className='form-control mb-2'/>
                        <input type='number' defaultValue={allProduct[indexEdit].viewer} ref={editForm.viewer} placeholder='Masukkan jumlah viewer' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].gambar} ref={editForm.gambar} placeholder='Masukkan gambar' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].warna} ref={editForm.warna} placeholder='Masukkan warna' className='form-control mb-2'/>
                        <input type='number' defaultValue={allProduct[indexEdit].storage} ref={editForm.storage} placeholder='Masukkan storage' className='form-control mb-2'/>
                        <input type='number' defaultValue={allProduct[indexEdit].screenSize} ref={editForm.screenSize} placeholder='Masukkan screen size' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].screenResolution} ref={editForm.screenResolution} placeholder='Masukkan screen resolution' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].backCamera} ref={editForm.backCamera} placeholder='Masukkan back camera' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].frontCamera} ref={editForm.frontCamera} placeholder='Masukkan front camera' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].batteryCapacity} ref={editForm.batteryCapacity} placeholder='Masukkan battery capacity' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].sim} ref={editForm.sim} placeholder='Masukkan sim' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].os} ref={editForm.os} placeholder='Masukkan os' className='form-control mb-2'/>
                        <input type='text' defaultValue={allProduct[indexEdit].grade} ref={editForm.grade} placeholder='Masukkan grade' className='form-control mb-2'/>
                        <textarea defaultValue={allProduct[indexEdit].description} ref={editForm.description} cols='30' rows='7' placeholder='Masukkan deskripsi' className='form-control mb-2'/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={()=>onSaveEditClick(allProduct[indexEdit].id)} color="primary">Save</Button>{' '}
                        <Button color="secondary">Cancel</Button>
                    </ModalFooter>
                </Modal>
                : null
            }
            <div class="admin-navbar-kiri position-fixed">
                <h5 class="mx-3 mb-2 mt-4">Welcome Admin!</h5>
                <div class="menu mt-3">
                    <div class="isimenu px-4"><i class="fas fa-plus mr-2"></i> Products</div>
                    <div class="isimenu px-4"><i class="fas fa-plus mr-2"></i> Payment Confirmation</div>
                    <div class="isimenu px-4"><i class="fas fa-plus mr-2"></i> Transaction History</div>
                </div>
            </div>
            <div >
                <div className="header">
                    <HeaderAdmin/>
                </div>
                <div className='main-body'>
                    {renderProducts()}
                </div>
            </div>
        </div>
     );
}
 
export default Admin;