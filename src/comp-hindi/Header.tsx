import React from 'react';
import Dropdown from './DropdownNav';
import BGImage from "../assets/BackgroundImage.jpg";
import logo from "../assets/logo.png";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    authContext?.logout();
    navigate('/'); // Redirect to sign-in page after logout
  };

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <div className="absolute inset-0 z-0">
        <img src={BGImage} alt="background" className="w-full h-full object-cover bg-gradient-to-t from-black via-transparent to-black opacity-40" />
      </div>

      <img src={logo} alt="logo" className="absolute top-6 left-6 w-24 h-7 sm:left-6 sm:w-24 sm:h-7 md:left-10 md:w-28 md:h-10 lg:left-14 lg:w-32 lg:h-14 xl:left-20 xl:w-32 xl:h-16 object-contain" />

      <nav className="absolute top-6 right-6 z-10 lg:right-12 flex items-center gap-4 px-3 sm:px-4 text-sm sm:text-base">
        <Dropdown />
        <button onClick={handleLogout} className="bg-red-600 text-white px-3 sm:px-4 py-2 text-sm sm:text-base font-bold rounded-md hover:bg-red-700 transition-all duration-300 ease-in-out">
        साइन आउट
        </button>
      </nav>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="mb-7">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3">अनलिमिटेड फ़िल्में, टीवी </h1>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5">शो, और बहुत कुछ </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">₹149 से शुरू होता है. कभी भी कैंसल करें.</p>
        </div>
        <section className="w-full max-w-3xl md:w-3/4">
            <p className="text-white text-lg md:text-xl lg:text-2xl mb-5">
            देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.
     </p>
     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <input
        type="email"
        placeholder="ईमेल पता"
        className="p-4 h-12 w-full sm:w-[35rem] max-w-full rounded-md bg-black bg-opacity-50 border border-white text-white placeholder-white"
      />
      <button className="h-12 w-40 bg-red-600  hover:bg-red-700 text-white rounded-md text-xl">
      शुरू करें &gt;
      </button>
    </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
