import React, { Component } from 'react';

class CadidateProfile extends Component {

    render() {
        let cadidate = {
            id: 1,
            email: 'hoangbich@gmail.com',
            name: 'Hoang Bich',
            cover_letter: 'content cover letter',
            password: "123456",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog'
        }
        return (
            <div className="paddingTop60">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                    id="bootstrap-css" />
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img
                                        src={cadidate.image} alt="img" />
                                    <button className="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file" />
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h1>
                                        {cadidate.name}
                                    </h1>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <label id="upcv">Up load your CV: </label>
                                    <input type="file" name="fileToUpload" id="fileToUpload"></input>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link" id="aboutTab">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="timelineTab">Timeline</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="skillTab">Skill</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="saveTab">Aply Jobs</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p>WORK LINK</p>
                                    <a>Website Link</a>
                                    <br />
                                    <a>Bootsnipp Profile</a>
                                    <br />
                                    <a>Bootply Profile</a>
                                    <p>SKILLS</p>
                                    <a>Web Designer</a>
                                    <br />
                                    <a>Web Developer</a>
                                    <br />
                                    <a>WordPress</a>
                                    <br />
                                    <a>PHP, .Net</a>
                                    <br />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tabContent">
                                    <div className="hideContent" id="aboutContent">
                                        <div className="row" id="divName" >
                                            <div className="col-md-3">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-5">
                                                <p>{cadidate.name}</p>
                                            </div>
                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-outline-secondary" id="btnEditName">Edit</button>
                                            </div>
                                        </div>
                                        <div className="row" id="divNameEdit" >
                                            <div className="col-md-3">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-5">
                                                <input type="text" placeholder={cadidate.name} />
                                            </div>
                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-outline-success" id="btnSubmitName">Submit</button>
                                            </div>
                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-outline-danger" id="btnCancelName">Cancel</button>
                                            </div>
                                        </div>
                                        
                                        <div className="row" id="divEmail" >
                                            <div className="col-md-3">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-5">
                                                <p>{cadidate.email}</p>
                                            </div>
                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-outline-secondary" id="btnEditEmail">Edit</button>
                                            </div>
                                        </div>
                                        <div className="row" id="divEmailEdit" >
                                            <div className="col-md-3">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-5">
                                                <input type="text" placeholder={cadidate.email} />
                                            </div>
                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-outline-success" id="btnSubmitEmail">Submit</button>
                                            </div>
                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-outline-danger" id="btnCancelEmail">Cancel</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-outline-success">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="timelineContent">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Your Bio</label>
                                                <br />
                                                <p>Your detail description</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CadidateProfile;