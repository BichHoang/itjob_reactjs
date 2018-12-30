import * as Types from '../constants/ActionType';
import {getCurrentAccount} from './../helpers/getCurrentAccount';
import {checkRemember} from './../helpers/checkRemember';

//neu remember thi remember_token != -1
let initialState = {loggedIn: checkRemember()};

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOG_IN_SUCCESS:
            localStorage.setItem('current_account', JSON.stringify(action.account));
          return {
            loggedIn: true
          };
        case Types.LOG_OUT:
          localStorage.removeItem('current_account');
          return {
            loggedIn: false
          };
        default:
          return state
      }
};

export default authentication;