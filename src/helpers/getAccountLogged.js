import Axios from 'axios';
export function getAccountLogged(token) {
    // let current_account = JSON.parse(localStorage.getItem('current_account'));
    // const token = current_account.access_token;
    Axios.defaults.headers.common['Authorization'] = token;
    Axios.post("http://it-job-login.herokuapp.com/public/api/user/me", {
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'text/html; charset=utf-8'   
          }), 
    }).then((res) => {
        console.log(res.data);
        return res.data;
    }).catch((error) => {
    });
}