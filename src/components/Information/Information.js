import React from 'react';

const Information = (props) => {
    console.log(props)
    const { name, company, picture, balance, description, Instructor } = props.people;

    return (
        <div className="col">
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

                </div>
            </div>
        </div>

    );
};

export default Information;