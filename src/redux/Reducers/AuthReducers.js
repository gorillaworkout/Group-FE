const INITIAL_STATE = {
    id: 0,
    username: '',
    password: '',
    email: '',
    isLogin: '',
    isLoading: '',
    error: ''
}

export default (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {...state, ...action.payload, isLogin: true, isLoading: false}
        default:
            return state
    }
}