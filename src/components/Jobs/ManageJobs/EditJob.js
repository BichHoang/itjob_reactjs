import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../utils/apiCaller';
import { editJobAPI, getJobsAPI } from '../../../actions';

class EditJob extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            title: "",
            description: "",
            requirement: "",
            salary: "",
            amount_of_people: 0,
            start_day: "",
            end_day: "",
            isSuccess: 0,
        }
    }
    
    componentDidMount(){
        let { match } = this.props
        const id = match.params.id;
        console.log(id)
        const path = 'posts/' + id;
        console.log(path);
        callApi(path, 'GET', null).then(res => {
            const post = res.data;
            console.log(post);
            this.setState({
                id: post.id,
                title: post.title,
                description: post.description,
                requirement: post.requirement,
                salary: post.salary,
                amount_of_people: post.amount_of_people,
                start_day: post.start_day,
                end_day: post.end_day
            });
        }) 
        console.log(this.state);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const path = 'posts/' + this.state.id + '/'
        const post = {
            title: this.state.title,
            description: this.state.description,
            requirement: this.state.requirement,
            salary: this.state.salary,
            amount_of_people: this.state.amount_of_people,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        }

        console.log(post)
        callApi(path, 'PUT', post).then(res => {
            console.log(res);
            this.setState({
                isSuccess: res.status
            })
        })
    }

    componentDidUpdate(){
        const path = '/jobs/' + this.state.id;
        if (this.state.isSuccess === 200){
            window.location.replace(path);
        }
    }

    render() {
        return (
            <div className="edit-page">
                <div className="show_content" id="job_45037">
                    <div className="main-content">
                        <div className="content">
                            <form onSubmit={this.handleSubmit}>
                                <h1><b>{this.state.title}</b></h1>
                                <div className="form-item col-lg-12">
                                    <label><b>Title:</b></label>
                                    <input type="text" name="title" value = {this.state.title} onChange={this.handleChange} />
                                </div>
                                <div className="form-item col-lg-12">
                                    <label><b>Description:</b></label>
                                    <textarea rows="5" name="description" value = {this.state.description} onChange={this.handleChange} />
                                </div>
                                <div className="form-item col-lg-12">
                                    <label><b>Requirement:</b></label>
                                    <textarea rows="5" name="requirement" value = {this.state.requirement} onChange={this.handleChange} />
                                </div>
                                <div className="form-item col-lg-12">
                                    <label><b>Salary:</b></label>
                                    <input type="text" name="salary" value = {this.state.salary} onChange={this.handleChange} />
                                </div>
                                <div className="form-item col-lg-12">
                                    <label><b>Amount of People:</b></label>
                                    <input type="number" name="amount_of_people" value = {this.state.amount_of_people} onChange={this.handleChange} />
                                </div>
                                <div className="form-item col-lg-12">
                                    <label><b>Start date:</b></label>
                                    <input type="date" name="start_date" value = {this.state.start_date} onChange={this.handleChange} />
                                </div>
                                <div className="form-item col-lg-12">    
                                    <label><b>End date:</b></label>
                                    <input type="date" name="end_date" value = {this.state.end_date} onChange={this.handleChange} />
                                </div>                             
                                <div className="action action-line-top form-item col-lg-12">
                                    <button type="submit" className="jr-apply-trigger apply_now button-red btn-block" rel="nofollow" data-position="top" data-session="e82c17faa9000d3f4123a414911570eb">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editJob: () => {
            dispatch(editJobAPI());
        },
        getJobs: () => {
            dispatch(getJobsAPI());
        }
    }
}

export default connect(mapDispatchToProps)(EditJob);