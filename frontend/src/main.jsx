import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './main.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { CampusProvider } from './context/CampusContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <CampusProvider>
                <App />
            </CampusProvider>
        </AuthProvider>
    </BrowserRouter>
);
