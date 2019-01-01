import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApiSon(endpoint, method = 'GET', body) {
    return axios({
        method,
        // url: `${Config.API_URL}/${endpoint}`,
        //url: `${Config.API_URL_TRONG}/${endpoint}`,
        // url: `${Config.API_URL}/${endpoint}`,
        // url: `${Config.MY_API}/${endpoint}`,
        url: `${Config.API_URL_SON}/${endpoint}`,
        data: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }).catch(err => {
        console.log(err);
    });
}