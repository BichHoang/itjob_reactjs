import * as Types from '../constants/ActionType';

var initialState = [];

export const employers = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_EMPLOYERS:
            return [...action.employers];
        default: return [...state];
    }
};

export const employer = (state = null, action) => {
    switch (action.type) {
        case Types.GET_EMPLOYER:
            return action.employer;
        default: return state;
    }
};