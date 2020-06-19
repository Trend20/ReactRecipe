import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  recepie1 from '../assets/recipe1.jpeg';
 
class Home extends Component {
    render() { 
        return (
            <div className="container" style={{width:'18rem'}}>
                <div className="card">
                    <img className="card-img-top" src={recepie1} />
                </div>
                <div className="card-body">
                    <h1 className="card-title">Recipe1</h1>
                    <p className="card-text">This is how to prepare Kuon</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                </div>
            </div>
        );
    }
}
 
export default Home;