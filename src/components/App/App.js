import React, { Component } from 'react';
import './App.css';
import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import Modal_Fade from '../HomePage/Modal_Fade/Modal_Fade';
import Index from '../Index/Index'
import AboutUs from '../AboutUs/AboutUs';
import Companies from '../Companies/Companies';
import ListCompany from '../Companies/ListCompany/ListCompany';
import ListSkill from '../ListSkill/ListSkill';
import PostJobs from '../Jobs/PostJobs/PostJobs';
import DetailJob from '../Jobs/DetailJob/DetailJob';
import SigninCadidate from '../Cadidate/SigninCadidate';
import SearchCompanies from '../Companies/SearchCompanies/SearchCompanies';
import DetailCompany from '../Companies/DetailCompany/DetailCompany';
import CompanyRating from '../Companies/CompanyRating/CompanyRating';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header />
                    <div className="khoangtrong"></div>
                    <DetailCompany/>
                </div>
                <Modal_Fade/>
                <Footer/>
            </div>
        );
    }
}
export default App;