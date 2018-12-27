import callLoginApi from './../utils/apiLoginCaller';
import * as Types from '../constants/ActionType';

export const login = (email, password) => {
    return (dispatch) => {
        return callLoginApi('user/login', email, password).then(res => {
            let access_token = "Bearer " + res.data.access_token;
            let current_account = {
                account_id: res.data.account_id,
                remember_token: res.data.remember_token
            }
            // localStorage.setItem('access_token',access_token);
            // if(current_account) localStorage.setItem('current_account',current_account);
            dispatch(login_reducer(access_token, current_account));
            console.log(res.data);
        }).catch(error => {
            console.log(error.response.status);
            return error;
        });;
    }
}

export const login_reducer = (token, account) => {
    return {
        type: Types.LOG_IN_SUCCESS,
        token,
        account
    }
}

export const logout = () => {
    return {
        type: Types.LOG_OUT
    }
}

