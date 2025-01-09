import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Users from './pages/Users.tsx'
import KaranDetails from './components/KaranDetails.tsx'


createRoot(document.getElementById('root')!).render(
<StrictMode>
<App/>  
</StrictMode>,
)
