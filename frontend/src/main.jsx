import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App.jsx';
import './main.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { CampusProvider } from './context/CampusContext.jsx';
import { GradesProvider } from './context/GradesContext.jsx';

createRoot(document.getElementById('root')).render(
    // Redux Provider makes the store available to every component in the tree
    <Provider store={store}>
        <BrowserRouter>
            <AuthProvider>
                <CampusProvider>
                    <GradesProvider>
                        <App />
                    </GradesProvider>
                </CampusProvider>
            </AuthProvider>
        </BrowserRouter>
    </Provider>
);

