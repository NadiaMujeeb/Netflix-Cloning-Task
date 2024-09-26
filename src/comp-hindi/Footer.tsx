import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-gray-400 py-8 px-4 sm:px-8 lg:px-24 xl:px-36 mb-8 underline">
      <div>
        <h4 className="text-white font-semibold text-xl mb-6">
        कोई सवाल? 000-800-919-1694 पर कॉल करें
        </h4>
      </div>
      


      <div className="container">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between text-lg">
          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-1/3 lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="https://help.netflix.com/en/node/412" className="hover:text-red-500">FAQ</a></li>
              <li className="mb-[10px]"><a href="https://ir.netflix.net/ir-overview/profile/default.aspx" className="hover:text-red-500">इंवेस्टर संबंध</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/legal/privacy" className="hover:text-red-500">प्रायवेसी</a></li>
              <li className="mb-[10px]"><a href="https://fast.com/" className="hover:text-red-500">स्पीड टेस्ट</a></li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-1/3 lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="https://help.netflix.com/en" className="hover:text-red-500">सहायता केंद्र</a></li>
              <li className="mb-[10px]"><a href="https://jobs.netflix.com/" className="hover:text-red-500">नौकरियां</a></li>
              <li className="mb-[10px]"><a href="https://www.netflix.com/in/" className="hover:text-red-500">कुकी प्रेफ़रेंस</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/legal/notices" className="hover:text-red-500">कानूनी सूचनाएं</a></li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-1/3 lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount" className="hover:text-red-500">अकाउंट</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/en/node/14361" className="hover:text-red-500">देखने के तरीके</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/en/node/134094" className="hover:text-red-500">कॉरपोरेट जानकारी</a></li>
              <li className="mb-[10px]"><a href="https://www.netflix.com/in/browse/genre/839338" className="hover:text-red-500">सिर्फ़ Netflix पर</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] sm:mb-0 sm:w-full lg:w-1/4">
            <ul>
              <li className="mb-[10px]"><a href="https://media.netflix.com/en/" className="hover:text-red-500">मीडिया केंद्र</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/legal/termsofuse" className="hover:text-red-500"> उपयोग की शर्तें</a></li>
              <li className="mb-[10px]"><a href="https://help.netflix.com/en/contactus" className="hover:text-red-500">हमसे संपर्क करें</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

