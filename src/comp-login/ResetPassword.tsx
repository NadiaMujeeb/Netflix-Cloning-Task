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


const ResetPassword: React.FC = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Extract token from URL (assuming it's passed as a query param)
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        // Validate password length (you can adjust this as needed)
        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            // Send new password and token to the backend
            const response = await axios.post('http://localhost:5000/api/reset-password', {
                token,
                newPassword,
            });

            setMessage(response.data.message);
            setTimeout(() => {
                navigate('/'); // Redirect to sign-in page
            }, 2000);
        } catch (err: any) {
            if (err.response) {
                setError(err.response.data.message);
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

            <h2 className="text-2xl font-bold mb-5 text-white">Reset Password</h2>
            <form onSubmit={handleSubmit}>
  
           <Password
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Password"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            inputStyle={{ backgroundColor: 'transparent', width: "21rem" }}
            style={{ borderRadius: '0.375rem' }}
            toggleMask
          />
               

               <Password
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Password"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            inputStyle={{ backgroundColor: 'transparent', width: "21rem" }}
            style={{ borderRadius: '0.375rem' }}
            toggleMask
          />
               
               <Button type="submit" label="Reset Password" className="w-full h-11 mb-5 p-2 bg-red-700 text-white hover:bg-red-600 transition duration-200" />
             
            </form>
            {message && <p className="mt-4 text-green-600">{message}</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
            </div>

        </div>
    );
};

export default ResetPassword;
