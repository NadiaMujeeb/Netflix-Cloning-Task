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
              <li className="mb-[10px]"><a href="https://help.netflix.com/en/node/412" className="hover:text-red-500">FAQ</a></li>
              <li className="mb-[10px]"><a href="https://ir.netflix.net/ir-overview/profile/default.aspx" className="hover:text-red-500">Investor Relations</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/legal/privacy" className="hover:text-red-500">Privacy</a></li>
              <li className="mb-[10px]"><a href="https://fast.com/" className="hover:text-red-500">Speed Test</a></li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-1/3 lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="https://help.netflix.com/en" className="hover:text-red-500">Help Centre</a></li>
              <li className="mb-[10px]"><a href="https://jobs.netflix.com/" className="hover:text-red-500">Jobs</a></li>
              <li className="mb-[10px]"><a href="https://www.netflix.com/in/" className="hover:text-red-500">Cookie Preferences</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/legal/notices" className="hover:text-red-500">Legal Notices</a></li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-1/3 lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount" className="hover:text-red-500">Account</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/en/node/14361" className="hover:text-red-500">Ways to Watch</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/en/node/134094" className="hover:text-red-500">Corporate Information</a></li>
              <li className="mb-[10px]"><a href="https://www.netflix.com/in/browse/genre/839338" className="hover:text-red-500">Only on Netflix</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-full lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="https://media.netflix.com/en/" className="hover:text-red-500">Media Center</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/legal/termsofuse" className="hover:text-red-500">Terms of Use</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/en/contactus" className="hover:text-red-500">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

