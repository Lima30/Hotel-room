import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';


initializeAuthentication();
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const auth = getAuth();

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        e.preventDefault();
    }
    return (
        <div>
            <div>
                <h2 className="text-center">Create New Account</h2>
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleRegistration}>
                        <input onBlur={handleNameChange} type="name" name="" id="" placeholder="Your Name" />
                        <br />
                        <br />

                        <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required />
                        <br />
                        <br />
                        <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" required />
                        <br />
                        <br />
                        <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Re-enter Your Password" required />
                        <br />
                        <br />
                        <input type="submit" value="Register" />
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