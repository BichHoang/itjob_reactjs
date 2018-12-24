import callApi from './../utils/apiCaller';
import * as Types from '../constants/ActionType';

export const getAllJobsAPI = () => {
    return (dispatch) => {
        return callApi('/admin_post', 'GET', null).then(res => {
            dispatch(getAllJobs(res.data))
            //Bichs ngu
        });
    }
}

export const getAllJobs = (jobs) => {
    return {
        type: Types.GET_ALL_JOBS,
        jobs
    }
}

export const getAllEmployersAPI = () => {
    return (dispatch) => {
        // return callApi('admin_employer_api', 'GET', null).then(res => {
        //     dispatch(getAllEmployers(res.data))
        // });
        return callApi('employers', 'GET', null).then(res => {
            dispatch(getAllEmployers(res.data))
        });
    }
}

export const getAllEmployers = (employers) => {
    return {
        type: Types.GET_ALL_EMPLOYERS,
        employers
    }
}

export const getAllSkillsAPI = () => {
    return (dispatch) => {
        return callApi('skills', 'GET', null).then(res => {
            dispatch(getAllSkills(res.data))
        });
    }
}

export const getAllSkills = (skills) => {
    return {
        type: Types.GET_ALL_SKILLS,
        skills
    }
}

export const openTab = () => {
    return {
        type : Types.OPEN_TAB
    }
}
export const closeTab = () => {
    return {
        type : Types.CLOSE_TAB
    }
}