import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="index">
                    <h1 className="slogan">
                        1,424 IT Jobs For Chất Developers
                    </h1>
                    <div className="search-form-wrapper clearfix">
                        <form id="search_form" className="search-form" action="/it-jobs" acceptCharset="UTF-8" method="get">
                            <input name="utf8" type="hidden" defaultValue="✓" />
                            <div className="search_section_wrapper no_header">
                                <div className="search_text_wrapper">
                                    <div className="ion-ios-search" />
                                    <div className="search_field_wrapper">
                                        <input type="text" name="query" id="search_text" defaultValue className="search_text hide" />
                                    </div>
                                </div>
                            </div>
                            <div className="city_section_wrapper">
                                <div className="city_select_wrapper">
                                    <div className="ion-ios-location-outline" />
                                    <div className="city_field_wrapper">
                                        <select name="city" id="city" className="search_city hide" data-cities="{&quot;ho-chi-minh-hcm&quot;:&quot;Ho Chi Minh&quot;,&quot;ha-noi&quot;:&quot;Ha Noi&quot;,&quot;da-nang&quot;:&quot;Da Nang&quot;,&quot;others&quot;:&quot;Others&quot;}" data-preload="false">
                                            <option value>City</option>
                                            <option value="ho-chi-minh-hcm">Ho Chi Minh</option>
                                            <option value="ha-noi">Ha Noi</option>
                                            <option value="da-nang">Da Nang</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="search_button_wrapper">
                                <input type="submit" name="commit" defaultValue="Search" className="search_button button-red left" data-disable-with="Search" />
                            </div>
                        </form>
                    </div>
                    <div className="page-header__tag-list hidden-xs">
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/tester">Tester</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/java">Java</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/php">PHP</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/android">Android</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/.net">.NET</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/ios">iOS</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/business-analyst">Business Analyst</a>
                        <a className="head no-border ilabel popular-keyword" href="/it-jobs/qa-qc">QA QC</a>
                        <a className="head no-border ilabel" href="/jobs-skill-index">All jobs by skill</a>
                    </div>
                </div>
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>    
                <div className="top-companies">
                    <div className="title">Top Employers</div>
                    <div className="row">
                        {/* Last updated: "2018-10-23 12:00:44 +0700"*/}
                        <div className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <a className="top-company" rel="nofollow" data-method="put" href="/companies/lg-development-center-vietnam?track_action=Click+Hiring">
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/lg-development-center-vietnam/logo/w170/kb3U11PfmJFtdPgCEMaUJMNn/lg-development-center-vietnam-logo.png">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">LG Development Center Vietnam</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        1 Job
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ha Noi</span>
                                </footer>
                            </a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <a className="top-company" rel="nofollow" data-method="put" href="/companies/fpt-software?track_action=Click+Hiring">
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/fpt-software/logo/w170/3reFYvb7XKV1a8g4aKiDDke8/fpt-software-logo.png">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">FPT Software</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        9 Jobs
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ho Chi Minh</span>
                                </footer>
                            </a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <a className="top-company" rel="nofollow" data-method="put" href="/companies/athena-studio?track_action=Click+Hiring">
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/athena-studio/logo/w170/mHk6HuAgK39P7yE9yvtVYkcr/athena-studio-logo.png">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">Athena Studio</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        2 Jobs
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ho Chi Minh</span>
                                </footer>
                            </a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <a className="top-company" rel="nofollow" data-method="put" href="/companies/luxoft-vietnam?track_action=Click+Hiring">
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/luxoft-vietnam/logo/w170/AN3x1zjYhbfPNdhkv39NQd78/luxoft-vietnam-logo.png">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">Luxoft Vietnam</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        1 Job
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ho Chi Minh</span>
                                </footer>
                            </a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <a className="top-company" rel="nofollow" data-method="put" href="/companies/ifi-solution-an-ntt-data-company?track_action=Click+Hiring">
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/ifi-solution-an-ntt-data-company/logo/w170/RPw1TVXb8rzLdM2XEABrNcMj/ifi-solution-an-ntt-data-company-logo.png">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">IFI Solution - An NTT Data Company</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        4 Jobs
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ha Noi</span>
                                </footer>
                            </a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <a className="top-company" rel="nofollow" data-method="put" href="/companies/evolable-asia?track_action=Click+Hiring">
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/evolable-asia/logo/w170/bkc9yP9U8EjRwsRgnjjDebGy/evolable-asia-logo.png">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">Evolable Asia</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        10 Jobs
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ho Chi Minh</span>
                                </footer>
                            </a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <a className="top-company" rel="nofollow" data-method="put" href="/companies/cybozu-vietnam?track_action=Click+Hiring">
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/cybozu-vietnam/logo/w170/X4os4G5H4hAw5sHEQen5sDdy/cybozu-logo.jpg">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">Cybozu Vietnam</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        2 Jobs
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ho Chi Minh</span>
                                </footer>
                            </a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <a className="top-company" rel="nofollow" data-method="put" href="/companies/toshiba-software-development-viet-nam-co-ltd?track_action=Click+Hiring">
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/toshiba-software-development-viet-nam-co-ltd/logo/w170/scF1upBbUTLBNYLPHtt6kzGD/toshiba-software-development-viet-nam-co-ltd-logo.jpg">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">Toshiba Software Development (Viet Nam) Co</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        4 Jobs
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ha Noi</span>
                                </footer>
                            </a>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            {/* Last updated: "2018-10-23 11:35:25 +0700"*/}
                            <a className="top-company" rel="nofollow" data-method="put" href="/companies/fossil-misfit?track_action=Click+Hiring">
                                <div className="top-company__logo text-center">
                                    <div className="placeholder" data-large="https://cdn.itviec.com/employers/fossil-misfit/logo/w170/2kh15nVUsNCKN9GBhV1dF6K4/misfit-logo.png">
                                        <img className="img-small" />
                                        <div style={{ paddingBottom: '100%', backgroundColor: 'white' }} />
                                    </div>
                                </div>
                                <div className="top-company__name text-center">FOSSIL (MISFIT)</div>
                                <footer className="top-company__footer text-center">
                                    <span className="top-company__footer-jobs">
                                                    <span className="red link">
                                                        3 Jobs
                                  </span>
                                    <span>&nbsp;-&nbsp;</span>
                                    </span>
                                    <span className="top-company__footer-city">Ho Chi Minh</span>
                                </footer>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
                <div className="clearfix" />
                <div id="logo">
                    <div className="logo-image" />
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default Index;