import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Navbar extends Component {
    render() { 
        return (
            <Router>
                <div className="container-fluid">
                    <nav className="nav navbar navbar-dark">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router>
        );
    }
}
 
export default Navbar;