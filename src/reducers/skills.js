import * as Types from '../constants/ActionType';

var initialState = [];

export const skills = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_SKILLS:
            return [...action.skills];
        default: return [...state];
    }
};

export const skillofEmployer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_SKILLS_EMPLOYER:
            return [...action.skill];
        default: return [...state];
    }
};