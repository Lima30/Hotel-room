import React from 'react';
// import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
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


        // <>
        //     <Navbar bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg" >
        //         <Container>
        //             <Navbar.Brand href="#home">Genius</Navbar.Brand>
        //             <Navbar.Toggle />
        //             <Navbar.Collapse className="justify-content-end">
        //                 <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
        //                 <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
        //                 <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
        //                 {user?.email ?
        //                     <Button onClick={logOut} variant="light">Logout</Button> :
        //                     <Nav.Link as={Link} to="/login">Login</Nav.Link>}
        //                 <Navbar.Text>
        //                     Signed in as: <a href="#login">{user?.displayName}</a>
        //                 </Navbar.Text>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </>

    );
};

export default Header;