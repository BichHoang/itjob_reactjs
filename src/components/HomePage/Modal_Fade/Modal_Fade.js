import React, { Component } from 'react';

class Modal_Fade extends Component {
    render() {
        return (
            <div className="modal fade" id="sign-in-modal" role="dialog" tabIndex={-1}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-body text-center">
                <button className="modal-body__close" data-dismiss="modal" type="button">
                    <span>×</span>
                </button>
                <ul className="login nav nav-tabs" role="tablist">
                    <li className="active tab-signup" role="presentation">
                        <a aria-expanded="true" data-toggle="tab" href="#signup-tab" role="tab">Create Account</a>
                    </li>
                    <li className="tab-signin" role="presentation">
                        <a aria-expanded="false" data-toggle="tab" href="#signin-tab" role="tab">Sign In</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div aria-labelledby="signup-tab" className="active fade in tab-pane" id="signup-tab" role="tabpanel">
                        <div className="signup-tab-content">
                            <p className="message">
                                Sign up to apply faster
                            </p>
                            <div className="social-errors" />
                            <p />
                            <div className="sign-in-action-wrapper">
                                <div className="sign-in-button gplus button">
                                    <a id="gplus-signin" rel="nofollow" href="/users/auth/google_oauth2">
                                        <div className="icon gplus-icon">
                                            <i className="fa fa-google-plus" />
                                        </div>
                                        <div className="sign-in-text">
                                            Sign up with Google
                                        </div>
                                    </a>
                                </div>
                                <div className="sign-in-button facebook button">
                                    <a id="facebook-signin" rel="nofollow" onclick="Login(this); return false;" href>
                                        <div className="icon">
                                            <i className="fa fa-facebook" />
                                        </div>
                                        <div className="sign-in-text">
                                            Sign up with Facebook
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="hr">
                                <hr />
                                <span>or</span>
                            </div>
                            <form className="new_user" id="signup_form" role="form" data-remote="true" data-controller="users--sign-up" action="/users" acceptCharset="UTF-8" method="post">
                                <input name="utf8" type="hidden" defaultValue="✓" />
                                <input type="hidden" name="authenticity_token" defaultValue="JpG9dzpZjEVQEr7cfu+1+M5EYJjp3Y/fZrpkVOLQT2vfPoYqNWo68zSgPTZk70CBQsKUBE8sxhW60Ji7OJ3ukQ==" />
                                <div className="form-group">
                                    <div className="form-error text-left" data-target="users--sign-up.error" />
                                </div>
                                <div className="form-group">
                                    <input maxLength={50} autofocus="autofocus" className="form-control" placeholder="Name" size={50} type="text" name="user[name]" id="user_name" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Email" required="required" data-rule-email="true" data-msg-email="Please correct the email address" data-msg="Please add email" data-rule-noplus="true" data-msg-noplus="Please correct the email address" type="email" defaultValue name="user[email]" id="user_email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Password" required="required" data-rule-minlength={8} data-msg-minlength="Password must be at least 8 characters" data-msg="Please add password" type="password" name="user[password]" id="user_password" />
                                </div>
                                <input type="submit" name="commit" defaultValue="Create My Account" rel="nofollow" className="x-large ibutton ibutton-red ibutton-create-account" data-disable-with="Create My Account" />
                            </form>
                        </div>
                    </div>
                    <div aria-labelledby="signin-tab" className="fade tab-pane" id="signin-tab" role="tabpanel">
                        <p className="message">
                            Sign in to unlock everything on ITviec
                        </p>
                        <div className="social-errors" />
                        <p />
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
                            <input type="hidden" name="authenticity_token" defaultValue="/yaFrXLmHxCYfvqVNgfvBKSBdPZK72iwBHinVPpkAYwp4YPsywU7nwAyGLDkwWfafCo09t45FFE+vodWiON9tw==" />
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
                <div className="response-confirmation">
                    <div className="message">
                        <p>Cool, you're almost done!</p>
                        <p>Go to your inbox now to confirm your email address before signing in.</p>
                    </div>
                    <button className="button-red sign-in-btn">Sign in</button>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}
export default Modal_Fade;
