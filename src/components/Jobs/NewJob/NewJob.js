import React, { Component } from 'react';
import Axios from 'axios';

class NewJob extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            requirement: "",
            salary: "",
            amount_of_people: 0,
            start_date: "",
            end_date: "",
            isSuccess: 0,
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const path = 'http://5c0e9da8e1498a00133648b9.mockapi.io/posts/'
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
        Axios.post(path,post)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
                isSuccess: res.status
            })
        })
        console.log(this.state.isSuccess)
    }

    componentDidUpdate(){
        if (this.state.isSuccess === 201){
            window.location.replace('/jobs');
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
                                    <input type="number" name="amount_of_people" min="1" value = {this.state.amount_of_people} onChange={this.handleChange} />
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
                                    <button type="submit" className="jr-apply-trigger apply_now button-red btn-block" rel="nofollow" data-position="top" data-session="e82c17faa9000d3f4123a414911570eb">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewJob;