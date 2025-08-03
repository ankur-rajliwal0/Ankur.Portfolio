"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };

    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button
      onClick={toggle}
      className="lg:hidden outline-none border-none cursor-pointer w-12 h-12 flex items-center justify-center relative z-[60]"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg width="23" height="23" viewBox="0 0 23 23" className="absolute">
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="#55E6A5"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="#55E6A5"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="#55E6A5"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </button>
  );

  return (
    <nav className="text-white bg-[#09101A] sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between px-8 items-center py-5 bg-[#141C27] rounded-lg">
          <div 
            className="text-[35px] font-oswald font-bold text-[#55E6A5] cursor-pointer"
            onClick={() => scrollToSection('home')}
            data-aos="flip-left"
          >
            Ankur
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8" >
            {navItems.map((item) => (
              <li
                key={item.id}
                className="font-popins hover:text-[#55E6A5] cursor-pointer transition-colors duration-300"
                onClick={() => scrollToSection(item.id)} data-aos="flip-left"
              >
                {item.name}
                
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button - Always visible on mobile */}
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />

          {/* Mobile Menu Overlay */}
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className={`lg:hidden fixed inset-0 bg-[#141C27]/95 z-40 ${isOpen ? 'block' : 'hidden'}`}
            variants={{
              open: { 
                opacity: 1,
                transition: { duration: 0.3 }
              },
              closed: { 
                opacity: 0,
                transition: { 
                  duration: 0.3,
                  delay: 0.15 
                }
              }
            }}
          >
            <motion.ul
              className="absolute top-28 right-8 w-64 list-none p-0 m-0 z-50"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-8 cursor-pointer text-right pr-8 text-xl font-popins hover:text-[#55E6A5] transition-all duration-300"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;