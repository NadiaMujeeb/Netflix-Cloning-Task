import React, { useState } from "react";

const DropdownNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 border-2 border-white text-white font-bold px-4 py-2 rounded-md flex items-center justify-between"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        <span className="mr-2 ">English</span>
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
        <div id="dropdown-menu" className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-md">
          <button
            onClick={() => setIsOpen(false)}
            className="block w-full text-left px-4 py-2 text-black hover:bg-gray-300"
          >
            हिंदी
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownNav;
