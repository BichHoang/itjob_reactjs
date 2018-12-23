import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="content">
                    <div className="bottom">
                        <div className="footer-links hidden-xs">
                            <div className="col-md-3">
                                <a className="footer-link" href="/">Home</a>
                                <a className="footer-link" href="/it-jobs">All Jobs</a>
                                <a target="_blank" className="footer-link" href="/blog/about-us/">About Us</a>
                            </div>
                            <div className="col-md-3">
                                <a target="_blank" className="footer-link" href="/blog/chinh-sach-bao-mat/">Privacy Policy</a>
                                <a target="_blank" className="footer-link" href="/blog/terms-and-conditions/">Term &amp; Conditions</a>
                                <a target="_blank" className="footer-link" href="/blog/chinh-sach-giai-quyet-khieu-nai/">Complaint Handling Policy</a>
                            </div>
                            <div className="col-md-6">
                                <span className="footer-link">Address: 58 Nguyễn Lương Bằng, Đà Nẵng, Việt Nam</span>
                                <span className="footer-link">Tax code: 0312192258</span>
                                <span className="footer-link">Phone: 028.66811397</span>
                            </div>
                        </div>
                        <div>
                            <center><span className="footer-link">Copyright © IT JOBS</span></center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;