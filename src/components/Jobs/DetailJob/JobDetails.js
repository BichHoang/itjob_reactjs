import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class JobDetails extends Component {
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
        }
    }

    componentDidMount(){
        let { match } = this.props
        let url = match.url
        const id = url.substring(url.lastIndexOf('/') + 1)
        const path = 'http://5c0e9da8e1498a00133648b9.mockapi.io/posts/' + id
        console.log(this.state.id)
        Axios.get(path)
        .then(res => {
            const job = res.data
            this.setState({
                title: job.title,
                description: job.description,
                requirement: job.requirement,
                salary: job.salary,
                amount_of_people: job.amount_of_people,
                start_date: job.start_date,
                end_date: job.end_date,
            });
        });
    }
    render() {
        let { match } = this.props
        let url = match.url
        return (
            <div className="paddingTop150">
                <div className="content">
                    <Link to={`${url}/edit`}>{this.state.title}</Link>
                    <h3>{this.state.description}</h3>
                    <h3>{this.state.requirement}</h3>
                    <h3>{this.state.salary}</h3>
                    <h3>{this.state.amount_of_people}</h3>
                    <h3>{this.state.start_date}</h3>
                    <h3>{this.state.end_date}</h3>
                </div>
            </div>
        );
    }
}

export default JobDetails;