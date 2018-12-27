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
        return callApi('admin_employer_api', 'GET', null).then(res => {
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

export const getEmployerAPI = (id) => {
    return (dispatch) => {
        let url = 'admin_employer_api/' + id;
        return callApi(url, 'GET', null).then(res => {
            dispatch(getEmployer(res.data[0]))
        });
    }
}
export const getEmployer = (employer) => {
    return {
        type: Types.GET_EMPLOYER,
        employer
    }
}

export const getAllSkillsAPI = () => {
    return (dispatch) => {
        return callApi('admin_skill_api', 'GET', null).then(res => {
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

export const getSkillsEmployerAPI = (id) => {
    return (dispatch) => {
        let url = 'admin_employer_detail_according_id/' + id;
        return callApi(url, 'GET', null).then(res => {
            dispatch(getSkillsEmployer(res.data))
        });
    }
}
export const getSkillsEmployer = (skill) => {
    return {
        type: Types.GET_SKILLS_EMPLOYER,
        skill
    }
}

export const getJobsEmployerAPI = (id) => {
    return (dispatch) => {
        let url = 'admin_posts_according_IDemployer/' + id;
        return callApi(url, 'GET', null).then(res => {
            console.log(res)
            dispatch(getJobsEmployer(res.data))
        });
    }
}
export const getJobsEmployer = (jobs) =>{
    return {
        type: Types.GET_JOBS_EMPLOYER,
        jobs
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