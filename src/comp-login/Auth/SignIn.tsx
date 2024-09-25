import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { useState, useContext, useRef } from 'react';
import { signInUser } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import BGImage from "../../assets/BackgroundImage.jpg";
import logo from "../../assets/logo.png";
import { AuthContext } from '../../context/AuthContext';  // Import AuthContext
import { Toast } from 'primereact/toast'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);  // Access the AuthContext
  const toast = useRef<Toast>(null); // Create ref for Toast

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setError('Email and Password are required');
        return;
      }

      const response = await signInUser({ email, password });
      localStorage.setItem('token', response.data.token);
      authContext?.login(response.data.token);  // Trigger login in the context

      // Show welcome message in a toast
      toast.current?.show({
        severity: 'success',
        summary: 'Welcome',
        detail: `Welcome back, ${email}!`,
        life: 3000, // Show toast for 3 seconds
      });

      // Delay navigation to dashboard until after the toast is shown
      setTimeout(() => {
        navigate('/dashboard');  // Redirect to dashboard after showing toast
      }, 3000);
      
    } catch (err: any) {
      console.error('API Error:', err);
      setError(err.response?.data?.message || 'Something went wrong');
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

      <Toast ref={toast} className="text-lg font-bold text-white " /> 

      <div className="max-w-md mx-auto mt-20 p-10 relative z-10 bg-black bg-opacity-75 rounded-lg shadow-lg md:mt-16 lg:mt-20">
        <h1 className="text-2xl font-bold mb-5 text-white">Sign In</h1>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <form onSubmit={handleSignIn}>
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            style={{ borderRadius: '0.375rem' }}
          />
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            inputStyle={{ backgroundColor: 'transparent', width: "21rem" }}
            style={{ borderRadius: '0.375rem' }}
            toggleMask
          />
          <Button type="submit" label="Sign In" className="w-full h-11 mb-5 p-2 bg-red-700 text-white hover:bg-red-600 transition duration-200" />
        </form>
        <p className='text-center mb-4'>
          <a href="/ForgotPass" className='text-white text-lg hover-yellow'>Forgot Password?</a>
        </p>
        <p className='text-white text-sm text-center mb-4'>
          New to Netflix? Please <a href="/signup" className='text-yellow-500 underline'>Sign up now.</a>
        </p>
        <p className='text-white text-xs text-center'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </div>
    </div>
  );
};

export default SignIn;
