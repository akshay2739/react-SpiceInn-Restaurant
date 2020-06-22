import React, { Component } from 'react'
import navbar from './Home/Navbar'
import Navbar from './Home/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Menu from './Menu/Menu'
import Gallary from './Gallary/Gallary'
import Contact from './Contact/Contact'

export default class Dashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/Gallary" component={Gallary} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        )
    }
}
