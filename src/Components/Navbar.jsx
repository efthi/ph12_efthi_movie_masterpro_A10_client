import React from 'react';


const defaultPropic ='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=';

const Navbar = () => {
    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <span ><img className="max-h-[100] max-w-[200] shadow rounded-4xl" src="../../public/assets/logo/logo.png" alt="" /></span>
            </div>
            {/* Login button and Profile menu section starts here */}
            <div className="navbar-end gap-2">
                <a className="btn">Button</a>
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Profile Picture" src={defaultPropic} />
                        </div>
                    </div>
                    <ul
                        tabindex="-1"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a class="justify-between">Profile</a></li>
                        <li><a>Settings</a></li>
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