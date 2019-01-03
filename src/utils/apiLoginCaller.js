import axios from 'axios';
import * as Config from './../constants/Config';

export default function callLoginApi(endpoint, email, password) {
    var form = new FormData();
    form.append("email", email);
    form.append("password", password);
    return axios({
        async: true,
        crossDomain: true,
        method : 'POST',
        url: `${Config.API_URL_LOGIN}/${endpoint}`,
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'text/html; charset=utf-8'   
          }), 
        data: form    
    })
}