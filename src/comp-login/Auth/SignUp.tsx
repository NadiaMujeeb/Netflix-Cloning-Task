import React, { useState, useEffect, useRef } from 'react';
import { signUpUser } from "../../api/authApi";
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import BGImage from "../../assets/BackgroundImage.jpg";
import logo from "../../assets/logo.png";
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';

const SignUp = () => {
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const toast = useRef<Toast>(null); // Create ref for Toast

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');  // Redirect to dashboard if token exists
    }
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!name || !email || !password || !confirmPassword) {
        setError('All fields are required');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await signUpUser({ name, email, password });
      localStorage.setItem('token', response.data.token);
      
      // Show success message in a toast
      toast.current?.show({
        severity: 'success',
        summary: 'User Created',
        detail: `Welcome to Netflix, ${name}!`,
        life: 3000, // Show toast for 3 seconds
      });

      navigate('/dashboard'); // Navigate after showing the toast
    } catch (err: any) {
      console.error('API Error:', err);
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={BGImage}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <img
        src={logo}
        alt="logo"
        className="absolute top-6 left-6 w-24 h-7 sm:left-6 sm:w-24 sm:h-7 md:left-10 md:w-28 md:h-10 lg:left-14 lg:w-32 lg:h-14 xl:left-20 xl:w-32 xl:h-16 object-contain"
      />

      <Toast ref={toast} className="text-lg font-bold text-white" />

      <div className="max-w-md mx-auto p-11 relative z-10 bg-black bg-opacity-75 rounded-lg shadow-lg mt-10 md:mt-16 lg:mt-20">
        <h1 className="text-2xl font-bold mb-5 text-white text-left">Sign Up</h1>
        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
        <form onSubmit={handleSignUp}>
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white focus:outline-none focus:ring-1 focus:ring-red-600"
            style={{ borderRadius: '0.375rem' }}
          />
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white focus:outline-none focus:ring-1 focus:ring-red-600" 
            style={{ borderRadius: '0.375rem' }}
          />
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white focus:outline-none focus:ring-1 focus:ring-red-600"
            toggleMask
            inputStyle={{ backgroundColor: 'transparent', width: "21rem" }}
            style={{ borderRadius: '0.375rem' }}
          />
          <Password
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white focus:outline-none focus:ring-1 focus:ring-red-600"
            toggleMask
            inputStyle={{ backgroundColor: 'transparent', width: "21rem" }}
            style={{ borderRadius: '0.375rem' }}
          />
          <Button 
            type="submit" 
            label="Sign Up" 
            className="w-full h-11 mb-4 p-2 bg-red-700 text-white focus:outline-none hover:bg-red-600 transition duration-200" 
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
