import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '../_helpers';
import { HomePage } from './HomePage';

class App extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <Router history={history}>
                        <div>
                            <Route exact path="/" component={HomePage} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export { App };