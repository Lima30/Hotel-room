import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';


const People2 = () => {
    const [people, setPeople] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('./people2.JSON')
            .then(res => res.json())
            .then(data => setPeople(data));

    }, [])

    const handleAddToCart = (people) => {
        const newCart = [...cart, people];
        setCart(newCart);
    }

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    people.map(people => <Information
                        key={people.email}
                        people={people}
                        handleAddToCart={handleAddToCart}

                    >
                    </Information>)
                }


            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default People2;