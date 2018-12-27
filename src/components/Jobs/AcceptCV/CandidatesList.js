import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class CandidatesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            candidates: [],
        }
    }

    componentDidMount(){
        let { match } = this.props
        console.log(match);
        const id = match.params.id;
        console.log(id);
        let url = 'http://itjob-heroku.herokuapp.com/public/api/admin_cv_according_post/' + id;
        console.log(url);
        Axios.get(url)
        .then(res => {
            const candidates = res.data;
            this.setState({ candidates });
        })
    }

    handleOnClick = () => {
        alert('Are you sure!');
        console.log('deleted');
    }

    handleAccept = () => {
        console.log('accepted');       
    }

    render() {
        let { candidates } = this.state
        let result = candidates.map((candidate,index) => {
            return(
                <tr key={index}>
                    <td>{candidate.name}</td>
                    <td></td>
                    <td></td>
                    <td>{candidate.cv}</td>
                    <td>
                        <Link to="#"><i className="fas fa-file cl-blue"></i></Link>
                        &nbsp;&nbsp;&nbsp;
                        <i className="far fa-trash-alt cl-red" onClick={this.handleOnClick}></i>
                        &nbsp;&nbsp;&nbsp;
                        <input type="checkbox" className="css-checkbox"
                            name={index}
                            id={index}
                            onClick={this.handleAccept} 
                        />
						<label htmlFor={index} className="css-label"></label>
                    </td>
                </tr>
            )
        })

        return (
            <div className="edit-page">
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>
                <div className="show_content" id="job_45037">
                    <div className="main-content">
                        <div className="content">
                            <div className="cddl-title">
                                <h1><b>{this.props.location.state.job_name}</b></h1>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Candidate Name</th>
                                    <th></th>
                                    <th></th>
                                    <th scope="col">CV</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CandidatesList;