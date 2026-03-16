import React from 'react';

const SingleFood = ({ food, addToCart }) => {

    return (
        <div className='card'>
            <img src={food.strMealThumb} alt="" />
            <h2>{food.strMeal}</h2>

            <button onClick={() => addToCart(food)}>Cart</button>
        </div>
    );
};

export default SingleFood;