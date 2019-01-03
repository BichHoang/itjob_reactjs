import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logout} from './../../../actions/user';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
    componentDidMount(){
        window.addEventListener('beforeunload', this.handleWindowClose);
    }
    
    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleWindowClose);
    }
    handleWindowClose = (ev) => {
        let tabs = JSON.parse(localStorage.getItem('tabs'));
        if(tabs.length === 1) {
            localStorage.setItem('tabs',JSON.stringify([1]));
            if(!this.props.remember){
                localStorage.removeItem('current_account');   
                this.props.logout();
           }
            return '';
        }
        const session = JSON.parse(sessionStorage.getItem('session'));
        const index = tabs.indexOf(session);
        tabs.splice(index,1);
        sessionStorage.removeItem('session');
        localStorage.setItem('tabs',JSON.stringify(tabs));
    }
    render() {
        let {loggedIn, remember} = this.props; 
        console.log("Header: ", loggedIn);
        console.log("remember: ", remember);
        let signin = "";
        if(loggedIn) {
            signin = <Link  to="/" onClick={this.props.logout} className="pageMenu__link" data-toggle="modal" data-target="#sign-in-modal" rel="nofollow">
                        Sign Out
                     </Link> }
        else {
            signin = <Link to="/cadidate-signin" className="pageMenu__link" data-toggle="modal" data-target="#sign-in-modal" rel="nofollow">
                        Sign In
                     </Link>
        }
        return (
            <div className="pageHeader">
                <div className="page-header__inner">
                    <nav className="pageMenu default-navbar">
                        <div className="container-fluid">
                            <div className="pageMenu__header">
                                <button className="pageMenu__toggle" data-target="#pageMenuToggle" data-toggle="collapse" type="button">
                                    <div className="pageMenu__toggleContent">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </div>
                                </button>
                                <a className="pageMenu__logo" href="/"><img className="logo-itviec" alt="itjob" src={process.env.PUBLIC_URL + 'images/logo.png'} width={108} height={42} />
                                </a>
                                <div className="user-menu visible-xs">
                                    <div className="pageMenu__headerItem">
                                        <a className="pageMenu__headerLink" data-toggle="modal" data-target="#sign-in-modal" href="#">Sign In</a>
                                    </div>
                                </div>
                            </div>
                            <div className="pageMenu__body collapse" id="pageMenuToggle">
                                <ul className="pageMenu__itemList pageMenu__itemList--right pageMenu__not_signed_in">
                                    <li className="dropdown hidden-xs notification-login-trigger">
                                        <a aria-expanded="false" className="pageMenu__link--saved dropdown-toggle" data-toggle="dropdown" href="#" role="button">
                                            <div className="saved pageMenu__bell">
                                                <div className="pageMenu__alert-jr invisible">
                                                    <span className="half-space">1</span>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li className="dropdown-menu__item--desktop">
                                                <a className="dropdown-menu__link--desktop sign-in-link" href="#"><span className="dropdown-menu__icon">
                                                    <div className="dropdown-menu__icon-info" />
                                                </span>
                                                    <span className="wrappable not-login-notification-text">Get your new job -- sign up now!</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pageMenu__item">
                                        <a href="/jobs">All Jobs</a>
                                    </li>
                                    <li className="pageMenu__item">
                                        <a href="/companies">Company Reviews</a>
                                    </li>
                                    <li className="pageMenu__item hidden-xs">
                                         {signin}
                                    </li>
                                    <li className="pageMenu__item">
                                        <a href="/company-signin">Employers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    const {loggedIn, remember} = state.authentication;
    return {
        loggedIn,
        remember
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
