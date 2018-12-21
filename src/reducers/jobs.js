import * as Types from '../constants/ActionType';

var initialState = [];

const jobs = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_JOBS:
            return [...action.jobs];
        default: return [...state];
    }
};

export default jobs;