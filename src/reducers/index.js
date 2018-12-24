import { combineReducers } from 'redux';
import jobs from './jobs';
import editjob from './editjob';
import newjob from './newjob';

const appReducers = combineReducers({
    jobs,
    editjob,
    newjob
});

export default appReducers;