import * as Types from '../constants/ActionType';

var initialState = [];

const locations = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_LOCATIONS:
            return [...action.locations];
        default: return [...state];
    }
};

export default locations;