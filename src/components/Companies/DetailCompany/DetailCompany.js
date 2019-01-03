import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getEmployerAPI } from '../../../actions/index';
import {connect} from 'react-redux';

class DetailCompany extends Component {
    componentDidMount(){
        let id = 0;
        let { match } = this.props;
        id = match.params.id;
        this.props.getEmployer(id);
    }

    render() {
        let {employer} = this.props;
        console.log(employer)
        let company = {};
        let jobs = [];
        let skills = [];
        let reviews = null;
        if(employer != null){
            jobs = employer.jobs;
            company = employer.employer;
            skills = employer.skills;
            reviews = employer.reviews;
        }
        let review = "";
        let result = "";
        let rsskills = "";
        if(jobs != null){
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
                                                <Link to={`/jobs/${job.id}`}>{job.Title}</Link>
                                            </div>
                                            <div className="info">
                                                <span className="group-icon">Deadline: {job.Start_day} - {job.End_day}</span>
                                            </div>
                                        </div>
                                </div>
                                {/* <div className="tag-list">
                                    <div className="tag">Java</div>
                                    <div className="tag">SAP</div>
                                    <div className="tag">.NET</div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        if(skills != null){
            rsskills = skills.map((skill,index) => {
                return(
                    <li key={index} className="employer-skills__item"><a target="_blank" href="/it-jobs/java">{skill.name}</a>
                    </li>
                )
            })}
        let total = 0;
        let rate = 0;
        if(reviews != null){
            total = reviews.length;
            console.log(total)
            review = reviews.map((cmt, index) => {
                rate = rate + cmt.star_rate;
                return (
                    <div key={index} className="panel-body disable-user-select">
                        <div className="review featured">
                            <a className="title">{cmt.title_review}</a><br/>
                            <span className="round-rate-rating-stars-box">
                                <span className={(cmt.star_rate > 0)? "fa-stack" : "fa-stack unchecked"}>
                                    <i className="fa fa-square fa-stack-2x" />
                                    <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                </span>
                                <span className={(cmt.star_rate > 1)? "fa-stack" : "fa-stack unchecked"}>
                                    <i className="fa fa-square fa-stack-2x" />
                                    <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                </span>
                                <span className={(cmt.star_rate > 2)? "fa-stack" : "fa-stack unchecked"}>
                                    <i className="fa fa-square fa-stack-2x" />
                                    <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                </span>
                                <span className={(cmt.star_rate > 3)? "fa-stack" : "fa-stack unchecked"}>
                                    <i className="fa fa-square fa-stack-2x" />
                                    <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                </span>
                                <span className={(cmt.star_rate > 4)? "fa-stack" : "fa-stack unchecked"}>
                                    <i className="fa fa-square fa-stack-2x" />
                                    <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                </span>
                            </span>
                            <div className="paragraph">
                                {cmt.content}
                            </div>
                        </div>
                        <br />
                    </div>
                )
            })
        }
        let star = 0;
        if(rate > 0 && total > 0){
            star = rate/total;
        }
        const star_style = {
            width: star*20+'.0%'
        }
        return (
            <div className="paddingTop70">
                <section className="rating-widget">
                    <div className="rating-stars text-center">
                        <ul id="stars">
                        <li className="star" title="Poor" data-value={1}>
                            <i className="fa fa-star fa-fw" />
                        </li>
                        <li className="star" title="Fair" data-value={2}>
                            <i className="fa fa-star fa-fw" />
                        </li>
                        <li className="star" title="Good" data-value={3}>
                            <i className="fa fa-star fa-fw" />
                        </li>
                        <li className="star" title="Excellent" data-value={4}>
                            <i className="fa fa-star fa-fw" />
                        </li>
                        <li className="star" title="WOW!!!" data-value={5}>
                            <i className="fa fa-star fa-fw" />
                        </li>
                        </ul>
                    </div>
                    <div className="success-box">
                        <div className="clearfix" />
                        <div className="text-message" />
                        <div className="clearfix" />
                    </div>
            </section>
                <div className="company-content">
                    <div className="company-page">
                        <div className="cover-images-desktop cover-images-cropped">
                            <img width="100%" alt="img" src={company.url_bia} />
                        </div>
                        <div className="headers hidden-xs">
                            <div className="logo-container">
                                <div className="has-overtime logo">
                                    <img alt="img" src={company.url_avatar} />
                                </div>
                            </div>
                            <div className="name-and-info">
                                <h1 className="title">
                                    {company.name}
                                </h1>
                                <span>
                                    <i className="fa fa-map-marker" />
                                    {company.address}
                                </span>
                                <div className="company-info">
                                    <span>
                                    <i className="fa fa-cog" />Outsourcing
                                    </span>
                                    <span>
                                    <i className="fa fa-users" />
                                        {company.employees}
                                    </span>
                                    <div className="country">
                                        <i className="flag-icon flag-icon-vn" />
                                        <span className="name">{company.country}</span>
                                    </div>
                                </div>
                                <div className="working-date">
                                    <i className="fa fa-calendar" />
                                    <span>{company.woking_time}</span>
                                </div>
                                <div className="overtime">
                                    <span>Website: </span><a target="_blank" href={company.website}>{company.website}</a>
                                </div>
                                <div className="overtime">
                                    <span>Facebook:</span><a target="_blank" href= {company.link_facebook}>{company.link_facebook}</a>
                                </div>
                            </div>
                            <div className="headers__actions text-right">
                                <a className="full-width button ibutton ibutton-red add-review-when-not-sign-in" rel="nofollow" data-add-review="true" data-toggle="modal" data-target="#sign-in-modal" >
                                    Follow
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
                                        <p>{company.overview}</p>
                                    </div>
                                    <h3 className="panel-title">Our Key Skills</h3>
                                    <ul className="employer-skills">
                                        {rsskills}
                                        <li className="employer-skills__item"><a target="_blank" href="/it-jobs/java">Java</a>
                                        </li>
                                        <li className="employer-skills__item"><a target="_blank" href="/it-jobs/c++">C++</a>
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
                                    <div className="environment">
                                        <img width="100%" alt="img" src={company.url_bia} />  
                                    </div>
                                    <div className="paragraph">
                                        <p>Join {company.name} – You can make it too!
                                    <br />
                                            <br />You can catch up with unlimited opportunities to work and live in different countries over the world, join world class software projects with trendiest technologies, innovative products &amp; services that bring great values to millions of people around the world, such as the world’s largest airplane brand, biggest broadcast satellite services in the US, the leading manufacturer of postage meter and mailroom equipment in EU, etc.
                                    <br />
                                            <br />You can choose your career path to become a technology expert or a professional manager which best fits your desire, qualifications and characteristics in an equal opportunity and open-minded culture workplace.
                                    <br />
                                            <br />You can balance your working and spiritual life in the environment of youth, multinational culture and creativity, improve impressively vital soft skills including English, Japanese, French… and communication skills through daily direct communication with global customers and employees.
                                    <br />
                                            <br />{company.name} is proud to accompany with thousands of individuals to continuously develop and explore their career path.
                                    <br />
                                            <br />You can make it too!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
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
                                            <p>Address: {company.address}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="text-right">Total views: 111,641</p>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-right">
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
                                        <span style={star_style}>
                                        {/* <span styles={`{{ width: ${star*20}.0% }}`}> */}
                                        {/* <span style={{ width: '70.0%' }}> */}
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                        </span>
                                    </span>
                                    <span className="company-ratings__star-point">{(star > 0) ? star : 'Chưa có lượt đánh giá'}</span>
                                    <hr className="divider" />
                                    <table className="company-rating-info__chart-recommend clearfix">
                                        <tbody>
                                            <tr>
                                                <td className="chart" data-rate={80} id="company-rating__rate">
                                                    <strong />
                                                </td>
                                                <td className="recommend">Đánh giá: {total} lượt</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="panel panel-default company-ratings">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Feature Reviews</h3>
                                </div>
                                {review}
                                <button className="button ibutton full-width ibutton-red big add-review-when-not-sign-in" id="btnAddReview" >Add a review </button>
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
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getEmployer: (id) => {
            dispatch(getEmployerAPI(id));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailCompany);