import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobsAPI } from '../../../actions';
import callApi_Song from '../../../utils/apiCaller_Song';
import { Link } from 'react-router-dom';

class JobsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            jobs: []
        }
    }

    componentDidMount(){
        callApi_Song('posts', 'GET', null).then(res => {
            const jobs = res.data;
            this.setState({jobs});
        })
    }

    render() {
        let { match } = this.props
        let { jobs } = this.state
        console.log(match)
        let url = match.url;
        if (url === "/"){
            url = "/jobs"
        }

        let result = jobs.map((job,index) => {
            return(
                <div key={index}>
                        <div className="company" id="company_374">
                            <div className="logo">
                                <div className="logo-wrapper" title="The Bosch Group is a leading global supplier of technology and services">
                                    <a target="_blank" href="/nha-tuyen-dung/robert-bosch-engineering-and-business-solutions"><img alt="Robert Bosch Engineering And Business Solutions" src="https://cdn.itviec.com/employers/robert-bosch-engineering-and-business-solutions/logo/s65/ZzW1myNnUVsoAuRfMz4yNYqx/robert-bosch-engineering-and-business-solutions-logo.jpg" width={65} height={65} /></a>
                                </div>
                            </div>
                            <div className="company__description">
                                <div className="company__body">
                                    <div className="details">
                                        <div className="title-info">
                                            <div className="title">
                                                <Link to={`${url}/${job.id}`}>{job.title}</Link>
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
        })

        return (
            <div>
                <div className="paddingTop">
                    <div className="hidden-xs" id="scrolltop">
                        <div className="top-arrow"></div>
                    </div>
                    <div className="search-form-wrapper clearfix">
                        <form id="search_companies_form" className="search-form" action="/companies" acceptCharset="UTF-8" method="get">
                            <input name="utf8" type="hidden" defaultValue="✓" />
                            <div className="search_section_wrapper">
                                <div className="search_text_wrapper">
                                    <div className="ion-ios-search" />
                                    <div className="search_field_wrapper">
                                        <input type="text" name="query" id="search_companies_text" defaultValue className="search_text hide" />
                                    </div>
                                </div>
                            </div>
                            <div className="search_button_wrapper">
                                <input type="submit" name="commit" defaultValue="Search" className="search_button button-red left" data-disable-with="Search" />
                            </div>
                        </form>
                    </div>
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
                            {result}
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


const mapDispatchToProps = (dispatch) => {
    return{
        getJobs: () => {
            dispatch(getJobsAPI());
        }
    }
}

export default connect(mapDispatchToProps)(JobsList);