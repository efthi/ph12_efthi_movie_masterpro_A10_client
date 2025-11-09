import React from 'react';
import { Star, Clapperboard, LibraryBig,ListChecks , LogIn } from 'lucide-react';
import { NavLink } from 'react-router';



const defaultPropic ='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=';

const Navbar = () => {
    
const links = <>
            <li><NavLink to='/' className={({isActive})=> isActive ? "btn btn-outline btn-accent" : ""} ><Star size={16} color="#8000ff" strokeWidth={1.5} />Home</NavLink></li>
            <li><NavLink to='/allmovies' className={({isActive})=> isActive ? "btn btn-outline btn-accent" : ""}><Clapperboard size={16} color="#8000ff" strokeWidth={1.5} /> All Movies</NavLink></li>
            <li><NavLink to='/mycollection' className={({isActive})=> isActive ? "btn btn-outline btn-accent" : ""}><LibraryBig size={16} color="#8000ff" strokeWidth={1.5} />My Collection</NavLink></li>
            <li><NavLink to='/wishlist' className={({isActive})=> isActive ? "btn btn-outline btn-accent" : ""} ><ListChecks  size={16} color="#8000ff" strokeWidth={1.5} />Wishlist</NavLink></li>
            <li><NavLink to='/login' className={({isActive})=> isActive ? "btn btn-outline btn-accent" : ""}><LogIn size={16} color="#8000ff" strokeWidth={1.5} />Login/Register</NavLink></li>
            </>

    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {/* Navmenu small */}
                {links}
             </ul>
            </div>
            <div className="navbar-start">
                <span ><img className="max-h-[100px] max-w-[180px] shadow rounded-4xl" src="../../public/assets/logo/logo.png" alt="" /></span>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                 {/* Navmenu md to lg  */}
                    {links}
                </ul>
            </div>           
            {/* Login button and Profile menu section starts here */}
            <div className="navbar-end gap-2">
                 {/* toogle button */}
            <input type="checkbox"
            className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"/>
                <a className="btn btn-xs md:btn-md">Button</a>
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Profile Picture" src={defaultPropic} />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className="justify-between">Profile</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
            {/* Login button and Profile menu section ends here */}
        </div>
        </>
    );
};

export default Navbar;