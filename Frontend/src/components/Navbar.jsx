import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleToggleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

//  for smoth scrolling
  const handleScroll = () => {
    const sections = ['home', 'services','about','pricing','testimonial']
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const element = document.getElementById(section);
        if(element)
        {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
    
            if(scrollPosition >= offsetTop && scrollPosition < offsetTop+height)
            {
                setActiveSection(section)
            }
        }
    })
}

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
        
    },[])

    const handleScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId)
        if(targetElement)
        {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            })
        }

    }


  const navLinks = (
    <ul
      className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4
        space-y-2 md:space-y-0 p-4 md:p-0"
    >
      <li>
        <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{scale: 0.9}}
          href="#home"
          className={`text-white ${activeSection === 'home' ? "isActive" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('home')
          }}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
          href="#services"
          className={`text-white ${
            activeSection === "services" ? "isActive" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('services')
          }}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
          href="#about"
          className={`text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
        >
          About Us
        </motion.a>
      </li>
      <li>
        <motion.a
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
          href="#pricing"
          className={`text-white ${
            activeSection === "pricing" ? "isActive" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("pricing");
          }}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
          href="#testimonial"
          className={`text-white ${
            activeSection === "testimonial" ? "isActive" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("testimonial");
          }}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );
  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed left-0 right-0 top-0 z-10 ">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div>
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        {/* navitems */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>
        {/* button */}
        <div className="hidden md:block">
          <a
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('contact')
            }}
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>
        {/* menu */}
        <div className="block md:hidden">
          <button
            onClick={handleToggleButton}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : ""
            }`}
          >
            <IoMenu className="size-8" />
          </button>
        </div>
      </div>
      {/* mobile nav items */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.props.children}
            <li className="py-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                  handleScrollTo('contact')
                }}
                className="text-white bg-primary hover:bg-primary/90  px-4 py-2 rounded"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};


export default Navbar;
