import * as Types from '../constants/ActionType';
import {getCurrentAccount} from './../helpers/getCurrentAccount';
import {getAccessToken} from './../helpers/getAccessToken';

let current_account = getCurrentAccount();
if(current_account) localStorage.setItem('access_token', getAccessToken(current_account));
let access_token = localStorage.getItem('access_token');

let initialState = current_account ? true : false;

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOG_IN_SUCCESS:
            localStorage.setItem('access_token', action.token);
            if(action.account) {
              localStorage.setItem('current_account', JSON.stringify(action.account));
            }
          return {
            loggedIn: true
          };
        case Types.LOG_OUT:
          localStorage.removeItem('current_account');
          localStorage.removeItem('access_token');
          return {
            loggedIn: false
          };
        default:
          return {loggedIn: state}
      }
};

export default authentication;