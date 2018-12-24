import * as Types from '../constants/ActionType';

var initialState = [];

const newjob = (state = initialState, action) => {
    switch (action.type) {
        case Types.NEW_JOB:
            return [...action.job];
        default: return [...state];
    }
};

export default newjob;