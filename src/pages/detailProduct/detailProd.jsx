import React, { Component } from 'react';
import Axios from 'axios'
import { API_URL } from '../../helpers/apiUrl';
class DetailProduct extends Component {
    state = {  }
    componentDidMount(){
        Axios.get(`${API_URL}/products/`)
    }
    
    render() { 
        return ( 
            <div>
                detail product
            </div>
         );
    }
}
 
export default DetailProduct;