import { combineReducers } from 'redux';
import jobs from './jobs';

import {employers} from './employers';
import {employer} from './employers';
import {skills} from './skills';
import {skillofEmployer} from './skills';
import editjob from './editjob';
import newjob from './newjob';
import authentication from './authentication';
import num_of_tabs from './num_of_tabs';
import locations from './locations';

const appReducers = combineReducers({
    jobs,
    employer,
    employers,
    skills,
    skillofEmployer,
    editjob,
    newjob,
    authentication,
    num_of_tabs,
    locations
});

export default appReducers;