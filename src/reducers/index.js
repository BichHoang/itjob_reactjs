import { combineReducers } from 'redux';
import jobs from './jobs';
import employers from './employers';
import skills from './skills';

const appReducers = combineReducers({
    jobs,
    employers,
    skills
});

export default appReducers;