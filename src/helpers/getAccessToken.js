import Axios from 'axios';
export function getAccessToken(current_account) {
    // let access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9pdC1qb2ItbG9naW4uaGVyb2t1YXBwLmNvbVwvcHVibGljXC9hcGlcL3VzZXJcL3JlZnJlc2giLCJpYXQiOjE1NDU4OTY4ODEsImV4cCI6MTU0NTkwMDQ4MSwibmJmIjoxNTQ1ODk2ODgxLCJqdGkiOiJMblBmOWJYMHRJSzhyU1Q0Iiwic3ViIjo1LCJwcnYiOiJiNmY3ZjQ3YWNiZjFhNWVlMTFiMmIwMjhkYzU2YWEzNWYyMGMxYTdlIn0.smUGdFcqVGpmGw_Jwgm4Kao5_oMsTmewCbNPseTyPDg";
    let access_token = "";
    console.log(JSON.stringify(current_account));
    Axios.post("http://it-job-login.herokuapp.com/public/api/user/refresh", 
    JSON.stringify(current_account),
    {headers: { 'Content-Type': 'application/json'}}
    ).then((res) => {
        access_token = "Bearer "+ res.data.access_token
        localStorage.setItem('access_token', access_token);
        console.log(access_token)
    }).catch((error) => {
       
    });
    return access_token;
}