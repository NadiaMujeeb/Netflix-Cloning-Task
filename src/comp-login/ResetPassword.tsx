// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Password } from 'primereact/password';
// import { Button } from 'primereact/button';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import BGImage from "../assets/BackgroundImage.jpg";
// import logo from "../assets/logo.png";

// const ResetPassword: React.FC = () => {
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const location = useLocation();

//     const searchParams = new URLSearchParams(location.search);
//     const token = searchParams.get('token');

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setMessage('');
//         setError('');

//         if (newPassword.length < 6) {
//             setError("Password must be at least 6 characters long.");
//             return;
//         }

//         if (newPassword !== confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:5000/api/reset-password', {
//                 token,
//                 newPassword,
//             });

//             setMessage(response.data.message);
//             setTimeout(() => {
//                 navigate('/'); 
//             }, 2000);
//         } catch (err: any) {
//             if (err.response) {
//                 setError(err.response.data.message);
//             } else {
//                 setError('An error occurred. Please try again later.');
//             }
//         }
//     };

//     return (
//         <div className="relative overflow-hidden w-full h-screen flex flex-col justify-center items-center">
//             <div className="absolute inset-0 z-0">
//                 <img src={BGImage} alt="background" className="w-full h-full object-cover" />
//             </div>

//             <img
//                 src={logo}
//                 alt="logo"
//                 className="absolute top-6 left-6 w-24 h-7 sm:left-6 sm:w-24 sm:h-7 md:left-10 md:w-28 md:h-10 lg:left-14 lg:w-32 lg:h-14 xl:left-20 xl:w-32 xl:h-16 object-contain"
//             />

//             <div className="max-w-md mx-auto mt-20 p-10 relative z-10 bg-black bg-opacity-75 rounded-lg shadow-lg md:mt-16 lg:mt-20">
//                 <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-5 text-white text-left">Reset Password</h2>
//                 <form onSubmit={handleSubmit}>
//                     <Password
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         placeholder="New Password"
//                         required
//                         className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
//                         inputStyle={{ backgroundColor: 'transparent' }}
//                         style={{ borderRadius: '0.375rem' }}
//                         onFocus={(e) => {
//                             e.target.style.outline = 'none';
//                             e.target.style.boxShadow = 'none';
//                         }}
//                         toggleMask
//                     />

//                     <Password
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         placeholder="Confirm Password"
//                         required
//                         className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
//                         inputStyle={{ backgroundColor: 'transparent' }}
//                         style={{ borderRadius: '0.375rem' }}
//                         onFocus={(e) => {
//                             e.target.style.outline = 'none';
//                             e.target.style.boxShadow = 'none';
//                         }}
//                         toggleMask
//                     />
                    
//                     <Button type="submit" label="Reset Password" className="w-full h-11 mb-5 p-2 bg-red-700 text-white hover:bg-red-600 transition duration-200" />
//                 </form>
                
//                 {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
//                 {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
//             </div>
//         </div>
//     );
// };

// export default ResetPassword;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import BGImage from "../assets/BackgroundImage.jpg";
import logo from "../assets/logo.png";

// Define the expected response structure from the API
interface ResetPasswordResponse {
  message: string;
}

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the token from the query string
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    // Validate password length
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Send password reset request
      const response = await axios.post<ResetPasswordResponse>('http://localhost:5000/api/reset-password', {
        token,
        newPassword,
      });

      // Set success message and navigate after a timeout
      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err: any) {
      // Handle error response
      if (err.response) {
        setError(err.response.data.message || 'An error occurred. Please try again later.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0">
        <img src={BGImage} alt="background" className="w-full h-full object-cover" />
      </div>

      <img
        src={logo}
        alt="logo"
        className="absolute top-6 left-6 w-24 h-7 sm:left-6 sm:w-24 sm:h-7 md:left-10 md:w-28 md:h-10 lg:left-14 lg:w-32 lg:h-14 xl:left-20 xl:w-32 xl:h-16 object-contain"
      />

      <div className="max-w-md mx-auto mt-20 p-10 relative z-10 bg-black bg-opacity-75 rounded-lg shadow-lg md:mt-16 lg:mt-20">
        <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-5 text-white text-left">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <Password
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            required
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            inputStyle={{ backgroundColor: 'transparent' }}
            style={{ borderRadius: '0.375rem' }}
            onFocus={(e) => {
              e.target.style.outline = 'none';
              e.target.style.boxShadow = 'none';
            }}
            toggleMask
          />

          <Password
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            inputStyle={{ backgroundColor: 'transparent' }}
            style={{ borderRadius: '0.375rem' }}
            onFocus={(e) => {
              e.target.style.outline = 'none';
              e.target.style.boxShadow = 'none';
            }}
            toggleMask
          />
          
          <Button type="submit" label="Reset Password" className="w-full h-11 mb-5 p-2 bg-red-700 text-white hover:bg-red-600 transition duration-200" />
        </form>
        
        {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
