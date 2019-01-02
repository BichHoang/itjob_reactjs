import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApiSon(endpoint, method = 'GET', body) {
    const data = {
        location: 'all',
        skill: 'all',
        order_by: 'Description',
        order_dir: 'desc',
        page: '2'
    }
    console.log(JSON.stringify(data));
    return axios({
        method,
        // url: `${Config.API_URL}/${endpoint}`,
        // url: `${Config.API_URL_TRONG}/${endpoint}`,
        // url: `${Config.API_URL}/${endpoint}`,
        // url: `${Config.MY_API}/${endpoint}`,
        url: `${Config.API_URL_SON}/${endpoint}`,
        headers: { 'Content-Type': 'application/json'},
        params: data
    }).catch(err => {
        console.log(err);
    });
}