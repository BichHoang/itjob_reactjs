import { combineReducers } from 'redux';
import jobs from './jobs';

import employers from './employers';
import skills from './skills';
import editjob from './editjob';
import newjob from './newjob';
import authentication from './authentication';
import num_of_tabs from './num_of_tabs';

const appReducers = combineReducers({
    jobs,
    employers,
    skills,
    editjob,
    newjob,
    authentication,
    num_of_tabs
});

export default appReducers;