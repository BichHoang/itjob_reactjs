import * as Types from '../constants/ActionType';

var initialState = [];

const editjob = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_JOB:
            return [...action.job];
        default: return [...state];
    }
};

export default editjob;