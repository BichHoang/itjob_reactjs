import React, { Component } from 'react';

class Rating extends Component {
    render() {
        return (
            <section className="rating-widget">
                <div className="rating-stars text-center">
                    <ul id="stars">
                    <li className="star" title="Poor" data-value={1}>
                        <i className="fa fa-star fa-fw" />
                    </li>
                    <li className="star" title="Fair" data-value={2}>
                        <i className="fa fa-star fa-fw" />
                    </li>
                    <li className="star" title="Good" data-value={3}>
                        <i className="fa fa-star fa-fw" />
                    </li>
                    <li className="star" title="Excellent" data-value={4}>
                        <i className="fa fa-star fa-fw" />
                    </li>
                    <li className="star" title="WOW!!!" data-value={5}>
                        <i className="fa fa-star fa-fw" />
                    </li>
                    </ul>
                </div>
                <div className="success-box">
                    <div className="clearfix" />
                    <div className="text-message" />
                    <div className="clearfix" />
                </div>
           </section>
        );
    }
}
export default Rating;