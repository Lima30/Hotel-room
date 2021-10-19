import React, { useEffect, useState } from 'react';
// import Cart from '../../Cart/Cart';
// import Information from '../../Information/Information';
import Information2 from '../../Information2/Information2';

const People = () => {
    const [people, setPeople] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('./people.JSON')
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
                    people.map(people => <Information2
                        key={people.email}
                        people={people}
                        handleAddToCart={handleAddToCart}

                    >
                    </Information2>)
                }

            </div>
            {/* <div>
                <Cart cart={cart} ></Cart>
            </div> */}

        </div>
    );
};

export default People;