import callApi from './../utils/apiCaller';
import callLoginApi from './../utils/apiLoginCaller';
import * as Types from '../constants/ActionType';

export const login = () => {
    return (dispatch) => {
        return callLoginApi('/login', 'POST', null).then(res => {
            dispatch(getAllJobs(res.data))
        });
    }
}
export const getAllJobsAPI = () => {
    return (dispatch) => {
        return callApi('/admin_post', 'GET', null).then(res => {
            dispatch(getAllJobs(res.data))
        });
    }
}

export const getAllJobs = (jobs) => {
    return {
        type: Types.GET_ALL_JOBS,
        jobs
    }
}

export const getJobsAPI = () => {
    return (dispatch) => {
        return callApi('/posts', 'GET', null).then(res => {
            dispatch(getJobs(res.data))
        });
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

export const getJobs = (jobs) => {
    return {
        type: Types.GET_JOBS,
        jobs
    }
}

// edit post
export const editJobAPI = () => {
    return (dispatch) => {
        return callApi('/posts', 'PUT', null).then(res => {
            dispatch(editJob(res.data));
        })
    }
}

export const editJob = (job) => {
    return {
        type: Types.EDIT_JOB,
        job
    }
}

// new post
export const newJobAPI = () => {
    return (dispatch) => {
        return callApi('/post', 'POST', null).then(res => {
            dispatch(newJob(res.data));
        })
    }
}

export const newJob = (job) => {
    return {
        type: Types.NEW_JOB,
        job
    }
}

//
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