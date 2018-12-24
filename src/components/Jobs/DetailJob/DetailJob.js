import React, { Component } from "react";
import callApi from "../../../utils/apiCaller";

class DetailJob extends Component {
    constructor(props){
        super(props);
        this.state = {
            job : ''
        }

    }
    componentDidMount(){
        let { match } = this.props;
        let id = match.params.id;
        let url = 'posts/' + id;
        callApi(url, 'GET', null).then(res => {
            this.setState({ job: res.data })
        })
    }
    render() {
        let { job } = this.state;
        let imgURL = job.img;
        let jobDetail = <div className="job-detail">
        <div className="header">
            <div className="job_info">
                <h1 className="job_title">{job.title}</h1>
                <div className="tag-list">
                    <a className="big ilabel mkt-track" href="/it-jobs/html5">
                        <span>HTML5</span>
                    </a>
                    <a className="big ilabel mkt-track" href="/it-jobs/javascript">
                        <span>JavaScript</span>
                    </a>
                    <a className="big ilabel mkt-track" href="/it-jobs/reactjs">
                        <span>ReactJS</span>
                    </a>
                </div>
                <div className="clearfix" />
                <div className="salary not-signed-in">
                    <span className="salary-icon-stack">
                                <i className="fas fa-dollar-sign" />
                            </span>
                    <a className="view-salary" data-toggle="modal" data-target="#sign-in-modal">
                                Sign in to view
                            </a>
                    <div className="address__arrow" />
                </div>
                <div className="address">
                    <div className="fas fa-map-marker-alt" />
                    <div className="address__full-address">
                        <span> Doan Van Bo, District 4, Ho Chi Minh</span>
                    </div>
                    <a target="_blank" className="address__map" href="https://www.google.com/maps?q=11 Doan Van Bo District 4 Ho Chi Minh">
                        <div className="address__text">See map</div>
                        <div className="address__arrow" />
                    </a>
                </div>
                <div className="distance-time-job-posted">
                    <i className="fa fa-calendar" /> 5 days ago
                </div>
                <div className="space-btn" />
                <div className="clearfix" />
            </div>
        </div>
        <div className="job_reason_to_join_us">
            <h2 className="title">Top 3 Reasons To Join Us</h2>
            <div className="top-3-reasons">
                <ul>
                    <li> Awesome work environment</li>
                    <li>Insurance for your family</li>
                    <li>US training</li>
                </ul>
            </div>
        </div>
        <div className="job_description">
            <div className="title-apply-line">
                <h2 className="title">The Job</h2>
                <div className="clearfix" />
            </div>
            <div className="description">
                <p />
                <div>
                    <b />
                </div>
                <div>
                    <b>
                Your Impact
                <br />
                </b>
                </div>
                <div>
                    As a senior software engineer on the Frontend Core team, you'll be responsible for building and maintaining the core frontend tools and framework used by every product team at Axon. Your day-to-day responsibilities will include defining reusable React components, defining our organization's standards and best practices, optimizing our build and test tools to maximize efficiency, and refactoring our products to improve overall quality and user experience. You will also have the opportunity to contribute to open source tools and libraries.
                </div>
                <div />
                <div>
                    <br /> The ideal candidate for this role is someone who is good at executing on large projects, and isn't afraid to make big changes to fundamental aspects of our code. You should have a good sense of design and a strong drive to do right by our customers. As a senior engineer, you'll be expected to participate in design reviews and provide guidance for more junior team members in the form of PR reviews and general mentorship. You'll have the opportunity to make changes that benefit our customers and all other frontend engineers, so it's important to be able to explain what changes you're making and why, to make it easier for the other teams to understand.
                </div>
                <p />
            </div>
        </div>
        <div className="skills_experience">
            <h2 className="title">Your Skills and Experience</h2>
            <div className="experience">
                <p>
                    <strong>Requirements</strong>
                </p>
                <ul>
                    <li>
                        5+ years of experience in frontend / full-stack software engineering
                    </li>
                    <li>Ability to write clean and concise code</li>
                    <li>Deep understanding of frontend technologies</li>
                    <li>Ability to work within an existing codebase</li>
                    <li>Good sense of design</li>
                    <li>Knowledge of CS fundamentals</li>
                    <li>
                        Ability to explain core frontend principles and technologies to other engineers
                    </li>
                </ul>
                <strong>Technologies Used</strong>
                <ul>
                    <li>Javascript</li>
                    <li>Lerna</li>
                    <li>Webpack</li>
                </ul>
                <p />
            </div>
        </div>
        <div className="love_working_here">
            <h2 className="title">Why You'll Love Working Here</h2>
            <div className="culture_description">
                <p />
                <p>Benefits</p>
                <ul>
                    <li>Free lunch, gym, phone stipend, parking</li>
                    <li>Fun team activities and outings</li>
                    <li>Flexible working hours</li>
                </ul>
                We are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.
                <p />
            </div>
        </div>
        <div className="action-line-bottom">
            <a className="jr-apply-trigger apply_now button-red btn-block  " rel="nofollow" data-position="bottom" data-session="e82c17faa9000d3f4123a414911570eb" href="/job/senior-software-engineer-axon-3056/job_applications/new?source=an_jd_bottom">
                    Apply Now
                    </a>
        </div>
        <div className="space-bottom" />
    </div>
        return (
            <div className="paddingTop60">
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>
                <div className="show_content" id="job_45037">
                    <div className="main-content">
                        <div className="content">
                            <div className="jd-photos-container">
                                <div className="jd-photos" data-index={0} style={{ backgroundImage: "url(https://cdn.itviec.com/photos/23045/jd_photo_thumbnail/jd_photo_thumbnail.jpg?mASV41byC3BgwXUD4pxbW4hg)" }} />
                                <div className="jd-photos" data-index={1} style={{ backgroundImage: "url(https://cdn.itviec.com/photos/23047/jd_photo_thumbnail/jd_photo_thumbnail.jpg?zWqd1YccwTBTP7rM7S4wLqfw)" }} />
                                <div className="jd-photos" data-index={2} style={{ backgroundImage: "url(https://cdn.itviec.com/photos/23048/jd_photo_thumbnail/jd_photo_thumbnail.jpg?CPbxTT6kZLxzwZ2c4tGk1gv4)" }} />
                            </div>
                            <div className="main-entity">
                                <div className="side_bar">
                                    <div className="inside">
                                        <div className="logo">
                                            <a href="/companies/axon">
                                                <img alt="AXON Vietnam Big Logo" src={imgURL} />
                                            </a>
                                        </div>
                                        <div className="employer-info">
                                            <h3 className="name">
                                                        <a href="/companies/axon">AXON</a>
                                                    </h3>
                                            <div className="basic-info">
                                                <div className="short">AXON</div>
                                                <p>
                                                    <i className="fa fa-cog" />
                                                    <span> Product</span>
                                                </p>
                                                <p>
                                                    <i className="fa fa-users" />
                                                    <span> 301-500</span>
                                                </p>
                                                <div className="country-icon">
                                                    <i className="flag-icon flag-icon-vn" />
                                                    <span className="country-name">Vietnam</span>
                                                </div>
                                                <div className="working-date">
                                                    <i className="fa fa-calendar" />
                                                    <span>Monday - Friday</span>
                                                </div>
                                                <div className="overtime">
                                                    <i className="fa fa-clock-o" />
                                                    <span>No OT</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="employer-jobs-info">
                                            <div className="more_jobs">
                                                <div className="current-jobs links">
                                                    <a rel="nofollow" href="/companies/axon#our-jobs">
                                                4 Jobs
                                            </a>
                                                </div>
                                                <div className="employer-profile links">
                                                    <a href="/companies/axon">View our company page</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="outside-jr">
                                        <div className="saved-wrapper">
                                            <div className="saved-body">
                                                <a data-toggle="modal" data-target="#sign-in-modal">
                                                    <div className="big saved saved-default" />
                                                    <div className="saved-text saved-text-default">
                                                        <span className="save-job">Save Job</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {jobDetail}
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div id="job_mail_thankyou_wrapper" />
                <div className="modal fade" id="show-jd-photos-modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button className="close" data-dismiss="modal" type="button">
                                    <div className="circle-close" />
                                </button>
                                <div className="carousel slide" id="jd-page-carousel" role="dialog" tabIndex={-1}>
                                    <div className="carousel-inner">
                                        <div className="active item">
                                            <div className="img" data-slide-to={0} data-target="#job_description_photos" style={{ backgroundImage: "url(https://cdn.itviec.com/photos/23045/jd_photo_slideshow/jd_photo_slideshow.jpg?mASV41byC3BgwXUD4pxbW4hg)" }} />
                                            <div className="carousel-caption" />
                                        </div>
                                        <div className="item">
                                            <div className="img" data-slide-to={1} data-target="#job_description_photos" style={{ backgroundImage: "url(https://cdn.itviec.com/photos/23047/jd_photo_slideshow/jd_photo_slideshow.jpg?zWqd1YccwTBTP7rM7S4wLqfw)" }} />
                                            <div className="carousel-caption" />
                                        </div>
                                        <div className="item">
                                            <div className="img" data-slide-to={2} data-target="#job_description_photos" style={{ backgroundImage: "url(https://cdn.itviec.com/photos/23048/jd_photo_slideshow/jd_photo_slideshow.jpg?CPbxTT6kZLxzwZ2c4tGk1gv4)" }} />
                                            <div className="carousel-caption" />
                                        </div>
                                    </div>
                                    <div className="carousel__control-outer carousel__control-outer--left">
                                        <a rel="nofollow" className="carousel__control" data-slide="prev" href="#jd-page-carousel">
                                            <i className="fa fa-angle-left" />
                                        </a>
                                    </div>
                                    <div className="carousel__control-outer carousel__control-outer--right">
                                        <a rel="nofollow" className="carousel__control" data-slide="next" href="#jd-page-carousel">
                                            <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                    <ol className="carousel-indicators">
                                        <li className data-slide-to={0} data-target="#jd-page-carousel" />
                                        <li className data-slide-to={1} data-target="#jd-page-carousel" />
                                        <li className data-slide-to={2} data-target="#jd-page-carousel" />
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="job-robot-slidein">
                    <div className="waiting-icon">
                        <i className="fa fa-spinner fa-spin" />
                    </div>
                </div>
                <div className="modal fade" id="job-mail-subscribe-modal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button className="modal-body__close" data-dismiss="modal" type="button">
                                    <span>×</span>
                                </button>
                                <div className="modal-body__message">
                                    <div className="message">
                                        Don't miss your next{" "}
                                        <span className="keyword">
                                        ReactJS and JavaScript and HTML5
                                        </span>{" "} job in Ho Chi Minh City!
                                    </div>
                                    <div className="content">
                                        <div className="left-side">
                                            <p>
                                                Get new{" "}
                                                <span>
                                            <span className="keyword">
                                                ReactJS and JavaScript and HTML5
                                            </span>{" "} jobs in Ho Chi Minh
                                                </span>{" "} instantly by email with{" "}
                                                <span className="job-robot">Job Robot</span>. Free.
                                            </p>
                                            <form className="simple_form job-mail false" id="job-mail" data-section="top" role="form" noValidate="novalidate" action="/subscribe" acceptCharset="UTF-8" data-remote="true" method="post">
                                                <input name="utf8" type="hidden" defaultValue="✓" />
                                                <div className="form-blank-email">
                                                    <div className="field_for contents">
                                                        <div className="input email required job_mail_email">
                                                            <input defaultValue className="string email required col-xs-8" data-rule-email="true" data-msg="can't be blank" data-msg-email="Please check your email" data-rule-noplus="true" data-msg-noplus="Please check your email" required="required" aria-required="true" placeholder="Your email" type="email" name="job_mail[email]" id="job_mail_email" />
                                                        </div>
                                                        <div className="input hidden job_mail_city">
                                                            <input defaultValue="ho-chi-minh-hcm" className="hidden" type="hidden" name="job_mail[city]" id="job_mail_city" />
                                                        </div>
                                                        <div className="input hidden job_mail_query">
                                                            <input defaultValue="HTML5-JavaScript-ReactJS" className="hidden" type="hidden" name="job_mail[query]" id="job_mail_query" />
                                                        </div>
                                                        <div className="input hidden job_mail_source">
                                                            <input defaultValue="search_popup" className="hidden" type="hidden" name="job_mail[source]" id="job_mail_source" />
                                                        </div>
                                                        <div className="input hidden job_mail_locale">
                                                            <input defaultValue="en" className="hidden" type="hidden" name="job_mail[locale]" id="job_mail_locale" />
                                                        </div>
                                                    </div>
                                                    <div className="field_for actions">
                                                        <input type="submit" name="commit" defaultValue="Email me jobs" className="button-red" data-disable-with="Email me jobs" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="right-side">
                                            <div className="get-email-robot-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="job-mail-thankyou-modal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button className="modal-body__close" data-dismiss="modal" type="button">
                                    <span>×</span>
                                </button>
                                <div className="modal-body__message">
                                    <div className="message">Confirmed!</div>
                                    <div className="content">
                                        <div className="left-side">
                                            <div className="thankyou-message">
                                                <p>
                                                    Our <span className="robot">Job Robot</span> will deliver new <span className="keyword" /> jobs to you at <span id="email" />, up to one email per day.
                                                </p>
                                                <p>Delivering jobs to you makes him happy.</p>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <div className="thankyou-robot-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative-jobs" data-url="/it-jobs/senior-software-engineer-axon-3056/relatives" />
                <div className="job-show-page has-jr" />
                <div className="modal fade" id="jr-limit-exceed-modal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button className="modal-body__close" data-dismiss="modal" type="button">
                                    <span>×</span>
                                </button>
                                <div className="modal-body__message">
                                    Oops!
                                    <div className="content">
                                        <div className="line">
                                            You have reached the limit of 5 Job Robots.
                                        </div>
                                        <div className="line">
                                            Want to create a new one? Click 'Unsubscribe' at the bottom of your Job Robot email and try again.
                                        </div>
                                    </div>
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
export default DetailJob;
