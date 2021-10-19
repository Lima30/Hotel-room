import React from 'react';
import { Link } from 'react-router-dom';

const Information = (props) => {
    console.log(props)
    const { name, company, picture, balance, description, Instructor } = props.people;

    return (
        <div className="col col-sm-3 col-md-6 col-lg-4">
            <div className="card text-center">
                <img src={picture} className="card-img-top img-thumbnail rounded mx-auto d-block mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">Disease Name: {name}</h5>
                    <p className="card-title">Provider Name: {Instructor}</p>
                    <p className="card-text">Treatment Duration: {company}</p>
                    <p className="card-text">Treatment Cost: ${balance}</p>
                    <p className="card-text">Treatment Description: {description}</p>
                    <button type="button"
                        onClick={() => props.handleAddToCart(props.people)}
                        className="btn btn-primary btn-sm btn btn-warning ">Add to Cart</button>
                    <br />

                    <button> <Link to="/services">Details</Link></button>

                </div>
            </div>
        </div>

    );
};

export default Information;