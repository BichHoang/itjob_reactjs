import React from 'react';
import Index from './components/Index/Index'
import Companies from './components/Companies/Companies';
import CadidateProfile from './components/Cadidate/CadidateProfile';
import SigninCadidate from './components/Cadidate/SigninCadidate';
import SigninCompany from './components/Companies/SigninCompany';
import SignupCompany from './components/Companies/SignupCompany';
import SearchCompanies from './components/Companies/SearchCompanies/SearchCompanies';
import ListSkill from './components/ListSkill/ListSkill';
import DetailJob from './components/Jobs/DetailJob/DetailJob';
import NewJob from './components/Companies/CompanyPost/NewJob';

const routes = [
    {
        path: '/',
        exact: true,
        main: ({match}) => <Index match = {match} />
    },
    {
        path: '/jobs',
        exact: true,
        main: ({match}) => <Companies match = {match} />
    },
    {
        path :'/jobs/:id',
        exact: true,
        main: ({match}) => <DetailJob match = {match} />
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
        path: '/company/new-post',
        exact: true,
        main: ({match}) => <NewJob match = {match} />
    },
    {
        path: '/companies',
        exact: true,
        main: ({match}) => <SearchCompanies match = {match} />
    },
    {
        path: '/jobs-skill-index',
        exact: true,
        main: ({match}) => <ListSkill match = {match} />
    },
    
];

export default routes;
