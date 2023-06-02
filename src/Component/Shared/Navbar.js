import React from 'react';
import img from '../../assets/images/pets-g1111451cc_1280.jpg'
import { Link } from 'react-daisyui';

const Navbar = () => {
    const menuItems=<>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div style={{
            background:`url(${img})`
        }}>
        <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                    {menuItems}
                    </ul>
                </div>
                
                </div>
        </div>
    );
};

export default Navbar;