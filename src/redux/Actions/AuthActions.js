import Axios from 'axios'
import {API_URL} from './../../helpers/apiUrl'

export const LoginFunc = (obj) => {
    return {
        type: 'LOGIN',
        payload: obj
    }
}