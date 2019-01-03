import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import {getAccountLogged} from './../../../helpers/getAccountLogged';

class ApplyJob extends Component {
    constructor(props){
        super(props);
        this.state = {
            job_title: "",
            job_id: 0,
            user_id: 0,
            username: "",
            cv: "",
            cover_letter: "",
            status_code: 0,
            alert: "",
            is_redirect: false
        }
    }

    componentDidMount(){
        const current_account = JSON.parse(localStorage.getItem('current_account'));
        console.log(current_account);
        console.log(current_account.account_id);
        this.setState({user_id: current_account.account_id});
        const token = current_account.access_token;
        console.log(token);
        const data = getAccountLogged(token);
        Axios.post('http://it-job-login.herokuapp.com/public/api/user/me', token)
        .then(res => {
            const current_user = res.data;
            console.log(current_user.data.name);
            this.setState({username: current_user.data.name});
        })
        this.setState({
            job_title: this.props.location.state.job_name,
            job_id: this.props.location.state.job_id
        }) 
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOnClick = () => {
        window.open('https://driveuploader.com/upload/rdhfjBBcmQ/?fbclid=IwAR0Jc7FXgwipM4zZ0QcHXkOCbuNfj50ArJB_ia_K9GkqlYNojH3PqehgQvo');
    }

    handleSubmit = event => {
        event.preventDefault();
        var cv_path = this.state.cv;
        var filename = cv_path.replace(/^.*[\\\/]/, '');
        console.log(filename);
        var form = new FormData();
        form.append("id_post", this.state.job_id);
        form.append("id_user", this.state.user_id);
        form.append("cv", filename);
        form.append("cover_letter", this.state.cover_letter);
        Axios.post('http://itjob-heroku.herokuapp.com/public/api/admin_cv_api/add', form)
        .then(res => {
            console.log(res);
            console.log(res.data);
            if (res.status === 201){
                this.setState({
                    is_redirect: true,
                    alert: "Your CV has been sent!",
                })
            }
        })
    }

    render() {
        if (this.state.is_redirect === true){
            var location = this.props;
            const new_url = '/jobs/' + this.state.job_id;
            return <Redirect to={{
                pathname: new_url,
                state: {
                    from: location,
                    alert: this.state.alert
                }
            }}/>        
        }
        return (
            <div className="apply-page">
                <div className="show_content" id="job_45037">
                    <div className="main-content">
                        <div className="content">
                            <h1>{this.state.job_title}</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="row col-lg-12 form-item">
                                    <label className="col-lg-2"><b>Your name:</b></label>
                                    <div className="col-lg-10">
                                        <input type="text" name="username" value={this.state.username} disabled onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="row col-lg-12 form-item">
                                    <label className="col-lg-2"><b>Your CV:</b></label>
                                    <div className="col-lg-8">
                                        <input type="file" name="cv" value={this.state.cv} onChange={this.handleChange} />
                                        <small>We accept .doc .docx, .pdf files up to 1MB</small>
                                    </div>
                                    <div className="col-lg-2">
                                        <button className="jr-apply-trigger apply_now button-red bgr-green btn-block" 
                                                rel="nofollow" data-position="top" 
                                                data-session="e82c17faa9000d3f4123a414911570eb"
                                                onClick={this.handleOnClick}>
                                            Upload File
                                        </button>
                                    </div>
                                </div>
                                <div className="row col-lg-12 form-item">
                                    <label className="col-lg-12"><b>What skills, work projects or achievements make you a strong candidate? *(Recommended)*</b></label>                                
                                    <div className="col-lg-12">
                                        <textarea rows="5" name="cover_letter" value={this.state.cover_letter} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="row action action-line-top mg-25 col-lg-12">
                                    <div className="col-lg-12">
                                        <button type="submit" className="jr-apply-trigger apply_now button-red btn-block" 
                                                rel="nofollow" data-position="top" 
                                                data-session="e82c17faa9000d3f4123a414911570eb">
                                            Send My CV
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ApplyJob;