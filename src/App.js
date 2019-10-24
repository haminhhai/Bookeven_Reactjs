import React, { Component } from 'react';
import Footer from './layouts/Footer/Footer'
import { routes } from './routes/Routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
class App
    extends Component {
    getRoutes(routes) {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main} />
                );
            })
        }

        return result;
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        {this.getRoutes(routes)}
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App
    ;