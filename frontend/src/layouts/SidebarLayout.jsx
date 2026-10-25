import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import logo from '../assets/logo/logo.png';
import defaultAvatar from '../assets/logo/default_logo.jpg';
import {
    LayoutDashboard,
    BookOpen,
    Calendar,
    CreditCard,
    GraduationCap,
    CheckSquare,
    LifeBuoy,
    LogOut,
    Search,
    Bell,
    Users,
    Clock,
    FileText,
    Home
} from 'lucide-react';
import './css/SidebarLayout.css';

function SidebarLayout() {
    const { user, role, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Helper to get current page title from pathname
    const getPageTitle = () => {
        const path = location.pathname;
        if (path.includes('dashboard')) return role === 'Faculty' ? 'Faculty Dashboard' : 'Dashboard';
        if (path.includes('courses')) return 'Enrolled Courses';
        if (path.includes('timetable')) return 'Class Schedule';
        if (path.includes('fees')) return 'Fee Management & Finances';
        if (path.includes('grades')) return 'Academic Results & Grades';
        if (path.includes('attendance')) return role === 'Faculty' ? 'Attendance Management' : 'Attendance Tracker';
        if (path.includes('hostel')) return 'Hostel & Mess Portal';
        if (path.includes('support')) return 'Help & Student Grievances';
        if (path.includes('profile')) return 'My Profile';
        if (path.includes('f-leaves')) return 'Leave Requests & Approvals';
        if (path.includes('f-notices')) return 'Course Materials & Announcements';
        return 'Campus Companion';
    };

    return (
        <div className="portal-container">
            {/* Left Sidebar */}
            <aside className="portal-sidebar">
                <div className="sidebar-brand">
                    <img src={logo} alt="Campus Logo" className="brand-icon" />
                    <div className="brand-text">
                        <h3>{role === 'Faculty' ? 'Faculty Portal' : 'Student Portal'}</h3>
                        <span>Campus Companion</span>
                    </div>
                </div>

                {/* Sidebar Search Bar */}
                <div className="sidebar-search">
                    <Search size={16} className="search-icon" />
                    <input type="text" placeholder="Search..." aria-label="Search portal" />
                </div>

                {/* Navigation Links */}
                <nav className="sidebar-nav">
                    {role === 'Student' ? (
                        <>
                            <div className="nav-group-title">ACADEMICS</div>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <LayoutDashboard size={19} />
                                <span>Dashboard</span>
                            </NavLink>

                            <NavLink
                                to="/courses"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <BookOpen size={19} />
                                <span>Courses</span>
                            </NavLink>

                            <NavLink
                                to="/timetable"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <Calendar size={19} />
                                <span>Schedule</span>
                            </NavLink>

                            <NavLink
                                to="/attendance"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <CheckSquare size={19} />
                                <span>Attendance</span>
                            </NavLink>

                            <div className="nav-group-title">FINANCE &amp; SERVICES</div>
                            <NavLink
                                to="/fees"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <CreditCard size={19} />
                                <span>Finances</span>
                            </NavLink>

                            <NavLink
                                to="/grades"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <GraduationCap size={19} />
                                <span>Results</span>
                            </NavLink>

                            <NavLink
                                to="/hostel"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <Home size={19} />
                                <span>Hostel</span>
                            </NavLink>

                            <NavLink
                                to="/support"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <LifeBuoy size={19} />
                                <span>Help &amp; Support</span>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <div className="nav-group-title">FACULTY MANAGEMENT</div>
                            <NavLink
                                to="/f-dashboard"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <LayoutDashboard size={19} />
                                <span>Dashboard</span>
                            </NavLink>

                            <NavLink
                                to="/f-attendance"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <Users size={19} />
                                <span>Mark Attendance</span>
                            </NavLink>

                            <NavLink
                                to="/f-leaves"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <Clock size={19} />
                                <span>Leave Approvals</span>
                            </NavLink>

                            <NavLink
                                to="/f-notices"
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <FileText size={19} />
                                <span>Post Materials</span>
                            </NavLink>
                        </>
                    )}
                </nav>

                {/* Sidebar Footer Logout */}
                <div className="sidebar-footer">
                    <button type="button" className="sidebar-logout-btn" onClick={handleLogout}>
                        <LogOut size={18} />
                        <span>Log out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="portal-main-wrapper">
                {/* Top Navigation Bar */}
                <header className="portal-topbar">
                    <div className="topbar-left">
                        <h2 className="page-heading">{getPageTitle()}</h2>
                    </div>

                    <div className="topbar-right">
                        <button type="button" className="icon-btn" title="Notifications">
                            <Bell size={20} />
                            <span className="notif-badge">3</span>
                        </button>

                        <div
                            className="topbar-user"
                            onClick={() => navigate('/profile')}
                            title="View Profile"
                        >
                            <img src={defaultAvatar} alt="User Avatar" className="user-thumb" />
                            <div className="user-details">
                                <span className="user-name">{user?.Name || 'User'}</span>
                                <span className="user-role-chip">{role}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Views */}
                <main className="portal-page-body">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default SidebarLayout;
