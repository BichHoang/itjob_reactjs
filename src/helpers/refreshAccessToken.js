import Axios from 'axios';
export function refreshAccessToken(current_account) {
    console.log(JSON.stringify(current_account));
    
    Axios.post("http://it-job-login.herokuapp.com/public/api/user/refresh", 
    JSON.stringify(current_account),
    {headers: { 'Content-Type': 'application/json'}}
    ).then((res) => {
        current_account.access_token = "Bearer "+ res.data.access_token;
        localStorage.setItem('current_account', JSON.stringify(current_account));
        console.log(current_account.access_token);
    }).catch((error) => {
       
    });
}