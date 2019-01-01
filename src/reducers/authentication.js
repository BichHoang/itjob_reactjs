import * as Types from '../constants/ActionType';
import {getCurrentAccount} from './../helpers/getCurrentAccount';
import {checkRemember} from './../helpers/checkRemember';

//neu remember thi remember_token != -1
let initialState = checkRemember();

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOG_IN_SUCCESS:
            localStorage.setItem('current_account', JSON.stringify(action.account));    
            localStorage.setItem('tabs',JSON.stringify([1]));  
            sessionStorage.setItem('session',JSON.stringify(1));
            let remember = false;
            if(action.account.remember_token) remember = true;
          return {
            loggedIn: true,
            remember
          };
        case Types.LOG_OUT:
          localStorage.removeItem('current_account');
          localStorage.removeItem('tabs');
          console.log("logout thanh cong");
          return {
            loggedIn: false
          };
        default:
          return state
      }
};

export default authentication;