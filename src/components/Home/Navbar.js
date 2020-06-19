import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from '../About/About';
import Recipes from '../Recipes/Recipes';
 
class Navbar extends Component {
    render() { 
        return (
            <Router>
                <div className="container-fluid">
                    <nav className="nav navbar navbar-dark">
                        <ul className="nav">
                            <li className="nav-link">
                                <Link to="/" className="nav-item">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/recipes">
                            <Recipes />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
 
export default Navbar;