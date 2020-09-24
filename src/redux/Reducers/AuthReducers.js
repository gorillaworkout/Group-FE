const INITIAL_STATE = {
    id: 0,
    username: '',
    password: '',
    emailL: '',
    isLogin: '',
    isLoading: '',
    error: ''
}

export default (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {...state, ...action.payload}
        default:
            break;
    }
}