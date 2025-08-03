import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#55E6A5] text-white shadow-lg hover:bg-[#48c092] transition-all duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}

