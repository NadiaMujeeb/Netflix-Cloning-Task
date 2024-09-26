import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';



const DropdownNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHindiClick = () => {
    setIsOpen(false); // Close the dropdown
    console.log("Navigating to English page");
    navigate("/dashboard"); // Navigate to the Hindi component route
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 border border-white text-white font-bold px-4 py-2 rounded-md flex items-center justify-between"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        <span className="mr-2 w-12 ">हिंदी</span>
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div id="dropdown-menu" className="absolute right-0 mt-2 w-[108px] bg-white shadow-lg rounded-md">
          <button
            onClick={handleHindiClick}
            className="block w-full text-left px-4 py-2 text-black hover:bg-gray-300"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownNav;


