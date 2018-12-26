import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }   
    render() {
        return ( 
            <div className="search-form-wrapper clearfix">
                        <form id="search_form" className="search-form" action="/it-jobs" acceptCharset="UTF-8" method="get">
                            <input name="utf8" type="hidden" defaultValue="✓" />
                            <div className="search_section_wrapper no_header">
                                <div className="search_text_wrapper">
                                    <div className="ion-ios-search" />
                                    <div className="search_field_wrapper">
                                        <input type="text" name="query" id="search_text" className="search_text" placeholder="key word..." />
                                    </div>
                                </div>
                            </div>
                            <div className="city_section_wrapper">
                                <div className="city_select_wrapper">
                                    <div className="ion-ios-location-outline" />
                                    <div className="city_field_wrapper">
                                        <select name="city" id="city" className="search_city">
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
        );
    }
}

export default Search;


