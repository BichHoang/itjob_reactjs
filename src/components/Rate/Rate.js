import React, { Component } from 'react';

class Rate extends Component {
    render() {
        return (
            <div className="col-md-4 col-right">
                            <div className="panel panel-default company-ratings">
                                <div className="panel-heading">
                                    <h2 className="panel-title">Ratings</h2>
                                </div>
                                <div className="panel-body disable-user-select">
                                    <span className="rating-stars-box">
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <i className="default icon ion-ios-star {:size=>&quot;&quot;}" />
                                        <span style={{ width: '68.0%' }}>
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                            <i className="blue icon ion-ios-star {:size=>&quot;&quot;}" />
                                        </span>
                                    </span>
                                    <span className="company-ratings__star-point">3.4</span>
                                    <hr className="divider" />
                                    <table className="company-rating-info__chart-recommend clearfix">
                                        <tbody>
                                            <tr>
                                                <td className="chart" data-rate={80} id="company-rating__rate">
                                                    <strong />
                                                </td>
                                                <td className="recommend">Recommend working here to a friend</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr className="divider" />
                                    <div className="view-more">
                                        <a href="/companies/fpt-software/review">See all ratings and reviews</a>
                                        <i className="fa fa-caret-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default company-ratings">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Feature Reviews</h3>
                                </div>
                                <div className="panel-body disable-user-select">
                                    <div className="review featured">
                                        <a className="title" href="/companies/fpt-software/review">''Sếp tốt, Lead giỏi học hỏi được nhiều kinh nghiệm ''</a><br/>
                                        <span className="round-rate-rating-stars-box">
                                            <span className="fa-stack">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                            <span className="fa-stack">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                            <span className="fa-stack">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                            <span className="fa-stack">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                            <span className="fa-stack unchecked">
                                                <i className="fa fa-square fa-stack-2x" />
                                                <i className="ion-ios-star fa-stack-1x fa-inverse" />
                                            </span>
                                        </span>
                                        <div className="paragraph">
                                            Sếp tốt, Lead giỏi học hỏi được nhiều kinh nghiệm. Cảm thấy bản thân có một bước phát triển rõ rệt khi vào làm ở fsoft. Có nhiều khóa học để nhân viên có thể tham gia. Dự án của mình chưa bao giờ OT. Được tham gia nhiều các event ăn chơi của t...
                                        </div>
                                    </div>
                                    <br />
                                    <a className="button ibutton full-width ibutton-red big add-review-when-not-sign-in" rel="nofollow" data-add-review="true" data-toggle="modal" data-target="#sign-in-modal" >Add a review</a>
                                </div>
                            </div>
                        </div>
        );
    }
}
export default Rate;