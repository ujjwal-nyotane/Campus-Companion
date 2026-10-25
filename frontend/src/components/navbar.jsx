import './css/navbar.css';
import profilelogo from '../assets/logo/default_logo.jpg';
import logo from '../assets/logo/logo.png';
import head from '../assets/logo/head.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Navbar() {
    const { user, role, isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="navbar">
            <Link
                to={isLoggedIn ? (role === 'Faculty' ? '/f-dashboard' : '/dashboard') : '/'}
                className="navbrand"
            >
                <div className="nav-logo">
                    <img src={logo} alt="Campus Companion Logo" />
                </div>
                <div className="nav-title">
                    <img src={head} alt="Campus Companion" />
                </div>
            </Link>

            {isLoggedIn && role === 'Student' && (
                <nav className="nav-menu">
                    <ul className="nav-links">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                My Info
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/grades"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                Grades
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/attendance"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                Attendance
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/timetable"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                Timetable
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/fees"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                Fee
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/hostel"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                Hostel
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/support"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                Support
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}

            {isLoggedIn && role === 'Faculty' && (
                <nav className="nav-menu">
                    <ul className="nav-links">
                        <li>
                            <NavLink
                                to="/f-dashboard"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                Faculty Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}

            <div className="nav-profile-container">
                {isLoggedIn ? (
                    <div className="user-profile-widget">
                        <Link to="/profile" className="nav-profile-link" title="View Profile">
                            <img src={profilelogo} alt="Profile" className="avatar-img" />
                            <div className="user-badge">
                                <span className="user-name">{user?.Name || 'User'}</span>
                                <span className="user-role">{role}</span>
                            </div>
                        </Link>
                        <button
                            type="button"
                            className="logout-button"
                            onClick={handleLogout}
                            title="Sign out"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/" className="login-nav-link">
                        Portal Login
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Navbar;
