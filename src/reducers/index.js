import { combineReducers } from 'redux';
import jobs from './jobs';

const appReducers = combineReducers({
    jobs,
});

export default appReducers;