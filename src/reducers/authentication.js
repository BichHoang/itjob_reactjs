import * as Types from '../constants/ActionType';

var initialState = [];

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOG_IN_SUCCESS:
            localStorage.setItem('access_token', action.token);
          return {
            loggedIn: true
          };
        default:
          return state
      }
};

export default authentication;