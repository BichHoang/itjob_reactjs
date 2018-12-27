import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class JobDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            job_id: 0,
            title: "",
            description: "",
            requirement: "",
            salary: "",
            amount_of_people: 0,
            start_date: "",
            end_date: "",
            is_redirect: false,
            alert: "",
        }
    }

    componentDidMount(){
        let { match } = this.props
        let url = match.url
        const id = url.substring(url.lastIndexOf('/') + 1)
        this.setState({ job_id: id });
        const path = 'http://5c0e9da8e1498a00133648b9.mockapi.io/posts/' + id   
        Axios.get(path)
        .then(res => {
            const job = res.data
            this.setState({
                title: job.title,
                description: job.description,
                requirement: job.requirement,
                salary: job.salary,
                amount_of_people: job.amount_of_people,
                start_date: job.start_date,
                end_date: job.end_date,
            });
        });
    }

    onApplyJob = () => {
        this.setState({ is_redirect: true })
        
    }
    render() {
        if (this.state.is_redirect === true){
            var location = this.props;
            let { match } = this.props;
            let url = match.url;
            const new_url = url + '/apply-job';
            return <Redirect to={{
                pathname: new_url,
                state: {
                    from: location,
                    job_name: this.state.title,
                    job_id: this.state.job_id
                }
            }}/>        
        }
        let { match } = this.props
        let url = match.url
        let new_url = url + '/candidates-list'
        return (
            <div className="edit-page">
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>
                <div className="show_content" id="job_45037">
                    <div className="main-content">
                        <div className="content">
                            {/* Last updated: "2018-12-18 07:19:25 +0700"*/}
                            <div className="jd-photos-container">
                                <div className="jd-photos" data-index={0} style={{ backgroundImage: 'url(https://cdn.itviec.com/photos/23045/jd_photo_thumbnail/jd_photo_thumbnail.jpg?mASV41byC3BgwXUD4pxbW4hg)' }}  />
                                <div className="jd-photos" data-index={1} style={{ backgroundImage: 'url(https://cdn.itviec.com/photos/23047/jd_photo_thumbnail/jd_photo_thumbnail.jpg?zWqd1YccwTBTP7rM7S4wLqfw)' }}  />
                                <div className="jd-photos" data-index={2} style={{ backgroundImage: 'url(https://cdn.itviec.com/photos/23048/jd_photo_thumbnail/jd_photo_thumbnail.jpg?CPbxTT6kZLxzwZ2c4tGk1gv4)' }}  />
                            </div>
                            <div className="main-entity">
                                <div className="side_bar">
                                    <div className="inside">
                                        {/* Last updated: "2018-12-18 07:19:25 +0700"*/}
                                        <div className="logo">
                                            <a href="/companies/axon"><img alt="AXON Vietnam Big Logo" src="https://cdn.itviec.com/employers/axon/logo/w170/5A5yijCCzJ2QpgdQAnzegS6J/axon-logo.png" /></a>
                                        </div>
                                        <div className="employer-info">
                                            <h3 className="name">
                                                <a href="/companies/axon">AXON</a>
                                            </h3>
                                            <div className="basic-info">
                                                <div>
                                                    <i className="fa fa-cog fa-fw" aria-hidden="true"/>
                                                    &nbsp; Product
                                                </div>
                                                <div>
                                                    <i className="fa fa-users fa-fw" aria-hidden="true" />
                                                    &nbsp; 301-500
                                                </div>
                                                <div className="country-icon">
                                                    <i className="flag-icon flag-icon-vn fa-fw" aria-hidden="true" />
                                                    &nbsp; Vietnam
                                                </div>
                                                <div>
                                                    <i className="fa fa-calendar fa-fw" aria-hidden="true" />
                                                    &nbsp; Monday - Friday
                                                </div>
                                                <div>
                                                    <i className="fa fa-clock-o fa-fw" aria-hidden="true" />
                                                    &nbsp; No OT
                                                </div>
                                            </div>
                                        </div>
                                    <div className="employer-jobs-info">
                                        <div className="more_jobs">
                                            <div className="current-jobs links">
                                                <a rel="nofollow" href="/companies/axon#our-jobs">4 Jobs</a>
                                            </div>
                                            <div className="employer-profile links">
                                                <a href="/companies/axon">View our company page</a>
                                            </div>
                                            <div className="employer-profile links">
                                                <Link to={{
                                                    pathname: new_url,
                                                    state: {
                                                    from: location,
                                                    job_name: this.state.title
                                                    }
                                                }}>View all applied candidates</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outside-jr">
                                    <div className="saved-wrapper">
                                        <div className="saved-body">
                                            <a data-toggle="modal" data-target="#sign-in-modal" >
                                                <div className="big saved saved-default" />
                                                <div className="saved-text saved-text-default">
                                                    <span className="save-job">Save Job</span>
                                                </div>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="job-detail">
                                <div className="header">
                                    <div className="job_info">
                                        <h1 className="job_title">
                                            <b>{this.state.title}&nbsp;&nbsp;</b>
                                            <Link to={`${url}/edit`}> 
                                                <i className="fas fa-edit icon-color"></i>
                                            </Link>&nbsp;&nbsp;
                                            <i className="fas fa-trash-alt icon-color"></i>
                                        </h1>
                                        <div className="tag-list">
                                            <a className="big ilabel mkt-track" href="/it-jobs/html5"><span>HTML5</span>
                                            </a><a className="big ilabel mkt-track" href="/it-jobs/javascript"><span>JavaScript</span>
                                            </a><a className="big ilabel mkt-track" href="/it-jobs/reactjs"><span>ReactJS</span></a>
                                        </div>
                                        <div className="clearfix" />
                                        <a className="view-salary salary not-signed-in" data-toggle="modal" data-target="#sign-in-modal" ><b>{this.state.salary}</b></a>
                                        <div className="address">
                                            <div className="fas fa-map-marker-alt" />
                                            <div className="address__full-address">
                                                <span>     Doan Van Bo, District 4, Ho Chi Minh</span>
                                            </div>
                                            <a target="_blank" className="address__map" href="https://www.google.com/maps?q=11 Doan Van Bo District 4 Ho Chi Minh">
                                                <div className="address__text">See map</div>&nbsp;
                                                <div className="address__arrow" />
                                            </a>
                                        </div>
                                        <div className="distance-time-job-posted">
                                            <i className="fa fa-calendar" /> {this.state.start_date} - {this.state.end_date}
                                        </div>
                                        <div className="action action-line-top">
                                            <button id="btnsubCv" className="jr-apply-trigger apply_now button-red btn-block" 
                                                rel="nofollow" 
                                                data-position="top" 
                                                data-session="e82c17faa9000d3f4123a414911570eb"
                                                onClick={this.onApplyJob}
                                            >
                                                Apply Now
                                            </button>
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
                                        <div><b>Job Description<br /><br /></b></div>
                                        {this.state.description}
                                    </div>
                                    <div />
                                </div>
                                <div className="skills_experience">
                                    <h2 className="title">Your Skills and Experience</h2>
                                    <div className="experience">
                                        <p><strong>Requirements</strong>
                                        </p>{this.state.requirement}<p />
                                    </div>
                                </div>
                                <div className="space-bottom" />
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default JobDetails;