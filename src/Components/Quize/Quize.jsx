import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCart from '../SingleCart/SingleCart';

const Quize = () => {
    const data = useLoaderData();
    const cartData = data.data;
    return (
        <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center pt-16'>
                {
                    cartData.map(cart => <SingleCart
                        key={cart.id}
                        cart={cart}
                    />)
                }
            </div>
        </div>
    );
};

export default Quize;