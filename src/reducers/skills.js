import * as Types from '../constants/ActionType';

var initialState = [];

const skills = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_SKILLS:
            return [...action.skills];
        default: return [...state];
    }
};

export default skills;