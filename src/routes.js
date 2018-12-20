import React from 'react';
import Index from './components/Index/Index'
import Companies from './components/Companies/Companies';
import CadidateProfile from './components/Cadidate/CadidateProfile';
import SigninCadidate from './components/Cadidate/SigninCadidate';
import SigninCompany from './components/Companies/SigninCompany';
import SignupCompany from './components/Companies/SignupCompany';

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
];

export default routes;
