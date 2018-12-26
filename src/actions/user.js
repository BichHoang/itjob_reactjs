import callLoginApi from './../utils/apiLoginCaller';
import * as Types from '../constants/ActionType';

export const login = (email, password) => {
    return (dispatch) => {
        return callLoginApi('user/login', email, password).then(res => {
            dispatch(login_reducer("Bearer " + res.data.access_token));
            console.log(res.data.access_token);
        }).catch(error => {
            console.log(error.response.status);
            return error;
        });;
    }
}

export const login_reducer = (token) => {
    return {
        type: Types.LOG_IN_SUCCESS,
        token
    }
}

export const logout = () => {
    return {
        type: Types.LOG_OUT
    }
}

