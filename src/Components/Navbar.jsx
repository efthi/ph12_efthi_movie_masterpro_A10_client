import React from 'react';

const Navbar = () => {
    return (
        <>
          <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-primary text-primary-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
                </div>
                <span className="text-xs md:text-xl">daisyUI</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Item 2</a></li>
                <li><a>About Us</a></li>
                <li><a>Contact Us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Profile Image"
                        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
                    </div>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a className="justify-between">Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>  
        </>
    );
};

export default Navbar;