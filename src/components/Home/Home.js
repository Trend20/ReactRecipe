import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  recepie1 from '../assets/recipe1.jpeg';
 
class Home extends Component {
    render() { 
        return (
            <div className="container-fluid" style={{width:'70vw', 
            display:'flex',
            justifyContent:'space-around',}}>
                <div className="card">
                    <img className="card-img-top" src={recepie1} />
                    <div className="card-body">
                    <h1 className="card-title">Recipe1</h1>
                    <p className="card-text">This is how to prepare Kuon</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={recepie1} />
                    <div className="card-body">
                    <h1 className="card-title">Recipe1</h1>
                    <p className="card-text">This is how to prepare Kuon</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={recepie1} />
                    <div className="card-body">
                    <h1 className="card-title">Recipe1</h1>
                    <p className="card-text">This is how to prepare Kuon</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Home;