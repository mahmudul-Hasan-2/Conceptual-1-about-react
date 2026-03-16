import React from 'react';

const Cart = ({ cart }) => {

    return (
        <div>
            {

                cart.map(c => {
                    return ( // <--- এই return টা দিতে হবে
                        <div className='card' key={c.idMeal}>
                            <img src={c.strMealThumb} alt="" />
                            <h2>{c.strMeal}</h2>
                        </div>
                    );
                })

            }
        </div>
    );
};

export default Cart;