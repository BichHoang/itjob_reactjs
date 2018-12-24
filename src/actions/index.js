import callApi from './../utils/apiCaller';
import * as Types from '../constants/ActionType';

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