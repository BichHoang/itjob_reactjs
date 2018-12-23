import React, { Component } from 'react';
import Axios from 'axios';

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
            start_date: "",
            end_date: "",
            isSuccess: 0,
        }
    }
    
    componentDidMount(){
        let { match } = this.props
        const id = match.params.id;
        console.log(id)
        const path = 'http://5c0e9da8e1498a00133648b9.mockapi.io/posts/' + id;
        console.log(path);
        Axios.get(path)
        .then(res => {
            const post = res.data;
            this.setState({
                id: post.id,
                title: post.title,
                description: post.description,
                requirement: post.requirement,
                salary: post.salary,
                amount_of_people: post.amount_of_people,
                start_date: post.start_date,
                end_date: post.end_date
            });
        })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const path = 'http://5c0e9da8e1498a00133648b9.mockapi.io/posts/' + this.state.id + '/'
        const post = {
            title: this.state.title,
            description: this.state.description,
            requirement: this.state.requirement,
            salary: this.state.salary,
            amount_of_people: this.state.amount_of_people,
            start_date: this.start_date,
            end_date: this.state.end_date
        }

        console.log(post)
        Axios.put(path,post)
        .then(res => {
            console.log(res);
            console.log(res.data);
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
            <div className="paddingTop150">
                <div className="content">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" value = {this.state.title} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Description</label>
                            <input type="text" name="description" value = {this.state.description} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Requirement</label>
                            <input type="text" name="requirement" value = {this.state.requirement} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Salary</label>
                            <input type="text" name="salary" value = {this.state.salary} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Amount of People</label>
                            <input type="number" name="amount_of_people" value = {this.state.amount_of_people} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Start day</label>
                            <input type="text" name="start_day" value = {this.state.start_date} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>End day</label>
                            <input type="text" name="end_day" value = {this.state.end_date} onChange={this.handleChange} />
                        </div>
                        <div>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditJob;