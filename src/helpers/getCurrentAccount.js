export function getCurrentAccount() {
    const current_account = JSON.parse(localStorage.getItem('current_account'));
    if(current_account)
        return current_account;
    return {
        account_id: '',
        access_token: '',
        remember_token: '-1'
    }
}