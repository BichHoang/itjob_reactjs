import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class JobsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            jobs: []
        }
    }

    componentDidMount(){
        Axios.get('http://5c0e9da8e1498a00133648b9.mockapi.io/posts/')
        .then(res => {
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
                <div className="paddingTop150">
                    {result}
                </div>
            </div>
            
        );
    }
}

export default JobsList;