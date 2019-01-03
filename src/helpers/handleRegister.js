import Axios from 'axios';

export function handleRegister(new_account) {
    console.log(JSON.stringify(new_account));
    
    return Axios.post("http://it-job-login.herokuapp.com/public/api/user/register", 
    JSON.stringify(new_account),
    {headers: { 'Content-Type': 'application/json'}}
    )
}