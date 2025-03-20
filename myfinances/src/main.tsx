import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { Routers } from './routes/index.tsx'
import { AuthProvider } from './hooks/useAuth.tsx'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <BrowserRouter>
            <Routers/>
        </BrowserRouter>
      </AuthProvider>
    </CookiesProvider>
  </StrictMode>
)
