import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getJobsSearchAPI, getAllSkillsAPI, getAllLocationsAPI} from './../../actions/index';
import {Link, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: 1,
            skill: [],
            skill_id: [],
            isSearch: false
        }
    }   
    componentDidMount() {
        this.props.getAllSkills();
        this.props.getAllLocations();
        console.log("Search did mount");
    }
    mapSkills(skills) {
        console.log(skills);
        let result = skills.map((skill, index) => {
            return ( 
                // <Link 
                //     key={index} 
                //     onClick={() => this.changeSkill(skill.id)}
                //     to={`${url}/${skill.name}/${location}`}
                //     className="head no-border ilabel popular-keyword" >
                //         {skill.name}
                // </Link>
                <a
                    key={index} 
                    onClick={() => this.handleChangeSkill(skill.name, skill.id)}
                    className="head no-border ilabel popular-keyword" >
                        {skill.name}
                </a>
            )
        })
        return result;
    }
    mapLocations = (locations) => {
        console.log(locations);
        let result = locations.map((location, index) => {
            return ( 
                <option key={index} value={location.id}>{location.name}</option>
            )
        })
        return result;
    }
    handleChangeSkill = (skill_name, id) => {
        let {isSearch} = this.state;
        console.log("isSearch:", isSearch);
        if(isSearch === false) {
        let {skill, skill_id} = this.state;
        let index = skill.indexOf(skill_name);
        if(index === -1) 
            this.setState({
                skill: this.state.skill.concat(skill_name),
                skill_id: this.state.skill_id.concat(id)
            })
        else {
            let new_skill = [...this.state.skill];
            new_skill.splice(index,1);
            let new_skill_id = [...this.state.skill_id];
            new_skill_id.splice(index,1);
            this.setState({
                skill: new_skill,
                skill_id: new_skill_id
            })
        } 
        }
        else {
            this.setState({isSearch: false});
        }
    }
    handleChange = (event) => {
        let {isSearch} = this.state;
        console.log("isSearch:", isSearch);
        if(isSearch === false) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            console.log("select",value);
            this.setState({
              [name]: value
            });
        }
        else {
            this.setState({isSearch: false});
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {location, skill_id, skill} = this.state;
        console.log(skill_id);
        const data = {
            location,
            skill: skill_id,
            order_by: 'Description',
            order_dir: 'desc'
        }
        this.props.getJobsSearch(data);
        this.setState({isSearch: true})
    }
    configSeacrh = (regex) => {
        return this.state.skill.toString().replace(/,/gi,regex);
    }
    getLocationName = (id) => {
        const {locations} = this.props;
        const name = locations.map((location, index) => {
            if(location.id === id) return location.name;
        })
        console.log(name);
        return name;
    }
    render() {
        console.log("Search render");
        let {skills, match, locations} = this.props;
        let {isSearch} = this.state;
        let url = match.url;
        console.log(skills);
        console.log(match);
        console.log(locations);
        if(isSearch) {
            let {skill,location} = this.state;
            let skill_url = 'all';
            let location_name = this.getLocationName(location);
            if(skill.length !== 0)
                skill_url = this.configSeacrh('-');
            let new_url = "/jobs/"+skill_url+"/"+location_name;
            console.log(new_url);
            if(new_url !== url) {
                return (
                    <Redirect
                        to={{
                            pathname: "/jobs/"+skill_url+"/"+location_name
                        }}
                    />
                )
            }      
        }
        let txtSearch = this.configSeacrh(' ');
        return ( 
            <div>
                <div className="search-form-wrapper clearfix">
                    <form onSubmit={this.handleSubmit} id="search_form" className="search-form" >
                        <input name="utf8" type="hidden" defaultValue="✓" />
                        <div className="search_section_wrapper no_header">
                            <div className="search_text_wrapper">
                                <div className="ion-ios-search" />
                                <div className="search_field_wrapper">
                                    <input 
                                        placeholder={txtSearch}
                                        type="text" name="query" id="search_text" className="search_text" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="city_section_wrapper">
                            <div className="city_select_wrapper">
                                <div className="ion-ios-location-outline" />
                                <div className="city_field_wrapper">
                                    <select onChange={this.handleChange} value={this.state.location} name="location" id="city" className="search_city">
                                       { this.mapLocations(locations)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="search_button_wrapper">
                            <button
                                type="submit" name="commit" className="search_button button-red left" data-disable-with="Search" 
                            >Search</button>
                        </div>
                    </form>
                </div>
                <div className="page-header__tag-list hidden-xs">
                    {this.mapSkills(skills,url)}
                    <a className="head no-border ilabel popular-keyword" href="/it-jobs/tester">Tester</a>
                    <a className="head no-border ilabel" href="/jobs-skill-index">All jobs by skill</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        skills: state.skills,
        locations: state.locations
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getJobsSearch: (data) => {
            dispatch(getJobsSearchAPI(data));
        },
        getAllSkills: () => {
            dispatch(getAllSkillsAPI());
        },
        getAllLocations: () => {
            dispatch(getAllLocationsAPI());
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search));


