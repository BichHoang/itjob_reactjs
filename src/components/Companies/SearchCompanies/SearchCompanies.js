import React, { Component } from 'react';

class SearchCompanies extends Component {
    render() {
        return (
            <div>
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>
                <div className="hidden-xs hidden-sm" id="feedback">
                    <a href="https://itviec.uservoice.com/forums/207426-general/filters/new" className="uservoice_link" target="_blank">FEEDBACK</a>
                </div>
                <h1 className="slogan">
                    7,013 Company Reviews for You
            <span className="in-title">
                        What are people saying about your company? Find out now!
            </span>
                </h1>
                <div className="search-form-wrapper clearfix">
                    <form id="search_companies_form" className="search-form" action="/companies" acceptCharset="UTF-8" method="get">
                        <input name="utf8" type="hidden" defaultValue="✓" />
                        <div className="search_section_wrapper">
                            <div className="search_text_wrapper">
                                <div className="ion-ios-search" />
                                <div className="search_field_wrapper">
                                    <input type="text" name="query" id="search_companies_text" defaultValue className="search_text hide" />
                                </div>
                            </div>
                        </div>
                        <div className="search_button_wrapper">
                            <input type="submit" name="commit" defaultValue="Search" className="search_button button-red left" data-disable-with="Search" />
                        </div>
                    </form>
                </div>
                <div id="company-home-page">
                    <div className="featured-companies" data-controller="popular-companies" data-popular-companies-city data-popular-companies-count={6} data-popular-companies-url="/api/v1/employers/most-popular">
                        <div className="title">Companies Hiring Now</div>
                        <div className="subtitle">
                            <div className="sort-by">
                                <span>Sort by:</span>
                                <div className="sort-by__group">
                                    <a className="sort-by__link" data-action="popular-companies#filterByCity" data-city="Ho Chi Minh" data-target="popular-companies.sortLink">Ho Chi Minh</a>
                                    <span className="sort-by__divider">|</span>
                                    <a className="sort-by__link" data-action="popular-companies#filterByCity" data-city="Ha Noi" data-target="popular-companies.sortLink">Ha Noi</a>
                                    <span className="sort-by__divider">|</span>
                                    <a className="sort-by__link" data-action="popular-companies#filterByCity" data-city="Da Nang" data-target="popular-companies.sortLink">Da Nang</a>
                                    <span className="sort-by__divider">|</span>
                                    <a className="sort-by__link active" data-action="popular-companies#filterByCity" data-city data-target="popular-companies.sortLink">All</a>
                                </div>
                            </div>
                        </div>
                        <div className="companies" data-target="popular-companies.body">
                            <a className="featured-company" target="_blank" href="/companies/evolable-asia">
                                <div className="company__banner">
                                    <img width={326} height={160} alt="Evolable Asia Headline Photo" src="https://cdn.itviec.com/photos/16/processed_headline_photo/evolable-asia-headline_photo.png?BmS8YwtFg8oWhgzar2vwtgv6" />
                                </div>
                                <div className="company__info">
                                    <header className="company__header">
                                        <div className="company__logo">
                                            <img width={64} height={62} alt="Evolable Asia Vietnam Small Logo" src="https://cdn.itviec.com/employers/evolable-asia/logo/s65/bkc9yP9U8EjRwsRgnjjDebGy/evolable-asia-logo.png" />
                                        </div>
                                        <div className="company__name">Evolable Asia</div>
                                        <div className="company__star">
                                            <i className="blue icon ion-ios-star small" />
                                            <span className="company__star-rate">4.1</span>
                                        </div>
                                    </header>
                                    <div className="company__desc">EVOLABLE ASIA – To build the Top global Service for a better World.</div>
                                    <footer className="company__footer">
                                        <span className="company__footer-city" data-target="popular-companies.city">Ho Chi Minh</span>
                                        <span className="company__footer-jobs">
                                            10 jobs
                        <i className="fa fa-caret-right" />
                                        </span>
                                    </footer>
                                </div>
                            </a>
                        </div>
                        <div className="show-more text-right">
                            <a data-action="popular-companies#showMore">
                                <span data-showlesstext="See less" data-showmoretext="See more" data-target="popular-companies.showMoreText">See more</span>
                                <i className="fa fa-caret-right" />
                            </a>
                        </div>
                    </div>
                    <div className="main-content container-fluid jobs-by-company">
                        <div className="row">
                            <div className="col-xs-12">
                                <a className="job-skill-index-headline" href="/jobs-company-index">Jobs by Company</a>
                                <ul className="index-list job-by-company-index-list">
                                    <li className="index-list__item">
                                        <a className="link--darker" href="/jobs-company-index">#ABC</a>
                                    </li>
                                    <li className="index-list__item">-</li>
                                    <li className="index-list__item">
                                        <a className="link--darker" href="/jobs-company-index/d-f">DEF</a>
                                    </li>
                                    <li className="index-list__item">-</li>
                                    <li className="index-list__item">
                                        <a className="link--darker" href="/jobs-company-index/g-i">GHI</a>
                                    </li>
                                    <li className="index-list__item">-</li>
                                    <li className="index-list__item">
                                        <a className="link--darker" href="/jobs-company-index/j-l">JKL</a>
                                    </li>
                                    <li className="index-list__item">-</li>
                                    <li className="index-list__item">
                                        <a className="link--darker" href="/jobs-company-index/m-o">MNO</a>
                                    </li>
                                    <li className="index-list__item">-</li>
                                    <li className="index-list__item">
                                        <a className="link--darker" href="/jobs-company-index/p-r">PQR</a>
                                    </li>
                                    <li className="index-list__item">-</li>
                                    <li className="index-list__item">
                                        <a className="link--darker" href="/jobs-company-index/s-v">STUV</a>
                                    </li>
                                    <li className="index-list__item">-</li>
                                    <li className="index-list__item">
                                        <a className="link--darker" href="/jobs-company-index/w-z">WXYZ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
                <div id="logo">
                    <div className="logo-image" />
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default SearchCompanies;