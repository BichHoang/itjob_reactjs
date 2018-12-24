import { combineReducers } from 'redux';
import jobs from './jobs';

import employers from './employers';
import skills from './skills';
import editjob from './editjob';
import newjob from './newjob';
const appReducers = combineReducers({
    jobs,
    employers,
    skills,
    editjob,
    newjob
});

export default appReducers;