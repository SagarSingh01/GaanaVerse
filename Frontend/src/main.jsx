import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context Api/AuthContext.jsx'
import { Toaster } from "react-hot-toast"
import AppRoutes from './Components/Protected/AppRoutes.jsx'
import ErrorBoundary from './Error/ErrorBoundary.jsx'
import ScrollToTop from './Components/Scroll/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ScrollToTop />
    <ErrorBoundary>
      <AuthProvider>
        <Toaster position='top-center' />
        <AppRoutes />
      </AuthProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
