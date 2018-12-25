import axios from 'axios';
import * as Config from './../constants/Config';

export default function callLoginApi(endpoint, email, password) {
    return axios({
        method : 'POST',
        url: `${Config.API_URL_LOGIN}/${endpoint}`,
        headers: new Headers({
            'Content-Type': 'application/json'
          }), 
        body: {
            email: email,
            password: password
        }
    }).catch(err => {
        console.log(err);
    });
}