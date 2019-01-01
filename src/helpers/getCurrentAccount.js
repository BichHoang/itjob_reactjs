export function getCurrentAccount() {
    const current_account = JSON.parse(localStorage.getItem('current_account'));
    return current_account;
}