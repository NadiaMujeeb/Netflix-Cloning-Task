import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { useState, useContext, useRef, useEffect } from 'react';
import { signInUser } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';
import BGImage from "../../assets/BackgroundImage.jpg";
import logo from "../../assets/logo.png";
import { AuthContext } from '../../context/AuthContext';
import { Toast } from 'primereact/toast';

// Define the expected response data shape
interface SignInResponse {
  token: string;
}

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [filteredEmails, setFilteredEmails] = useState<string[]>([]);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    const savedEmails = localStorage.getItem('signedInEmails');
    if (savedEmails) {
      setEmailSuggestions(JSON.parse(savedEmails));
    }
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setError('Email and Password are required');
        return;
      }
  
      // No type argument here; cast response later
      const response = await signInUser({ email, password });
      // Cast the response data to the expected type
      const data = response.data as SignInResponse;

      localStorage.setItem('token', data.token);
      authContext?.login(data.token);

      toast.current?.show({
        severity: 'success',
        summary: 'Hello',
        detail: `Welcome back User!`,
        life: 3000, 
      });

      const updatedEmails = emailSuggestions.includes(email) 
        ? emailSuggestions 
        : [...emailSuggestions, email];
      localStorage.setItem('signedInEmails', JSON.stringify(updatedEmails));

      setTimeout(() => {
        navigate('/dashboard'); 
      }, 3000);
      
    } catch (err: any) {
      console.error('API Error:', err);
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  const searchEmail = (event: { query: string }) => {
    setFilteredEmails(
      emailSuggestions.filter((email) =>
        email.toLowerCase().includes(event.query.toLowerCase())
      )
    );
  };

  return (
    <div className="relative overflow-hidden w-full h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0">
        <img src={BGImage} alt="background" className="w-full h-full object-cover" />
      </div>

      <img
        src={logo}
        alt="logo"
        className="absolute top-6 left-6 w-24 h-7 object-contain"
      />

      <Toast ref={toast} className="text-lg font-bold text-white " />

      <div className="max-w-md mx-auto p-6 relative z-10 bg-black bg-opacity-75 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-5 text-white text-left">Sign In</h1>
        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
        <form onSubmit={handleSignIn}>
          <AutoComplete
            value={email}
            suggestions={filteredEmails}
            completeMethod={searchEmail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full mb-3 p-3 h-12 bg-black bg-opacity-50 border text-white"
            inputStyle={{ backgroundColor: 'transparent', width: "100%" }}
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
            required
            className="w-full mb-6 p-3 h-12 bg-black bg-opacity-50 border text-white"
            inputStyle={{ backgroundColor: 'transparent'}}
            style={{ borderRadius: '0.375rem' }}
            onFocus={(e) => {
              e.target.style.outline = 'none';
              e.target.style.boxShadow = 'none';  // Remove any box-shadow on focus
            }}
            toggleMask
          />
          <Button type="submit" label="Sign In" className="w-full h-11 mb-5 p-2 bg-red-700 text-white hover:bg-red-600 transition duration-200" />
        </form>
        <p className='text-center mb-4'>
          <a href="/ForgotPass" className='text-white text-lg hover:underline'>Forgot Password?</a>
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
