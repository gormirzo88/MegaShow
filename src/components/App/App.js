import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from "../Header";
import Dashboard from "../Dashboard";
import Footer from "../Footer";
import ItemDetail from "../ItemDetail";
import AboutUs from "../AboutUs";





class App extends Component {
    render() {
        return (
                <Router>
                    <Header />
                        <Switch>
                            <Route path="/" component={Dashboard} exact />
                            <Route path="/detail" component={ItemDetail} exact />
                            <Route path="/about-us" component={AboutUs} exact />
                            <Route component={Dashboard} />
                        </Switch>
                    <Footer />
                </Router>
        );
    }
}

export default App;
