import React, { use, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';

const FoodSection = ({ foodDataRes }) => {
    const foodsData = use(foodDataRes);
    const foods = foodsData.meals;
    const [cart, setCart] = useState([]);

    const addToCart = (addToCart) => {
        setCart([...cart, addToCart]);
    }

    const handleOrder = () => {
        setCart([]);
        toast('Order Successful')
    }

    return (
        <div className='container'>
            <div className='dividing' style={{
                width: '75%',
            }}>
                {
                    foods.map(food => <SingleFood addToCart={addToCart} key={food.idMeal} food={food}></SingleFood>)
                }
            </div>
                <ToastContainer />
            <div style={{
                width: "25%",
                background: '#00000034'
            }}>
                <h2>Cart</h2>
                <Cart cart={cart}></Cart>
                <button onClick={handleOrder}>Order</button>
            </div>
        </div>
    );
};

export default FoodSection;