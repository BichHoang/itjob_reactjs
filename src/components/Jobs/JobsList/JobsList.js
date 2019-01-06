import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobsAPI, getAllSkillsAPI } from '../../../actions';
import callApi from '../../../utils/apiCaller';
import callApi_Song from '../../../utils/apiCaller_Song';
import { Link } from 'react-router-dom';
import Search from './../../Search/Search';
import {withRouter} from 'react-router';

class JobsList extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        //this.props.getJobs();
        callApi_Song('posts', 'GET', null).then(res => {
            const jobs = res.data;
            this.setState({jobs});
        })
    }

    configJobs = (jobs, url) => {
        if (url !== "/jobs"){
            url = "/jobs"
        }
        let result = jobs.map((job,index) => {
            return(
                <div key={index}>
                        <div className="company" id="company_374">
                            <div className="logo">
                                <div className="logo-wrapper" title={`${job.employer_name}`}>
                                    <Link target="_blank" to={`${url}/${job.id}`}>
                                        <img 
                                            alt="Robert Bosch Engineering And Business Solutions" 
                                            src={job.employer_avatar}
                                            width={65} height={65} 
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="company__description">
                                <div className="company__body">
                                    <div className="details">
                                        <div className="title-info">
                                            <div className="title">
                                                <Link target="_blank" to={`${url}/${job.id}`}>{job.Title}</Link>
                                            </div>
                                            <div className="info">
                                                <span className="gear-icon">{job.Description}</span>
                                                <span className="group-icon">{job.Amount_of_people}</span>
                                                <span className="globe-icon">${job.Salary}</span>
                                            </div>
                                        </div>
                                    <div className="city">
                                        <div className="text">{job.location_name}</div>
                                    </div>
                                </div>
                                <div className="tag-list">
                                    <div className="tag">{job.skill_name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return result;
    }

    render() {
        let { match, jobs } = this.props
        console.log(match)
        let url = match.url;
        return (
            <div>
                <div className="paddingTop">
                    <div className="hidden-xs" id="scrolltop">
                        <div className="top-arrow"></div>
                    </div>
                    <Search match={match}/>
                    <div className="search main-content" id="search-results">
                    <div className="right side-content stickybar hidden-xs hidden-sm" id="right_side">
                        <h3>Company Spotlight</h3>
                        <div className="inside">
                            <div className="photos">
                                <div className="headline-photo">
                                    <img alt="img" src="https://cdn.itviec.com/photos/33899/tiny_headline_photo/fpt-software-tiny_headline_photo.jpg?6rAvo1Rp6H5WJr88a3VpuJFQ" width={256} height={125} />
                                </div>
                                <div className="logo">
                                    <img alt="img" src="https://cdn.itviec.com/employers/fpt-software/logo/s65/3reFYvb7XKV1a8g4aKiDDke8/fpt-software-logo.png" width={68} height={68} />
                                </div>
                                <div className="info">
                                    <span className="name">
                                        FPT Software
                                    </span>
                                    <span className="city">
                                        Ho Chi Minh
                                    </span>
                                    <p>The leading provider of software outsourcing services in Vietnam</p>
                                </div>
                                <a className="mkt-track link" rel="nofollow" data-method="PUT" href="/companies/fpt-software?track_action=Click+Branding" >a tag</a>
                            </div>
                            <div className="border-around">
                                <div className="jobs">
                                    <div className="job">
                                        <a href="/it-jobs/10-senior-java-developer-singing-bonus-fpt-software-1948">10 Senior Java Developer – singing bonus</a>
                                    </div>
                                    <div className="job">
                                        <a href="/it-jobs/10-frontend-angular-reactjs-javascript-fpt-software-1849">10 Frontend (Angular,ReactJS,JavaScript)</a>
                                    </div>
                                    <div className="job">
                                        <a href="/it-jobs/10-infrastructure-devs-work-in-japan-fpt-software-4803">10 Infrastructure Devs - Work in Japan</a>
                                    </div>
                                </div>
                                <div className="other-jobs">
                                    <a href="/companies/fpt-software#our-jobs">View 6 jobs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12" id="jobs">
                        <h1>
                            2,062 IT companies in Vietnam for you
                        </h1>
                        <div className="first-group">
                            {this.configJobs(jobs, url)}
                        </div>
                        <div id="show-more-wrapper">
                            <div id="show_more">
                                <a className="more-jobs-link more-company" rel="next" data-remote="true" href="/companies?page=2">Show More Companies</a>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
                <div className="clearfix" />
                    <div id="logo">
                        <div className="logo-image" />
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return{
        jobs : state.jobs
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        getJobs: () => {
            dispatch(getJobsAPI());
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(JobsList));