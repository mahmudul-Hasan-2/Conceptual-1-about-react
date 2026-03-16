import React from 'react';
import foodImage from '../assets/food.jpg'

const Navbar = () => {
    return (
        <div>
            <nav className='nav-container'>
                <div className='nav-left'>
                    <img src={foodImage} alt="" />
                    <p>Meal Hub</p>
                </div>
                <div className='nav-right'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Order Online</p>
                    <p>Contact</p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;