import { Link, useLocation } from 'react-router-dom';
import { headerLogo, safezones } from "../assets/images"; // Adjust the import path as necessary
import { navLinks } from "../constants"; // Adjust the import path as necessary
import React, { useEffect, useState } from 'react';


const Nav = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
  const location = useLocation(); // Hook to get the current location

  // Toggle sidebar visibility
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar function
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    if (isSidebarOpen) {
      sidebar.classList.add("show");
    } else {
      sidebar.classList.remove("show");
    }

    // Update sidebar top position when navbar height changes
    const navbar = document.getElementById("navbar");
    if (navbar) {
      sidebar.style.top = `${navbar.clientHeight - 1}px`;
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    // Close sidebar when navigating to a different page
    closeSidebar();
  }, [location]); // Runs when the location changes

  useEffect(() => {
    const handleScroll = () => {
      // Close the sidebar when scrolling
      closeSidebar();
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-wrap  place-items-center w-full  ">
      <section className="relative w-full mx-auto">
        <nav id="navbar" className="sticky top-0 z-40 flex w-full flex-row justify-end bg-black px-4 sm:justify-between">
          <ul className="breadcrumb hidden flex-row items-center py-4 text-lg text-white sm:flex">
            <Link to="/" className="text-3xl font-bold font-heading">
              <img src={headerLogo} alt="logo" width={129} height={10} className="object-contain h-[60px]" />
            </Link>
          </ul>
          <div className="flex items-center space-x-6"> {/* Flex container for alignment */}
            <div class="flex px-4 py-3 rounded-md border-[1px] border-gray-200 overflow-hidden max-w-md mx-auto font-[sans-serif]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                class="fill-gray-600 mr-3 rotate-90">
                <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
              <input type="email" placeholder="Search Something..." class="w-full outline-none bg-transparent text-gray-400 text-sm" />
            </div>

            <div className="hidden xl:flex items-center space-x-2.5">
              <Link className="text-red-800" to="/Loved">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>

              <Link className="text-gray-200 flex items-center relative" to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </Link>

              <Link className="text-gray-200  flex items-center" to="/signin">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
            <button
              id="btnSidebarToggler"
              type="button"
              onClick={handleSidebarToggle}
              className="py-4 text-2xl text-white hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-8 w-8 ${isSidebarOpen ? 'hidden' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-8 w-8 ${isSidebarOpen ? '' : 'hidden'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Sidebar start */}
        <div id="containerSidebar" className="relative z-40" >
          {/* Background Video */}


          <nav
            id="sidebar"
            className={`fixed mt-[48px] left-0 z-40 bottom-0 flex w-3/4 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } flex-col overflow-y-auto bg-red bg-opacity-70 pt-6 pb-8 sm:max-w-xs lg:w-80`} // Background opacity for better text visibility  
          >
            <video
              className="absolute inset-0 w-full h-full object-fill -z-10" // Ensure the video stays behind other elements
              src={safezones}
              autoPlay
              loop
              muted
              playsInline
              alt="Clips Video"
            />
            {/* Navigation groups */}
            <div className="w-full -mt-[30px]"> {/* Add a div container to ensure full width */}
              <ul className="flex flex-col bg-black rounded-md p-2 text-white md:grid md:justify-start font-semibold font-heading z-40 w-full m-0 "> {/* Remove ml-12 to avoid margin issues */}
                {navLinks && navLinks.length > 0 ? (
                  navLinks.map((item) => (
                    <li key={item.label} className="w-full text-xs ml-12"> {/* Ensure full width for each list item */}
                      <Link
                        to={item.href}
                        className="block py-2 text-left w-full" // Full width for the link  
                        onClick={closeSidebar}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-center w-full">No links available.</li> // Fallback if no links exist  
                )}
              </ul>
            </div>




            {/* Additional sections for Legal and Others can be added similarly */}
          </nav>
        </div>

        {/* Sidebar end */}

        {/* Main Content */}
        <main>
          {/* Content goes here */}
        </main>
      </section>

      {/* Navbar with logo and links */}
    </div>
  );
};

export default Nav;
