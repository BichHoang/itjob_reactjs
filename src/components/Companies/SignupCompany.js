import React, { Component } from 'react';

class SignupCompany extends Component {
    render() {
        return (
            <div>
                {/* <div className="modal fade" id="contact-form-modal" role="dialog" tabIndex={-1}> */}
                <div className="paddingTop">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <div className="modal-body__message">
                                    Contact us!
                                </div>
                                <div className="modal-body__message">
                                    We love meeting new people. :)
                                </div>
                                <div className="content">
                                    <div className="post-form">
                                        <form className="info form-horizontal" id="post_job_form" action="https://service.capsulecrm.com/service/newlead" acceptCharset="UTF-8" data-remote="true" method="post">
                                            <input name="utf8" type="hidden" defaultValue="✓" />
                                            <input type="hidden" name="FORM_ID" id="FORM_ID" defaultValue="acd4b09c-f91c-45f5-95ec-cd5b47b39d27" />
                                            <input type="hidden" name="COMPLETE_URL" id="COMPLETE_URL" defaultValue="http://itviec.com" />
                                            <input type="hidden" name="REVIEW_ID" id="REVIEW_ID" defaultValue={129839} />
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label" htmlFor="ORGANISATION_NAME">Company Name</label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="ORGANISATION_NAME" id="ORGANISATION_NAME" className="form-control" required="required" data-msg="can't be blank" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label" htmlFor="WEBSITE">Company Website</label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="WEBSITE" id="WEBSITE" className="form-control" required="required" data-msg="can't be blank" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label" htmlFor="CITY">City</label>
                                                <div className="col-sm-8">
                                                    <select name="CITY" id="CITY" className="form-control" data-msg="can't be blank">
                                                        <option selected="selected" value="Ho Chi Minh">Ho Chi Minh</option>
                                                        <option value="Ha Noi">Ha Noi</option>
                                                        <option value="Da Nang">Da Nang</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label" htmlFor="PERSON_NAME">Your Name</label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="PERSON_NAME" id="PERSON_NAME" className="form-control" required="required" data-msg="can't be blank" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label" htmlFor="JOB_TITLE">Your Title</label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="JOB_TITLE" id="JOB_TITLE" className="form-control" required="required" data-msg="can't be blank" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label" htmlFor="EMAIL">Your Email</label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="EMAIL" id="EMAIL" className="form-control" required="required" data-rule-email="true" data-msg-email="Please check your email" data-msg="can't be blank" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label" htmlFor="PHONE">Your Phone</label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="PHONE" id="PHONE" className="form-control" required="required" data-msg="can't be blank" />
                                                </div>
                                            </div>
                                            <div className="control-button">
                                                <input type="submit" name="commit" defaultValue="Send" className="button-red" data-disable-with="Send" />
                                                <div className="clearfix" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="post-job-notice">
                                        Note: We will respond to inquires only with complete information including a person's name and a company email address. We will not respond to inquires with incomplete information and Gmail or Yahoo email address.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="employer-registration-thankyou-modal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button className="modal-body__close" data-dismiss="modal" type="button">
                                    <span>×</span>
                                </button>
                                <div className="modal-body__message">
                                    Thanks for your interest in ITviec!
                                </div>
                                <div className="content">
                                    An ITviec Customer Value Specialist will reach out to you soon.
                                </div>
                                <div className="modal__logo">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default SignupCompany;