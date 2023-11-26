import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Correct import statement
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-black h-16 text-white pt-5 pr-10">
        <div className="flex justify-end gap-x-5">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/signIn">SignIn</Link>
                <Link to="/signUp">SignUp</Link>
            <GiHamburgerMenu className="lg:hidden md:hidden mt-1" />
        </div>
    </nav>
  );
}
