import {getCurrentAccount} from './getCurrentAccount';
import {refreshAccessToken} from './refreshAccessToken';

export function checkRemember() {
    const current_account = getCurrentAccount();
    console.log(current_account);
    let remember = false;
    if(current_account) {
        const remember_token = current_account.remember_token;
        const access_token = current_account.access_token;
        if(remember_token != null) {
            console.log("remember");
            refreshAccessToken(current_account);
            return {
                loggedIn: true,
                remember: true
            };
        }
        if(access_token != null) return {
            loggedIn: true,
            remember
        };
    }
    return {
        loggedIn: false,
        remember
    };
}