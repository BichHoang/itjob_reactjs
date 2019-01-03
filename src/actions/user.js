import callLoginApi from './../utils/apiLoginCaller';
import * as Types from '../constants/ActionType';
import {getAccountLogged} from './../helpers/getAccountLogged';
import {getCurrentAccount} from './../helpers/getCurrentAccount';
import {handleLogout} from './../helpers/handleLogout';
import {handleRegister} from './../helpers/handleRegister';

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
    const current_account = getCurrentAccount();
    if(current_account){
        const access_token = current_account.access_token;
        return (dispatch) => {
        return handleLogout(access_token).then((res) => {
            console.log(res);
            dispatch(logout_reducer());
        }).catch((error) => {
           
        });
    }
    }
}

export const logout_reducer = () => {
    return {
        type: Types.LOG_OUT
    }
}

export const register = (new_account) => {
    return (dispatch) => {
        return handleRegister(new_account).then((res) => {
            let current_account = {
                access_token: "Bearer " + res.data.access_token,
                account_id: res.data.account_id,
                remember_token: res.data.remember_token
            }
            console.log(JSON.stringify(current_account));
            console.log("Register: ",res);
            dispatch(register_reducer(current_account));
        }).catch((error) => {
            
        });
    }
}

export const register_reducer = (account) => {
    return {
        type: Types.REGISTER,
        account
    }
}
