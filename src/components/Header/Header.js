import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
// import useFirebase from '../../useFirebase/useFirebase';

const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <nav className="header bg-primary text-center text-white mx-auto">
            <h1>Welcome to Happy Dental</h1>
            <Link className="text-white font-weight-bold" to="/Home">Home</Link>
            <br />



            <Link className="text-white" to="/Services">Services</Link>
            <br />

            <Link className="text-white" to="/About">About</Link>
            <br />

            <Link className="text-white " to="/Contact">Contact</Link>

            {user.email && <span> Hello {user.displayName}</span>}

            <br />
            {
                user.email ?
                    <button onClick={logOut}>Log Out</button>
                    :
                    <Link className="text-white " to="/Login">Login</Link>
            }

        </nav>

    );
};

export default Header;