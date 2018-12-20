import React, { Component } from 'react';

class CadidateProfile extends Component {
    render() {
        return (
            <div>
                <div className="hidden-xs" id="scrolltop">
                    <div className="top-arrow" />
                </div>
                <div className="hidden-xs hidden-sm" id="feedback">
                    <a href="https://itviec.uservoice.com/forums/207426-general/filters/new" className="uservoice_link" target="_blank">FEEDBACK</a>
                </div>
                <div className="show_content main-content">
                    <div className="content">
                        <ul className="nav nav-tabs" id="account-tabs" role="tablist">
                            <li className="active tab-account" role="presentation">
                                <a aria-expanded="true" data-toggle="tab" href="#my-account-tab" role="tab">My Account</a>
                            </li>
                            <li className="tab-job-robot" role="presentation">
                                <a aria-expanded="false" data-toggle="tab" href="#jobrobot-tab" role="tab">My Job Robot</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div aria-labelledby="account-tab" className="active fade in tab-pane" id="my-account-tab" role="tabpanel">
                                <form className="simple_form edit_user" id="edit-user" noValidate="novalidate" encType="multipart/form-data" action="/profile" acceptCharset="UTF-8" method="post">
                                    <input name="utf8" type="hidden" defaultValue="✓" />
                                    <input type="hidden" name="_method" defaultValue="patch" />
                                    <input type="hidden" name="authenticity_token" defaultValue="2Up8fdheqOgc3v+f23Iz0DSOy3wYyV4/2gRr0PPtYX/nKT79H/8BS4xzql+FkZK+2MOubbxPZgiERSExIuOL4w==" />
                                    <div className="table-responsive">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className><img className="user-avatar" src="https://graph.facebook.com/v2.3/2215659571990178/picture?edit=true&height=100&sz=100&width=100" /></div>
                                                    </td>
                                                    <td className="user-name">
                                                        <h4>Welcome,</h4>
                                                        <h4>Hoàng Bích!</h4>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row user-info">
                                        <div className="col-xs-12">
                                            <div className="text">Manage your ITviec account settings.</div>
                                            <div className="user-info-wrapper">
                                                <label className="email-label">Email</label>
                                                <span className="email">hoangbich2506@gmail.com</span>
                                                <div className="input hidden user_email">
                                                    <input data-user={158188} className="hidden" type="hidden" defaultValue="hoangbich2506@gmail.com" name="user[email]" id="user_email" />
                                                </div>
                                            </div>
                                            <div className="user-info-wrapper">
                                                <div className="input string required user_name">
                                                    <label className="string required" htmlFor="user_name"><abbr title="required">*</abbr> Name</label>
                                                    <input data-msg="can't be blank" className="string required" required="required" aria-required="true" maxLength={50} size={50} type="text" defaultValue="Hoàng Bích" name="user[name]" id="user_name" />
                                                </div>
                                            </div>
                                            <div className="input styled_file optional other_kind_users_cv_input_wrapper">
                                                <div className="cv-label">
                                                    <label htmlFor="user_cv">CV</label>
                                                </div>
                                                <div className="cv-filefield-wrapper">
                                                    <div className="cv-filefield-new">
                                                        <div className="cv-filefield-custom">
                                                            <input className="fake_file" disabled id="cv_new_fake" placeholder="Select your CV..." />
                                                            <input className="cv_input_field_field" id="job_application_cv" name="cv" required="required" data-rule-filesize={1048576} data-msg-filesize="limit 1MB" data-rule-accept="application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" data-msg="can't be blank" data-msg-accept="Oops! Please attach a .doc .docx .pdf file" type="file" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix" />
                                            <div className="cv_description_wrapper shift-right">
                                                <div className="cv_description-left-space" />
                                                <div className="cv_description">We accept .doc .docx, .pdf files up to 1MB</div>
                                            </div>
                                            <br />
                                            <div className="user-info-wrapper">
                                                <label className="text optional label-cover-letter" htmlFor="user_cover_letter">Cover Letter</label>
                                                <textarea placeholder="Details and specific examples will make your application stronger..." className="cover-letter" maxLength={500} name="user[cover_letter]" id="user_cover_letter" defaultValue={"                                                "} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <input type="submit" name="commit" defaultValue="Save Changes" className="button-red user-info__action" data-disable-with="Save Changes" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div aria-labelledby="jobrobot-tab" className="tab-pane" id="jobrobot-tab" role="tabpanel">
                                <div className="row info">
                                    <div className="col-md-5">
                                        <h1>My Job Robot</h1>
                                        <p>Add new, edit or unsubscribe your Job Robots here.</p>
                                        <p className="notice" />
                                        <span className="error" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="jr-robby-image" />
                                    </div>
                                </div>
                                <div className="row jobrobots">
                                    <div className="col-md-12">
                                        <p className="email_of_user">
                                            hoangbich2506@gmail.com
                            </p>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table table-striped" id="table-jobrobot">
                                                <thead>
                                                    <tr>
                                                        <th />
                                                        <th>Keywords</th>
                                                        <th>City</th>
                                                        <th />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="new-job-robot">
                                                        <td className="delete">
                                                            <div className="ion-close" />
                                                        </td>
                                                        <td className="keywords">
                                                            <input type="text" name="query" id="query" className="hide" data-tags="[&quot;Python&quot;,&quot;Japanese&quot;,&quot;MySQL&quot;,&quot;Sharepoint&quot;,&quot;HTML5&quot;,&quot;C#&quot;,&quot;CSS&quot;,&quot;Agile&quot;,&quot;Mobile Apps&quot;,&quot;Linux&quot;,&quot;System Engineer&quot;,&quot;System Admin&quot;,&quot;OOP&quot;,&quot;Ruby on Rails&quot;,&quot;Database&quot;,&quot;Objective C&quot;,&quot;UI-UX&quot;,&quot;MVC&quot;,&quot;Bridge Engineer&quot;,&quot;JSON&quot;,&quot;Software Architect&quot;,&quot;Team Leader&quot;,&quot;SQL&quot;,&quot;Unity&quot;,&quot;Django&quot;,&quot;PostgreSql&quot;,&quot;AngularJS&quot;,&quot;C++&quot;,&quot;JavaScript&quot;,&quot;Product Manager&quot;,&quot;NodeJS&quot;,&quot;ERP&quot;,&quot;Wordpress&quot;,&quot;Drupal&quot;,&quot;Ruby&quot;,&quot;English&quot;,&quot;C language&quot;,&quot;Games&quot;,&quot;Project Manager&quot;,&quot;IT Support&quot;,&quot;Networking&quot;,&quot;JQuery&quot;,&quot;Magento&quot;,&quot;J2EE&quot;,&quot;Oracle&quot;,&quot;Embedded&quot;,&quot;Java&quot;,&quot;Manager&quot;,&quot;PHP&quot;,&quot;Tester&quot;,&quot;Android&quot;,&quot;iOS&quot;,&quot;Business Analyst&quot;,&quot;ASP.NET&quot;,&quot;QA QC&quot;,&quot;SAP&quot;,&quot;ReactJS&quot;,&quot;.NET&quot;,&quot;Zend&quot;,&quot;Yii&quot;,&quot;Joomla&quot;,&quot;CakePHP&quot;,&quot;Symfony&quot;,&quot;MeteorJS&quot;,&quot;MongoDB&quot;,&quot;Scrum&quot;,&quot;Cocos&quot;,&quot;Algorithm&quot;,&quot;Puppet&quot;,&quot;Chef&quot;,&quot;Designer&quot;,&quot;Selenium&quot;,&quot;DevOps&quot;,&quot;Laravel&quot;,&quot;AWS&quot;,&quot;React Native&quot;,&quot;Swift&quot;,&quot;Golang&quot;,&quot;DevOps&quot;,&quot;Spring&quot;,&quot;Hybrid&quot;,&quot;Xamarin&quot;,&quot;Cloud&quot;,&quot;jQuery&quot;,&quot;Blockchain&quot;,&quot;Fullstack&quot;,&quot;Frontend&quot;,&quot;Backend&quot;,&quot;Angular&quot;,&quot;NoSQL&quot;,&quot;Scala&quot;,&quot;VueJS&quot;,&quot;Hadoop&quot;,&quot;Spark&quot;]" />
                                                            <div className="message-saved">
                                                                <div className="bottom fade popover">
                                                                    <div className="arrow" />
                                                                    <div className="popover-content">
                                                                        <p className="msg-saved">Saved</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="message-limit-tags">
                                                                <div className="bottom fade popover">
                                                                    <div className="arrow" />
                                                                    <div className="popover-content">
                                                                        <p className="msg-error">Max 3 keywords</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="empty-message">
                                                                <div className="bottom fade popover">
                                                                    <div className="arrow" />
                                                                    <div className="popover-content">
                                                                        <p className="msg-error">&nbsp;</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="city">
                                                            <div className="city_section_wrapper">
                                                                <div className="city_select_wrapper">
                                                                    <div className="icon map-marker-icon">
                                                                        <div className="ion-ios-location-outline" />
                                                                    </div>
                                                                    <div className="city_field_wrapper">
                                                                        <select name="city" id className="hide">
                                                                            <option value="ho-chi-minh-hcm">Ho Chi Minh</option>
                                                                            <option value="ha-noi">Ha Noi</option>
                                                                            <option value="da-nang">Da Nang</option>
                                                                            <option value="others">Others</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="message-saved">
                                                                <div className="bottom fade in-city popover">
                                                                    <div className="arrow" />
                                                                    <div className="popover-content">
                                                                        <p className="msg-saved">Saved</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="message-limit-tags">
                                                                <div className="bottom fade in-city popover">
                                                                    <div className="arrow" />
                                                                    <div className="popover-content">
                                                                        <p className="msg-error">Max 3 keywords</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="empty-message">
                                                                <div className="bottom fade in-city popover">
                                                                    <div className="arrow" />
                                                                    <div className="popover-content">
                                                                        <p className="msg-error">&nbsp;</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="action">
                                                            <button className="button-red subscribe-action" type="submit">Get Jobs</button>
                                                            <p className="msg-subscribed">Subscribed</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="msg-new-job-robot">
                                            <p className="msg-alert">Don't miss your next job!</p>
                                            <p>Add your skill and city, then click "Get Jobs". We'll email you suitable new jobs, up to 1 email per day.</p>
                                        </div>
                                        <div className="add-new-job-robot">
                                            <button className="button-red" type="submit">Add new</button>
                                            <div className="message-limit-tags">* Maximum 5 Job Robot</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CadidateProfile;