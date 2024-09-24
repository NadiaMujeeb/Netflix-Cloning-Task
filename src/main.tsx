// import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import AppLogin from "./comp-login/AppLogin" ;
import './index.css'
import 'primereact/resources/themes/saga-blue/theme.css'; // Change to your preferred theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <AppLogin />
  // </StrictMode>,
)
