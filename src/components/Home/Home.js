import React from 'react';

import People from '../Header/People/People';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>




            <br />
            <Banner></Banner>

            <br />
            <br />
            <br />

            <h1 className="text-center text-primary mx-10">Our Services</h1>
            <br />

            <People></People>
            <br />
            <br />
            <br />

            <img className="rounded mx-auto d-block img-fluid" src="https://www.trucaredentistry.com/blog/wp-content/uploads/What-are-the-primary-differences-between-dentistry-and-medicine_.jpg" alt="" />
            <br />
            <h4 className="text-center text-primary">LOOKING FOR A SPECIALIZED DENTIST?</h4>
            <p className="text-center">If you need outstanding dental care for your family’s smiles, Dr. XX YY can help. Contact our Broomfield,</p>
            <p className="text-center">CO dental office today to schedule an appointment. At Happy Dentistry, we take pride in promoting and</p>
            <p className="text-center">protecting lifelong oral health and beauty.</p>
            <br />
            <br />
            <br />
            <h3 className="text-center text-primary">Our Patients Talk About Their Experience.</h3>
            <p className="text-center">Please take a moment to read and watch what our patients have to say about their</p>
            <p className="text-center">experience at Smiles for Life. See what others have to say about how various treatments such</p>
            <p className="text-center">as dental implants, Six Month Smiles, dental bonding, and sleep apnea treatment has</p>
            <p className="text-center">helped to dramatically improve the well-being of our patients. As part of our commitment</p>
            <p className="text-center">and dedication to our patients, it is our priority to help everyone achieve the beautiful,</p>
            <p className="text-center">healthy smile that makes them proud to show off to family and friends</p>





        </div>
    );
};

export default Home;