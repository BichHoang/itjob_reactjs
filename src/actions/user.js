import callLoginApi from './../utils/apiLoginCaller';
import * as Types from '../constants/ActionType';

export const login = (email, password) => {
    return (dispatch) => {
        return callLoginApi('user/login', email, password).then(res => {
            //handle login
            let current_account = {
                access_token: "Bearer " + res.data.access_token,
                account_id: res.data.account_id,
                remember_token: res.data.remember_token
            }
            console.log(JSON.stringify(current_account));
            dispatch(login_reducer(current_account));
            console.log(res.data);
        }).catch(error => {
            console.log(error.response.status);
            return error;
        });;
    }
}

export const login_reducer = (account) => {
    return {
        type: Types.LOG_IN_SUCCESS,
        account
    }
}

export const logout = () => {
    return {
        type: Types.LOG_OUT
    }
}

