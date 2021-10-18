import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../useFirebase/useFirebase';

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase();

    return (
        <div>
            <br />
            <h2 className="text-center">This is Login page</h2>
            <div className="d-flex justify-content-center">
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="email" name="" id="" placeholder="Your Password" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <br />
            <p className="text-center">New to Lima's Dental Clinic? <Link to="/register">Create New Account</Link></p>
            <p className="text-center">------------------or--------------------</p>
            <div className="d-flex justify-content-center">
                <button type="button"
                    className="btn btn-secondary btn-sm text-center"
                    onClick={signInUsingGoogle}
                >Google Sign in </button>


            </div>
            <br />
        </div>
    );
};

export default Login;