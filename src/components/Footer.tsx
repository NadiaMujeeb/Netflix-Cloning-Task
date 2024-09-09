import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-gray-400 py-8 px-4 sm:px-8 lg:px-24 xl:px-36 mb-8 underline">
      <div>
        <h4 className="text-white font-semibold text-xl mb-6">
          Questions? Call 000-800-919-1694
        </h4>
      </div>

      <div className="container">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between text-lg">
          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-1/3 lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">FAQ</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Help Centre</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Account</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Media Centre</a></li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-1/3 lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Investor Relations</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Jobs</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Ways to Watch</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Terms of Use</a></li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-1/3 lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Investor Relations</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Jobs</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Ways to Watch</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Terms of Use</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-full lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Contact Us</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Speed Test</a></li>
              <li className="mb-[10px]"><a href="#" className="hover:text-white">Legal Notices</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

