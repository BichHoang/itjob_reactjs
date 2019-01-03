import React, { Component } from 'react';
import {getAllEmployersAPI, getAllSkillsAPI} from './../../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Search from '../Search/Search';
import Axios from 'axios';

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
    }
    mapEmployers = (employers, url) => { 
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
        let localtion = Axios.get("http://itjob-heroku.herokuapp.com/public/api/admin_location_api", {}).then((res) => {
                    return res.data;
                }).catch((error) => {
                    return null;
                });
        console.log(localtion)
        let result = employers.map((employer, index) => {
            return ( 
                    <div key={index} className="col-md-4 col-xs-12">
                            <Link className="top-company" to={`${url}/${employer.id}`} >
                                <div className="top-company__logo text-center">
                                    <div>
                                        <img alt="img" src={employer.url_avatar} />  
                                    </div>
                                </div>
                                <div className="top-company__name text-center">{employer.name}</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        {index+1} Job
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
    render() {
        let {match, employers} = this.props;
        console.log(employers);
        let url = match.url;
        console.log(this.mapEmployers(employers,url));
        return (
            <div className="wrap">
                <div className="index">
                    <h1 className="slogan">
                        1,424 IT Jobs For Chất Developers
                    </h1>
                    <Search match={match} />
                </div>
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>    
                <div className="top-companies">
                    <div className="title">Top Employers</div>
                    <div className="row">
                        {this.mapEmployers(employers,url)}
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
        employers: state.employers
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllEmployers: () => {
            dispatch(getAllEmployersAPI());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);