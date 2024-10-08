import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';
import Dashboard from "../comp-login/Dashboard";
import ForgotPass from './ForgotPass';
import ResetPassword from './ResetPassword';
import AppHindi from "../comp-hindi/AppHindi";
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primeicons/primeicons.css';



function AppLogin() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ForgotPass" element={<ForgotPass/>} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path='/hindi' element={<AppHindi/>}   />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppLogin;


