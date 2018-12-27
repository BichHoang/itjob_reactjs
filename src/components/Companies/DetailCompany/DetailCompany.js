import React, { Component } from 'react';
import callApi from '../../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { getEmployerAPI, getSkillsEmployerAPI, getJobsEmployerAPI } from '../../../actions/index';
import {connect} from 'react-redux';

class DetailCompany extends Component {
    constructor(props){
        super(props);
        this.state = {
            job: [],
            skillofEmployer: '',
        }

    }
    componentDidMount(){
        let id = 0;
        let { match } = this.props;
        id = match.params.id;
        console.log(id)
        this.props.getEmployer(id);
        console.log(this.props.employer)
        this.props.getSkills(2);
        this.props.getJobs(this.props.employer.);
    }

    // getOurSkills(id){
    //     let url = 'admin_employer_detail_according_id/' + id;
    //     callApi(url, 'GET', null).then(res => {
    //        console.log(res)
    //     })
    // }
    // componentDidUpdate() {
    //     let {employer_id} = this.state;
    //     let url = 'admin_posts_according_IDemployer/' + employer_id;
    //     return callApi(url, 'GET', null).then(res => {
    //         console.log(res)
    //         //return res.data;
    //         this.setState({jobs: res.data})
    //      })
    // }

    render() {
        let { match } = this.props
        console.log(match.url)
        let { jobs } = this.props;
        let {employer} = this.props;
        console.log(employer)
         let result = "";
        console.log(jobs);
        if(jobs.length>0){
        result = jobs.map((job,index) => {
            return(
                <div key={index}>
                        <div className="company">
                            <div className="logo">
                                <div className="logo-wrapper" title="The Bosch Group is a leading global supplier of technology and services">
                                    <a><img alt="Robert Bosch Engineering And Business Solutions" src="https://cdn.itviec.com/employers/robert-bosch-engineering-and-business-solutions/logo/s65/ZzW1myNnUVsoAuRfMz4yNYqx/robert-bosch-engineering-and-business-solutions-logo.jpg" width={65} height={65} /></a>
                                </div>
                            </div>
                            <div className="company__description">
                                <div className="company__body">
                                    <div className="details">
                                        <div className="title-info">
                                            <div className="title">
                                                {job.Title}
                                                {/* <Link to={`${url}/${job.id}`}>{job.title}</Link> */}
                                            </div>
                                            <div className="info">
                                                <span className="gear-icon">Product</span>
                                                <span className="group-icon">301-500</span>
                                            <span className="globe-icon">Germany</span>
                                            </div>
                                        </div>
                                    <div className="city">
                                        <div className="text">Ho Chi Minh</div>
                                        <div className="text">Tan Binh</div>
                                    </div>
                                </div>
                                <div className="tag-list">
                                    <div className="tag">Java</div>
                                    <div className="tag">SAP</div>
                                    <div className="tag">.NET</div>
                                </div>
                            </div>
                            <div className="current-jobs">
                                <a target="_blank" href="/companies/robert-bosch-engineering-and-business-solutions#our-jobs">9 Job</a>
                                <i className="fa fa-caret-right" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        return (
            <div className="paddingTop70">
                <div className="company-content">
                    <div className="company-page">
                        <div className="cover-images-desktop cover-images-cropped">
                            <img width="100%" alt="img" src={employer.url_bia} />
                        </div>
                        <div className="headers hidden-xs">
                            <div className="logo-container">
                                <div className="has-overtime logo">
                                    <img alt="img" src={employer.url_avatar} />
                                </div>
                            </div>
                            <div className="name-and-info">
                                <h1 className="title">
                                    {employer.name}
                                </h1>
                                <span>
                                    <i className="fa fa-map-marker" />
                                    {employer.address}
                                </span>
                                <div className="company-info">
                                    <span>
                                    <i className="fa fa-cog" />Outsourcing
                                    </span>
                                    <span>
                                    <i className="fa fa-users" />
                                        {employer.employees}
                                    </span>
                                    <div className="country">
                                        <i className="flag-icon flag-icon-vn" />
                                        <span className="name">{employer.country}</span>
                                    </div>
                                </div>
                                <div className="working-date">
                                    <i className="fa fa-calendar" />
                                    <span>{employer.woking_time}</span>
                                </div>
                                <div className="overtime">
                                    <span>Website: </span><a target="_blank" href={employer.website}>{employer.website}</a>
                                </div>
                                <div className="overtime">
                                    <span>Facebook:</span><a target="_blank" href= {employer.link_facebook}>{employer.link_facebook}</a>
                                </div>
                            </div>
                            <div className="headers__actions text-right">
                                <a className="full-width button ibutton ibutton-red add-review-when-not-sign-in" rel="nofollow" data-add-review="true" data-toggle="modal" data-target="#sign-in-modal" >
                                    Add a review
                                </a>                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="row company-container">
                        <div className="col-md-8 col-left">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title headline">
                                        The leading provider of software outsourcing services in Vietnam
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div className="paragraph">
                                        <p>{employer.overview}</p>
                                    </div>
                                    <h3 className="panel-title">Our Key Skills</h3>
                                    <ul className="employer-skills">
                                        <li className="employer-skills__item"><a target="_blank" href="/it-jobs/java">Java</a>
                                        </li>
                                        <li className="employer-skills__item"><a target="_blank" href="/it-jobs/c++">C++</a>
                                        </li>
                                        <li className="employer-skills__item"><a target="_blank" href="/it-jobs/english">English</a>
                                        </li>
                                        <li className="employer-skills__item"><a target="_blank" href="/it-jobs/sql">SQL</a>
                                        </li>
                                        <li className="employer-skills__item"><a target="_blank" href="/it-jobs/android">Android</a>
                                        </li>
                                        <li className="employer-skills__item"><a target="_blank" href="/it-jobs/.net">.NET</a>
                                        </li>
                                    </ul>
                                    <div className="paragraph">
                                        <p />
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default jobs">
                                <div className="panel-heading">
                                    <h2 className="panel-title">Ours Jobs</h2>
                                </div>
                                <div className="panel-body">
                                    {result}
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Why You'll Love Working Here</h3>
                                </div>
                                <div className="panel-body">
                                    <ul className="reasons numbered list">
                                        <li className="item">
                                            <span className="number">1</span>
                                            <span className="content paragraph">Global Exposure</span>
                                        </li>
                                        <li className="item">
                                            <span className="number">2</span>
                                            <span className="content paragraph">Fast Track Career</span>
                                        </li>
                                        <li className="item">
                                            <span className="number">3</span>
                                            <span className="content paragraph">Diversified Jobs &amp; Technologies</span>
                                        </li>
                                    </ul>
                                    <div className="environment">
                                        <img width="100%" alt="img" src={employer.url_bia} />  
                                    </div>
                                    <div className="paragraph">
                                        <p>Join FPT Software – You can make it too!
                                    <br />
                                            <br />You can catch up with unlimited opportunities to work and live in different countries over the world, join world class software projects with trendiest technologies, innovative products &amp; services that bring great values to millions of people around the world, such as the world’s largest airplane brand, biggest broadcast satellite services in the US, the leading manufacturer of postage meter and mailroom equipment in EU, etc.
                                    <br />
                                            <br />You can choose your career path to become a technology expert or a professional manager which best fits your desire, qualifications and characteristics in an equal opportunity and open-minded culture workplace.
                                    <br />
                                            <br />You can balance your working and spiritual life in the environment of youth, multinational culture and creativity, improve impressively vital soft skills including English, Japanese, French… and communication skills through daily direct communication with global customers and employees.
                                    <br />
                                            <br />FPT Software is proud to accompany with thousands of individuals to continuously develop and explore their career path.
                                    <br />
                                            <br />You can make it too!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default" data-controller="employers--location" data-employers--location-key="AIzaSyAMccvlWFDk8E9b5Bk6YdPh1ZUht-JPcqU" data-employers--location-url="https://www.google.com/maps/embed/v1/place">
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        Locations
                                    </h3>
                                </div>
                                <div className="panel-body location">
                                    <div className="row">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8065412332803!2d108.15146261400956!3d16.075525788877083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2sDanang+University+of+Technology!5e0!3m2!1svi!2s!4v1516807397758" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
                                        <br></br>
                                        <div className="col-md-6">
                                            <p>Address: {employer.address}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="text-right">Total views: 111,641</p>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4 col-right">
                            <div className="panel panel-default company-ratings">
                                <div className="panel-heading">
                                    <h2 className="panel-title">Ratings</h2>
                                </div>
                                <div className="panel-body disable-user-select">
                                    <span className="rating-stars-box">
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <span style={{ width: '68.0%' }}>
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                        </span>
                                    </span>
                                    <span className="company-ratings__star-point">3.4</span>
                                    <hr className="divider" />
                                    <table className="company-rating-info__chart-recommend clearfix">
                                        <tbody>
                                            <tr>
                                                <td className="chart" data-rate={80} id="company-rating__rate">
                                                    <strong />
                                                </td>
                                                <td className="recommend">Recommend working here to a friend</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr className="divider" />
                                    <div className="view-more">
                                        <a href="/companies/fpt-software/review">See all ratings and reviews</a>
                                        <i className="fa fa-caret-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default company-ratings">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Feature Reviews</h3>
                                </div>
                                <div className="panel-body disable-user-select">
                                    <div className="review featured">
                                        <a className="title" href="/companies/fpt-software/review">''Sếp tốt, Lead giỏi học hỏi được nhiều kinh nghiệm ''</a><br/>
                                        <span className="round-rate-rating-stars-box">
                                            <span className="fa-stack">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                            <span className="fa-stack">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                            <span className="fa-stack">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                            <span className="fa-stack">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                            <span className="fa-stack unchecked">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                        </span>
                                        <div className="paragraph">
                                            Sếp tốt, Lead giỏi học hỏi được nhiều kinh nghiệm. Cảm thấy bản thân có một bước phát triển rõ rệt khi vào làm ở fsoft. Có nhiều khóa học để nhân viên có thể tham gia. Dự án của mình chưa bao giờ OT. Được tham gia nhiều các event ăn chơi của t...
                                        </div>
                                    </div>
                                    <br />
                                    <a className="button ibutton full-width ibutton-red big add-review-when-not-sign-in" rel="nofollow" data-add-review="true" data-toggle="modal" data-target="#sign-in-modal" >Add a review</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            
                <div className="modal fade" id="block-review-modal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button className="modal-body__close" data-dismiss="modal" type="button">
                                    <span>×</span>
                                </button>
                                <div className="modal-body__message">
                                    Oops! You can only submit 1 review per company per year.
                        </div>
                                <div className="modal__logo">
                                </div>
                                <div className="actions">
                                    <button className="submit button-light" data-dismiss="modal" type="button">
                                        See other reviews of this company.
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exceed-review-limit-modal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button className="modal-body__close" data-dismiss="modal" type="button">
                                    <span>×</span>
                                </button>
                                <div className="modal-body__message">
                                    Oops! We only allow 5 reviews per user.
                            <br /> Why not introduce this company to your co-worker?
                        </div>
                                <div className="actions">
                                    <a className="social button" target="_blank">Share on my Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="promote_submit_review" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button className="modal-body__close" data-dismiss="modal" type="button">
                                    <span>×</span>
                                </button>
                                <div className="message">
                                    <div className="top-salary">
                                        Bạn nghĩ gì về công ty mình đã từng làm?
                            </div>
                                    <br />
                                    <div className="free-book">
                                        Chia sẻ ngay để giúp cộng đồng Developer Chất có cái nhìn chân thực hơn về công ty đó.
                            </div>
                                </div>
                                <div className="actions">
                                    <div data-chosen-placeholder="Chọn công ty" data-reviewed-employer="[]" data-tracking-type="review_popup" data-width="250px" id="review-form-promotion" />
                                    <button className="button-red start-now">Bắt đầu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                        <div className="line">You have reached the limit of 5 Job Robots.</div>
                                        <div className="line">Want to create a new one? Click 'Unsubscribe' at the bottom of your Job Robot email and try again.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="follow-confirmed-modal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button className="modal-body__close" data-dismiss="modal" type="button">
                                    <span>×</span>
                                </button>
                                <div className="robby-image">
                                    <img src="assets/roby-jrjdyeah-f5e8849eaf88be88c054a7c6c66cf82c841d0d40aa04bfc725c574f8716d736d.png" />
                                </div>
                                <div className="header-title">
                                    <p className="done">Done!</p>
                                    <p>We'll email you new jobs and updates</p>
                                    <p>from FPT Software</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="job-mail-employer-modal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button className="modal-body__close" data-dismiss="modal" type="button">
                                    <span>×</span>
                                </button>
                                <div className="robby-image">
                                    <img src="assets/robby_jr_top_hi-306faa8c00104a165004ccc2459065b061dd3da245f8a2131583c0755adcf495.png" />
                                </div>
                                <div className="header-title">
                                    Follow FPT Software to get updates about new jobs.
                                </div>
                                <form className="simple_form job-mail false" id="jr-employer-form" role="form" noValidate="novalidate" action="/subscribe" acceptCharset="UTF-8" data-remote="true" method="post">
                                    <input name="utf8" type="hidden" defaultValue="✓" />
                                    <div className="field_for contents">
                                        <div className="input email required job_mail_email">
                                            <input defaultValue data-msg="can't be blank" data-rule-email="true" data-msg-email="Please check your email" className="string email required" required="required" aria-required="true" placeholder="Your email" type="email" name="job_mail[email]" id="job_mail_email" />
                                        </div>
                                        <div className="input hidden job_mail_city">
                                            <input className="hidden" type="hidden" name="job_mail[city]" id="job_mail_city" />
                                        </div>
                                        <div className="input hidden job_mail_query">
                                            <input defaultValue="FPT Software" className="hidden" type="hidden" name="job_mail[query]" id="job_mail_query" />
                                        </div>
                                        <div className="input hidden job_mail_employer_id">
                                            <input defaultValue={100} className="hidden" type="hidden" name="job_mail[employer_id]" id="job_mail_employer_id" />
                                        </div>
                                        <div className="input hidden job_mail_get_job_mail">
                                            <input defaultValue="true" name="get_job_mail" className="hidden" type="hidden" id="job_mail_get_job_mail" />
                                        </div>
                                        <div className="input hidden job_mail_source">
                                            <input defaultValue className="hidden" type="hidden" name="job_mail[source]" id="job_mail_source" />
                                        </div>
                                    </div>
                                    <div className="field_for actions blocks">
                                        <input type="submit" name="commit" defaultValue="Yes, send me job updates" className="button-red cta-button " data-disable-with="Yes, send me job updates" />
                                    </div>
                                </form>
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
        employer: state.employer,
        jobs : state.jobs,
        // skills: state.skills
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getEmployer: (id) => {
            dispatch(getEmployerAPI(id));
        },
        getSkills: (id) => {
            dispatch(getSkillsEmployerAPI(id));
        },
        getJobs: (id) => {
            dispatch(getJobsEmployerAPI(id));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailCompany);