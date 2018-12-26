import * as Types from '../constants/ActionType';

let initialState = JSON.parse(localStorage.getItem('current_account')) ? true : false;

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOG_IN_SUCCESS:
            localStorage.setItem('access_token', action.token);
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