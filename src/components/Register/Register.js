import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2 className="text-center">Create New Account</h2>
                <div className="d-flex justify-content-center">
                    <form onSubmit="">
                        <input type="name" name="" id="" placeholder="Your Name" />
                        <br />
                        <br />

                        <input type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <br />
                        <input type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <br />
                        <input type="password" name="" id="" placeholder="Re-enter Your Password" />
                        <br />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <br />
                <p className="text-center">Already have an Account? <Link to="/login">Login</Link></p>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-secondary btn-sm text-center">Google Sign in </button>


            </div>
            <br />
        </div>
    );
};

export default Register;
//