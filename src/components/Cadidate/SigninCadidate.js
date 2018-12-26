import React, { Component } from 'react';
import callLoginApi from '../../utils/apiLoginCaller';
import Axios from 'axios';
import {login} from './../../actions/user';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class SigninCadidate extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: ''
        }
    }
        onChange = (event) => {
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
            event.preventDefault();
            const { email, password } = this.state;
            console.log('Logging');
            if (email && password) {
                this.props.login(email,password);
            }
        }
    
    render() {
        let {loggedIn} = this.props;
        console.log(loggedIn)
            if (loggedIn){            
                return (
                <Redirect
                    to={{
                    pathname: "/"
                    }}
                />)
            }
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
                                            <button className="button-red space ibutton x-large">
                                            Sign In
                                            </button>
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

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authentication.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login: (email, password) => {
            dispatch(login(email, password));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SigninCadidate);