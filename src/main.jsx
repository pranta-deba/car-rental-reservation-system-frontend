import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routers/Routers.jsx'
import { RouterProvider } from 'react-router-dom'
import AppProvider from './Providers/AppProvider.jsx'
import { Toaster } from 'react-hot-toast'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-left"
        reverseOrder={false}
      />
    </AppProvider>
  </StrictMode>,
)
