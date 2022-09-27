import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='bg-zinc-800'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                    <li className='text-white'><a>Order</a></li>
                    <li className='text-white'><a>Order Review</a></li>
                    <li className='text-white'><a>Manage Inventory</a></li>
                    <li className='text-white'><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;