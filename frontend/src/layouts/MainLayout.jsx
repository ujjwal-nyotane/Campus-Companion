import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

function MainLayout() {
    return (
        <div className="layout-container">
            <Navbar />
            <main className="layout-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
