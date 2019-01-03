export function handleSession() {
    const session = sessionStorage.getItem('session');
    let tabs = JSON.parse(localStorage.getItem('tabs'));
    const current_account = localStorage.getItem('current_account');
    console.log("tabs: ", tabs);
        if(session == null) {
            if(current_account){
                let length = (tabs==null) ? 0: tabs[tabs.length-1];
                if(length == null) length = 0;
                sessionStorage.setItem('session', JSON.stringify(length+1));
                tabs.push(length+1);
                localStorage.setItem('tabs',JSON.stringify(tabs));
            }
        }
    return tabs;
}