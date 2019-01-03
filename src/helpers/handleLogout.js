import Axios from 'axios';
export function handleLogout(token) {
    console.log(token);
    Axios.defaults.headers.common['Authorization'] = token;
    return Axios.post("http://it-job-login.herokuapp.com/public/api/user/logout")
}