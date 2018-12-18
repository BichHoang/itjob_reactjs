import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="content">
                    <div className="bottom">
                        <div className="footer-contact hidden-xs">
                            <div className="footer-link">
                                Want to post a job? Contact us at Ho Chi Minh: (+84) 977 460 519 - Ha Noi: (+84) 964 618 859 - Email: love@itviec.com
                            </div>
                        </div>
                        <div className="footer-links hidden-xs">
                            <div className="col-md-3 footer-links__col">
                                <a className="footer-link" href="/">Home</a>
                                <a className="footer-link" href="/it-jobs">All Jobs</a>
                                <a target="_blank" className="footer-link" href="/blog/about-us/">About Us</a>
                                <a target="_blank" className="footer-link" href="/blog/quy-che-hoat-dong-cua-itviec/">Operating Regulation</a>
                            </div>
                            <div className="col-md-3 footer-links__col">
                                <a target="_blank" className="footer-link" href="/blog/chinh-sach-bao-mat/">Privacy Policy</a>
                                <a target="_blank" className="footer-link" href="/blog/terms-and-conditions/">Term &amp; Conditions</a>
                                <a target="_blank" className="footer-link" href="/blog/chinh-sach-giai-quyet-khieu-nai/">Complaint Handling Policy</a>
                                <span className="footer-link">Copyright © IT VIEC JSC</span>
                            </div>
                            <div className="col-md-6 footer-links__col">
                                <span className="footer-link">Address: 60 Nguyen Van Thu, Dakao ward, Dist.1 HCMC</span>
                                <span className="footer-link">Tax code: 0312192258</span>
                                <span className="footer-link">Phone: 028.66811397</span>
                                <div className="follow hidden-xs">
                                    <div className="social_icons">
                                        <a target="_blank" className="tw-icon" rel="nofollow" href="https://twitter.com/itviec" />
                                        <a target="_blank" className="fb-icon" rel="nofollow" href="https://www.facebook.com/ITviec" />
                                        <a target="_blank" className="in-icon" rel="nofollow" href="https://www.linkedin.com/company/3093114" />
                                        <a target="_blank" rel="publisher" className="gp-icon" href="https://plus.google.com/105500862993414828044" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-links visible-xs">
                            <a className="footer-link" href="/">Home</a>
                            <a className="footer-link" href="/it-jobs">All Jobs</a>
                            <a target="_blank" className="footer-link" href="/blog/about-us/">About Us</a>
                            <a target="_blank" className="footer-link" href="/blog/chinh-sach-bao-mat/">Privacy Policy</a>
                            <a target="_blank" className="footer-link" href="/blog/terms-and-conditions/">Term &amp; Conditions</a>
                            <a target="_blank" className="footer-link" href="/blog/quy-che-hoat-dong-cua-itviec/">Operating Regulation</a>
                            <span className="footer-link">Copyright © IT VIEC JSC</span>
                            <span className="footer-link">Tax code: 0312192258</span>
                            <span className="footer-link">Phone: 028.66811397</span>
                            <a target="_blank" className="footer-link" href="/blog/chinh-sach-giai-quyet-khieu-nai/">Complaint Handling Policy</a>
                            <span className="footer-link">Address: 60 Nguyen Van Thu, Dakao ward, Dist.1 HCMC</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;