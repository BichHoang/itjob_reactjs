import * as Types from '../constants/ActionType';

var initialState = [];

const employers = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_EMPLOYERS:
            return [...action.employers];
        default: return [...state];
    }
};

export default employers;