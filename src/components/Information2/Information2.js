import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Information2 = (props) => {
    console.log(props)
    const { key, Roomname, BedType, Person, Price, description, picture } = props.people;

    const history = useHistory();

    function handleDetails(key) {
        const uri = `/details/${key}`;
        history.push(uri);
    }
    return (
        <div className="col col-sm-3 col-md-6 col-lg-4">
            <div className="card text-center ">
                <img src={picture} className="card-img-top img-thumbnail rounded mx-auto d-block mx-auto" alt="..." />
                <div className="card-body">

                    <h5 className="card-title text-primary">Disease Name: {Roomname}</h5>
                    <p className="card-title">Provider Name: {BedType}</p>
                    <p className="card-text">Treatment Duration: {Person}</p>
                    <p className="card-text">Treatment Cost: ${Price}</p>
                    <p className="card-text">Treatment Description: {description}</p>


                    {/* <button type="button"
                        onClick={() => props.handleAddToCart(props.people)}
                        className="btn btn-primary btn-sm btn btn-warning ">Details</button> */}

                    <button onClick={() => handleDetails(key)} className="btn btn-warning">Details</button>
                    <br />
                    <button> <Link to="/services">Add to Cart</Link></button>

                </div>
            </div>





        </div>
    );
};

export default Information2;


// return (
//     <div className="col col-sm-3 col-md-6 col-lg-4">
//         <div className="card text-center ">
//             <img src={picture} className="card-img-top img-thumbnail rounded mx-auto d-block mx-auto" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title text-primary">Disease Name: {name}</h5>
//                 <p className="card-title">Provider Name: {Instructor}</p>
//                 <p className="card-text">Treatment Duration: {company}</p>
//                 <p className="card-text">Treatment Cost: ${balance}</p>
//                 <p className="card-text">Treatment Description: {description}</p>
//                 <button type="button"
//                     onClick={() => props.handleAddToCart(props.people)}
//                     className="btn btn-primary btn-sm btn btn-warning ">Add to Cart</button>
//                 <br />

//                 <button> <Link to="/services">Details</Link></button>

//             </div>
//         </div>
//     </div>

// );
// };


