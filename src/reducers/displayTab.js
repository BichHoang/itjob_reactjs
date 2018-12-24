import * as Types from './../constants/ActionType';
var initialState = false;

const displayTab = (state = initialState, action) => {
    switch(action.type){
        case Types.OPEN_TAB:
            return true;
        case Types.CLOSE_TAB:
            return false;
        default :
            return state;
    }
}

export default displayTab;