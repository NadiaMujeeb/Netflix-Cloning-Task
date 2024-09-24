import logo from "../assets/logo.png"
import queen from "../assets/queen.jpg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // Change to your preferred theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const ForgotPass : React.FC =  () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogIn = () => {
      authContext?.logout();
      navigate('/'); // Redirect to sign-in page after logout
    };
  
  return (
   
  
    <div>
       <div className="relative overflow-hidden w-full h-screen flex flex-col justify-center items-center">
      
       <div className="absolute inset-0 z-0">
        <img src={queen} alt="background" className="w-full h-full object-cover " />
      </div>
       <img
        src={logo}
        alt="logo"
        className="absolute top-6 left-6 w-24 h-7 sm:left-6 sm:w-24 sm:h-7 md:left-10 md:w-28 md:h-10 lg:left-14 lg:w-32 lg:h-14 xl:left-20 xl:w-32 xl:h-16 object-contain"
      />
 <nav className="absolute top-6 right-6 z-10 lg:right-12 flex items-center gap-4 px-3 sm:px-4 text-sm sm:text-base">
         <button onClick={handleLogIn} className="bg-red-600 text-white px-3 sm:px-4 py-2 text-sm sm:text-base font-bold rounded-md hover:bg-red-700 transition-all duration-300 ease-in-out">
          Sign In
         </button>
</nav>
  


<div className="max-w-md mx-auto p-11 relative z-10 bg-white rounded-sm shadow-lg mt-10 md:mt-16 lg:mt-20">
        <h1 className="text-2xl font-bold mb-5 text-black text-left">Update password, email of your Netflix account.</h1>
        <p className="text-black mb-4">Please reset you password from below !</p>
        <form >

          <InputText
            placeholder="Email"
            className="w-full mb-3 p-3 h-12 bg-white border text-black border-black focus:outline-none " 
            style={{ borderRadius: '0.375rem' }}

          />
          <Button 
            type="submit" 
            label="Email Me" 
            className="w-full h-12 mb-4 p-2 bg-red-700 text-white hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-1 focus:ring-yellow-600" 
          />
        </form>
      </div>




       </div>
    </div>
  )
};

export default ForgotPass;