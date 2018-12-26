import React, { Component } from 'react';
import callLoginApi from '../../utils/apiLoginCaller';
import Axios from 'axios';
class SigninCadidate extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error : null,
            isLoggedIn: false,
            curUser : null,
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
        onChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            console.log(target.name);   
            this.setState({
              [name]: value
            });
            console.log(this.state.email)
            console.log(this.state.password)
        }
        onSave(event) {
            event.preventDefault();
            let {email} = this.state;
            let {password} = this.state;
            let token = "";
            console.log(email + ' - ' +password);
            callLoginApi('user/login', email, password).then(res => {
                localStorage.setItem('token', res.data.access_token);
                // this.setState({
                //     authenticity_token: res.data.access_token,
                // })
                token = "Bearer " + res.data.access_token;
                // let token = "Bearer " + this.state.authenticity_token;
                console.log(token)
                this.getAccount(token);
                this.setState({
                    curUser : localStorage.getItem('userCur'),
                })
            })
        }
        getAccount(token){
            Axios.defaults.headers.common['Authorization'] = token;
            Axios.post("http://it-job-login.herokuapp.com/public/api/user/me", {
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'text/html; charset=utf-8'   
                  }), 
            }).then((res) => {
                console.log(res);   
                localStorage.setItem('userCur', res.data.data);
            }).catch((error) => {
                this.setState({error: 'Invalid email or password'});
            });
        }
        handleSubmit = event => {
            //event.preventDefault();
            console.log(this.state.curUser)
            if (this.state.curUser){            
                this.setState(prevState => ({
                    isLoggedIn: !prevState.isLoggedIn
                }))
                window.location.replace("/");
            }
            else
            {
                this.setState({error: 'Invalid email or password'});
            }
        }
    
    render() {
        return (
            <div className="paddingTop">
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>
                <div className="hidden-xs hidden-sm" id="feedback">
                    <a className="uservoice_link">FEEDBACK</a>
                </div>
                <div className="user-sessions">
                    <div className="main-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-xs-12">
                                <div className="content">
                                    <div className="robby-image">
                                        <img src="" alt="img" />
                                    </div>
                                    <div className="message">
                                        Sign in now to access your account on ITviec.
                                </div>
                                    <br />
                                    <div className="sign-in-action-wrapper">
                                        <div className="sign-in-button gplus button">
                                            <a id="gplus-signin" rel="nofollow">
                                                <div className="icon gplus-icon">
                                                    <i className="fa fa-google-plus" />
                                                </div>
                                                <div className="sign-in-text">
                                                    Sign in with Google
                                            </div>
                                            </a>
                                        </div>
                                        <div className="sign-in-button facebook button">
                                            <a>
                                                <div className="icon">
                                                    <i className="fa fa-facebook" />
                                                </div>
                                                <div className="sign-in-text">
                                                    Sign in with Facebook
                                            </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hr">
                                        <hr />
                                        <span>or</span>
                                    </div>
                                    <form role="form" onSubmit={this.handleSubmit} >
                                        <input name="utf8" type="hidden" defaultValue="✓" />
                                        <input type="hidden" name="authenticity_token" defaultValue="" />
                                        <div className="form-group">
                                            <div className="form-error text-left" data-target="users--sign-in.error" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Email" 
                                            required="required" data-rule-email="true" onChange={this.onChange}
                                            data-msg-email="Please correct the email address" 
                                            data-msg="Please add email" type="email" 
                                            value={this.state.email} name="email" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control"  value={this.state.password} onChange={this.onChange} placeholder="Password" required="required" data-rule-minlength={8} data-msg-minlength="Password must be at least 8 characters" data-msg="Please add password" type="password" name="password" />
                                        </div>
                                        <div className="form-group">
                                            <a className="right forgot-password" rel="nofollow" href="/users/password/new">Forgot password?</a>
                                        </div>
                                        <br />
                                        <div className="form-group text-center">
                                            <input type="hidden" name="sign_in_then_review" defaultValue="false" />
                                            <input type="submit" name="commit"  onClick={this.onSave} defaultValue="Sign in" className="button-red space ibutton x-large" data-disable-with="Sign in" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
                <div id="logo">
                    <div className="logo-image" />
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}       
 export default SigninCadidate;