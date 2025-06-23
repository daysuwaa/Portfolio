import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="my-[2rem] md:mx-[5rem] mx-auto flex items-center justify-between">
      {/* Logo on the left */}
      <p className="gwendolyn-font text-2xl md:text-4xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent rounded-full px-3 py-2">
        Daysuwa!
      </p>

      {/* Nav links centered inside flex-grow container */}
      <div className="flex-grow hidden lg:block">
        <nav>
          <ul className="flex gap-12 justify-center font-medium">
            <li>
              <Link href="#section1" className="nav-link nav-link-ltr">
                Home
              </Link>
            </li>
            <li>
              <Link href="#section2" className="nav-link nav-link-ltr">
                About
              </Link>
            </li>
            <li>
              <Link href="#section3" className="nav-link nav-link-ltr">
                Tools
              </Link>
            </li>
            <li>
              <Link href="#section4" className="nav-link nav-link-ltr">
                Project
              </Link>
            </li>
            <li>
              <Link href="#section5" className="nav-link nav-link-ltr">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
