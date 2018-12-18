import React, { Component } from 'react';

class Header extends Component {
    render() {
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
                                <a className="pageMenu__logo" href="/"><img className="logo-itviec" alt="itviec" src="assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png" width={108} height={42} />
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
                                        <a href="/it-jobs">All Jobs</a>
                                    </li>
                                    <li className="pageMenu__item">
                                        <a href="/companies/search-companies">Company Reviews</a>
                                    </li>
                                    <li className="pageMenu__item">
                                        <a target="_blank" href="/blog/">Blog</a>
                                    </li>
                                    <li className="pageMenu__item hidden-xs">
                                        <a className="pageMenu__link" data-toggle="modal" data-target="#sign-in-modal" rel="nofollow" href="#">Sign In</a>
                                    </li>
                                    <li className="pageMenu__item pageMenu__language">
                                        <div className="switch-toggle well">
                                            <input defaultChecked id="en" name="language" type="radio" />
                                            <label className="change-language" htmlFor="en">EN</label>
                                            <input id="vn" name="language" type="radio" />
                                            <label className="change-language" htmlFor="vn">VN</label>
                                            <a className="btn btn-default" />
                                        </div>
                                    </li>
                                    <li className="pageMenu__item">
                                        <a href="/post_jobs">Employers</a>
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
export default Header;