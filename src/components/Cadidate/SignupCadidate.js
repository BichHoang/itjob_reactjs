import React, { Component } from 'react';
import {register} from './../../actions/user';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class SignupCadidate extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email : '',
            password: '',
            confirm_password: ''
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
        
        handleSubmit = event => {
            event.preventDefault();
            const { name, email, password, confirm_password } = this.state;
            if (name && email && password && confirm_password) 
            if(password === confirm_password) {
               console.log("Dang ky:");
               console.log("email: ",email);
               console.log("pass:", password);
               const new_account = {
                   name,
                   email,
                   password
               }
               this.props.register(new_account);
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
                                            <input className="form-control" placeholder="Name" 
                                            required="required" onChange={this.onChange}
                                            type="text" 
                                            value={this.state.name} name="name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Email" 
                                            required="required" onChange={this.onChange}
                                            type="email" 
                                            value={this.state.email} name="email" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control"  value={this.state.password} onChange={this.onChange} placeholder="Password" required="required" data-rule-minlength={8} data-msg-minlength="Password must be at least 8 characters" data-msg="Please add password" type="password" name="password" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control"  value={this.state.confirm_password} onChange={this.onChange} placeholder="Confirm Password" required="required" data-rule-minlength={8} data-msg-minlength="Password must be at least 8 characters" data-msg="Please add password" type="password" name="confirm_password" />
                                        </div>
                                        <div className="form-group">
                                            <a className="right forgot-password" rel="nofollow" href="/users/password/new">Back to sign in!</a>
                                        </div>
                                        <br />
                                        <div className="form-group text-center">
                                            <button className="button-red space ibutton x-large">
                                            Sign Up
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
    const loggedIn = state.authentication.loggedIn;
    return {
        loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        register: (new_account) => {
            dispatch(register(new_account));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupCadidate);