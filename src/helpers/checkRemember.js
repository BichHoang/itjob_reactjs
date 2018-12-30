import {getCurrentAccount} from './getCurrentAccount';
import {refreshAccessToken} from './refreshAccessToken';

export function checkRemember() {
    const current_account = getCurrentAccount();
    const remember_token = current_account.remember_token;
    console.log(current_account);
    if(remember_token !== "-1") {
        console.log("remember");
        refreshAccessToken(current_account);
        return true;
    }
    return false;
}