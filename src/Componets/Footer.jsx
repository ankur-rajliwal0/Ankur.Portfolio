import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white font-popins">
      <div className="container mx-auto px-6 py-10">
        
       
        <div className="flex flex-col md:flex-row justify-between gap-10 border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        
  <div className=" mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ankur. All rights reserved.
        </div>
          {/* Column 2
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#55E6A5] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#55E6A5] transition">About</a></li>
              <li><a href="#" className="hover:text-[#55E6A5] transition">Services</a></li>
              <li><a href="#" className="hover:text-[#55E6A5] transition">Contact</a></li>
            </ul>
          </div> */}

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-300">Hisar, Haryana, India</p>
            <p className="text-sm text-gray-300">ankur.rajliwal33@gmail.com</p>
            <p className="text-sm text-gray-300">+91 70828 92696</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
