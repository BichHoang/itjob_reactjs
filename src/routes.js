import React from 'react';
import Index from './components/Index/Index'
import CadidateProfile from './components/Cadidate/CadidateProfile';
import SigninCadidate from './components/Cadidate/SigninCadidate';
import SigninCompany from './components/Companies/SigninCompany';
import SignupCompany from './components/Companies/SignupCompany';
import SearchCompanies from './components/Companies/SearchCompanies/SearchCompanies';
import EditJob from './components/Jobs/ManageJobs/EditJob';
import JobDetails from './components/Jobs/DetailJob/JobDetails';
import JobsList from './components/Jobs/JobsList/JobsList';
import ListSkill from './components/ListSkill/ListSkill';
import DetailJob from './components/Jobs/DetailJob/DetailJob';
import NewJob from './components/Companies/CompanyPost/NewJob';
import DetailCompany from './components/Companies/DetailCompany/DetailCompany';


const routes = [
    {
        path: '/',
        exact: true,
        main: ({match}) => <Index match = {match} />
    },
    {
        path: '/cadidate-profile',
        exact: true,
        main: ({match}) => <CadidateProfile match = {match} />
    },
    {
        path: '/cadidate-signin',
        exact: true,
        main: ({match}) => <SigninCadidate match = {match} />
    },
    {
        path: '/company-signin',
        exact: true,
        main: ({match}) => <SigninCompany match = {match} />
    },
    {
        path: '/company-signup',
        exact: true,
        main: ({match}) => <SignupCompany match = {match} />
    },
    {
        path: '/companies',
        exact: true,
        main: ({match}) => <SearchCompanies match = {match} />
    },
    {
        path: '/jobs/:id',
        exact: true,
        main: ({match}) => <JobDetails match = {match} />
    },
    {
        path: '/jobs/:id/edit',
        exact: false,
        main: ({match, history}) => <EditJob match = {match} history= {history} />
    },
    {
        path: '/jobs',
        exact: true,
        main: ({match}) => <JobsList match = {match} />
    },
    {
        path: '/jobs-skill-index',
        exact: true,
        main: ({match}) => <DetailCompany match = {match} />
    },
    {
        path: '/new-job',
        exact: true,
        main: ({match}) => <NewJob match = {match} />
    },
    {
        path: '/jobs/:skill/:location',
        exact: true,
        main: ({match}) => <JobsList match = {match} />
    }
];
export default routes;
