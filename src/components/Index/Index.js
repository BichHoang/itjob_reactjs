import React, { Component } from 'react';
import {getAllEmployersAPI, getAllSkillsAPI} from './../../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Search from '../Search/Search';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: 'all',
            search: '',
            strSearch: '',
            isSearch: false
        }
    }
    componentDidMount() {
        this.props.getAllEmployers();
        this.props.getAllSkills();
    }
    getEmployers = (employers, url) => { 
        if(url === '/') {
            url = '/employers';
        }
        //let {category, search, isSearch, strSearch} = this.state;
        // if(category !== 'all') {
        //     tours = filter(tours, function(o) { 
        //         return o.category_id === category; 
        //     })
        // }
        // console.log(tours);
        // if(isSearch) {
        //     tours = filter(tours, (tour) => {
        //         return includes(tour.name.toLocaleLowerCase(), strSearch.toLocaleLowerCase());
        //     });
        // }
        let result = employers.map((employer, index) => {
            return ( 
                    <div key={index} className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <Link className="top-company" to={`${url}/${employer.id}`} >
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/lg-development-center-vietnam/logo/w170/kb3U11PfmJFtdPgCEMaUJMNn/lg-development-center-vietnam-logo.png">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">LG Development Center Vietnam</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        1 Job
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ha Noi</span>
                                </footer>
                            </Link>
                        </div>     
            )
        })
        return result;
    }
    getSkills(skills) {
        console.log(skills);
        let {location} = this.state;
        let result = skills.map((skill, index) => {
            return ( 
                <Link 
                    key={index} 
                    onClick={() => this.changeSkill(skill.id)}
                    to={`jobs/${skill.name}/${location}`}
                    className="head no-border ilabel popular-keyword" >
                        {skill.name}
                </Link>
            )
        })
        return result;
    }
    render() {
        let {match, employers, skills} = this.props;
        console.log(employers);
        let url = match.url;
        console.log(this.getEmployers(employers,url));
        return (
            <div className="wrap">
                <div className="index">
                    <h1 className="slogan">
                        1,424 IT Jobs For Chất Developers
                    </h1>
                    <Search />
                    <div className="page-header__tag-list hidden-xs">
                        {this.getSkills(skills,url)}
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/tester">Tester</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/java">Java</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/php">PHP</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/android">Android</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/.net">.NET</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/ios">iOS</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/business-analyst">Business Analyst</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/qa-qc">QA QC</a>
                        <a className="head no-border ilabel" href="/jobs-skill-index">All jobs by skill</a>
                    </div>
                </div>
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>    
                <div className="top-companies">
                    <div className="title">Top Employers</div>
                    <div className="row">
                        {this.getEmployers(employers,url)}
                        {/* Last updated: "2018-10-23 12:00:44 +0700"*/}
                    </div>
                </div>
                <div className="clearfix" />
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
        employers: state.employers,
        skills: state.skills
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllEmployers: () => {
            dispatch(getAllEmployersAPI());
        },
        getAllSkills: () => {
            dispatch(getAllSkillsAPI());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);