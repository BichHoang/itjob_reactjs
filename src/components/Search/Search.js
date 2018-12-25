import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getJobsSearchAPI, getAllSkillsAPI} from './../../actions/index';
import {Link, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: 'ho-chi-minh',
            skill: [],
            isSearch: false
        }
    }   
    componentDidMount() {
        this.props.getAllSkills();
    }
    mapSkills(skills) {
        let {match} = this.props;
        let url = match.url;
        if (url !== "/jobs"){
            url = "/jobs"
        }
        console.log(skills);
        let {location} = this.state;
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
                    onClick={() => this.handleChangeSkill(skill.name)}
                    className="head no-border ilabel popular-keyword" >
                        {skill.name}
                </a>
            )
        })
        return result;
    }
    handleChangeSkill = (skill_name) => {
        let {skill} = this.state;
        let index = skill.indexOf(skill_name);
        if(index === -1) 
            this.setState({
                skill: this.state.skill.concat(skill_name)
            })
        else {
            let new_skill = [...this.state.skill];
            new_skill.splice(index,1);
            this.setState({
                skill: new_skill
            })
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("select",value);
        this.setState({
          [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isSearch: true})
    }
    configSeacrh = (regex) => {
        return this.state.skill.toString().replace(/,/gi,regex);
    }
    render() {
        let {skills, match} = this.props;
        let {isSearch} = this.state;
        let url = match.url;
        console.log(skills);
        console.log(match);
        if(isSearch) {
            let {skill,location} = this.state;
            let skill_url = 'all';
            if(skill.length !== 0)
                skill_url = this.configSeacrh('-');
            return (
                <Redirect
                    to={{
                        pathname: "/jobs/"+skill_url+"/"+location
                    }}
                />
            )
        }
        console.log(this.state.skill.toString());
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
                                        <option value="ho-chi-minh">Ho Chi Minh</option>
                                        <option value="ha-noi">Ha Noi</option>
                                        <option value="da-nang">Da Nang</option>
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
        skills: state.skills
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getJobsSearch: () => {
            dispatch(getJobsSearchAPI());
        },
        getAllSkills: () => {
            dispatch(getAllSkillsAPI());
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search));


