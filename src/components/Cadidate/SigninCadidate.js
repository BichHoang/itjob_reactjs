import React, { Component } from 'react';

class SigninCadidate extends Component {
    render() {
        return (
            <div className="paddingTop">
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>
                <div className="hidden-xs hidden-sm" id="feedback">
                    <a href="https://itviec.uservoice.com/forums/207426-general/filters/new" className="uservoice_link" target="_blank">FEEDBACK</a>
                </div>
                <div className="user-sessions">
                    <div className="main-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-xs-12">
                                <div className="content">
                                    <div className="robby-image">
                                        <img src="assets/roby-jrjdyeah-f5e8849eaf88be88c054a7c6c66cf82c841d0d40aa04bfc725c574f8716d736d.png" />
                                    </div>
                                    <div className="message">
                                        Sign in now to access your account on ITviec.
                                </div>
                                    <br />
                                    <div className="sign-in-action-wrapper">
                                        <div className="sign-in-button gplus button">
                                            <a id="gplus-signin" rel="nofollow" href="/users/auth/google_oauth2">
                                                <div className="icon gplus-icon">
                                                    <i className="fa fa-google-plus" />
                                                </div>
                                                <div className="sign-in-text">
                                                    Sign in with Google
                                            </div>
                                            </a>
                                        </div>
                                        <div className="sign-in-button facebook button">
                                            <a id="facebook-signin" rel="nofollow" onclick="Login(this); return false;" href>
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
                                    <form role="form" data-controller="users--sign-in" data-remote="true" action="/sign_in" acceptCharset="UTF-8" method="post">
                                        <input name="utf8" type="hidden" defaultValue="✓" />
                                        <input type="hidden" name="authenticity_token" defaultValue="nfnmNyHWlaG/wzlhyAGNTZP3cbPPw84Sp+bSWT5ctYMzXde7y0Fh3tlXCVp3ZOziMUCL7r0wOQq8MUSxfJZi5Q==" />
                                        <div className="form-group">
                                            <div className="form-error text-left" data-target="users--sign-in.error" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Email" required="required" data-rule-email="true" data-msg-email="Please correct the email address" data-msg="Please add email" type="email" defaultValue name="user[email]" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password" required="required" data-rule-minlength={8} data-msg-minlength="Password must be at least 8 characters" data-msg="Please add password" type="password" name="user[password]" />
                                        </div>
                                        <div className="form-group">
                                            <a className="right forgot-password" rel="nofollow" href="/users/password/new">Forgot password?</a>
                                        </div>
                                        <br />
                                        <div className="form-group text-center">
                                            <input type="hidden" name="sign_in_then_review" defaultValue="false" />
                                            <input type="submit" name="commit" defaultValue="Sign in" className="button-red space ibutton x-large" data-disable-with="Sign in" />
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