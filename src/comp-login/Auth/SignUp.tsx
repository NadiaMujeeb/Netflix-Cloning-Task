import React, { useState, useEffect, useRef } from 'react';
import { signUpUser } from "../../api/authApi";  // Import your signUpUser API function
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

// Define an interface for the expected response from signUpUser
interface SignUpResponse {
  token: string;
}

const SignUp = () => {
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;

    try {
      if (!name || !email || !password || !confirmPassword) {
        setError('All fields are required');
        return;
      }

      if (!emailRegex.test(email)) {
        setError('Email must be a valid @gmail.com or @yahoo.com address');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      // Call the API and define the response type as SignUpResponse
      const response = await signUpUser({ name, email, password }) as { data: SignUpResponse };
      localStorage.setItem('token', response.data.token);

      toast.current?.show({
        severity: 'success',
        summary: 'New User Created',
        detail: 'Welcome to Netflix, Enjoy watching!',
        life: 3000,
      });

        // Navigate to dashboard after a delay
        setTimeout(() => {
          navigate('/dashboard');
      }, 3000); // 3000 milliseconds = 3 seconds

  } catch (err: any) {
      console.error('API Error:', err);
      setError(err.response?.data?.message || 'Something went wrong');
  }
};

  return (
    <div className="relative overflow-hidden w-full h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img src={BGImage} alt="background" className="w-full h-full object-cover" />
      </div>

      <img src={logo} alt="logo" className="absolute top-6 left-6 w-24 h-7 object-contain" />

      <Toast ref={toast} className="text-lg font-bold text-white" />

      <div className="max-w-md mx-auto p-6 relative z-10 bg-black bg-opacity-75 rounded-lg shadow-lg mt-10">
        <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-5 text-white text-left">Sign Up</h1>
        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
        <form onSubmit={handleSignUp}>
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            style={{ borderRadius: '0.375rem' }}
            onFocus={(e) => {
              e.target.style.outline = 'none';
              e.target.style.boxShadow = 'none';  // Remove any box-shadow on focus
            }}
          />
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            style={{ borderRadius: '0.375rem' }}
            onFocus={(e) => {
              e.target.style.outline = 'none';
              e.target.style.boxShadow = 'none';  // Remove any box-shadow on focus
            }}
          />
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            inputStyle={{ backgroundColor: 'transparent' }}
            style={{ borderRadius: '0.375rem' }}
            onFocus={(e) => {
              e.target.style.outline = 'none';
              e.target.style.boxShadow = 'none';  // Remove any box-shadow on focus
            }}
            toggleMask
          />
          <Password
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full mb-6 p-3 h-12 bg-black bg-opacity-50 border text-white"
            inputStyle={{ backgroundColor: 'transparent' }}
            style={{ borderRadius: '0.375rem' }}
            onFocus={(e) => {
              e.target.style.outline = 'none';
              e.target.style.boxShadow = 'none';  // Remove any box-shadow on focus
            }}
            toggleMask
          />
          <Button type="submit" label="Sign Up" className="w-full h-11 mb-5 p-2 bg-red-700 text-white hover:bg-red-600 transition duration-200" />
        </form>
        <p className='text-center text-white text-sm mb-4'>
          Already have an account? <a href="/" className='text-yellow-500 hover:underline'>Sign in</a>
        </p>
        <p className='text-white text-xs text-center'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </div>
    </div>
  );
};

export default SignUp;
