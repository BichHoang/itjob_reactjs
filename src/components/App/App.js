import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import Modal_Fade from '../HomePage/Modal_Fade/Modal_Fade';
import routes from '../../routes';
import {Prompt} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="container">
                        <Header />
                    </div>
                    {this.showContent(routes)}
                    <Footer/>
                </div>
            </Router>
        );
    }

    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }
}
export default App;