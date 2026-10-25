import './css/notfound.css';
import nf404 from '../assets/logo/404.png';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Home, ArrowLeft, Compass, Calendar, BookOpen, LifeBuoy } from 'lucide-react';

function NotFound() {
    const navigate = useNavigate();
    const { isLoggedIn, role } = useAuth();

    // Determine target home page depending on role
    const getHomePath = () => {
        if (!isLoggedIn) return '/';
        return role === 'Faculty' ? '/f-dashboard' : '/dashboard';
    };

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate(getHomePath());
        }
    };

    return (
        <div className="notfound-page-wrapper">
            <div className="notfound-card">
                {/* 404 Status Pill */}
                <div className="nf-badge">
                    <Compass size={14} />
                    <span>ERROR 404 • PAGE NOT FOUND</span>
                </div>

                {/* 404 Mascot / Illustration */}
                <div className="nf-image-wrap">
                    <img src={nf404} alt="404 Page Not Found" />
                </div>

                {/* Main Heading & Clarification */}
                <h1 className="nf-title">Looks Like You&apos;re Lost on Campus!</h1>
                <p className="nf-description">
                    The requested page could not be located or may have been relocated.
                    Don&apos;t worry, your academic records and dashboard remain completely safe.
                </p>

                {/* Action Buttons */}
                <div className="nf-actions-group">
                    <button
                        type="button"
                        className="nf-btn-primary"
                        onClick={() => navigate(getHomePath())}
                    >
                        <Home size={16} />
                        <span>{isLoggedIn ? 'Return to Dashboard' : 'Back to Login'}</span>
                    </button>

                    <button
                        type="button"
                        className="nf-btn-secondary"
                        onClick={handleBack}
                    >
                        <ArrowLeft size={16} />
                        <span>Go Back</span>
                    </button>
                </div>

                {/* Helpful Shortcuts (if user is logged in as Student) */}
                {isLoggedIn && role === 'Student' && (
                    <div className="nf-quicklinks-box">
                        <span className="nf-quicklinks-title">Quick Campus Shortcuts</span>
                        <div className="nf-quicklinks-grid">
                            <Link to="/timetable" className="nf-quicklink-pill">
                                <Calendar size={13} /> Schedule
                            </Link>
                            <Link to="/courses" className="nf-quicklink-pill">
                                <BookOpen size={13} /> Courses
                            </Link>
                            <Link to="/support" className="nf-quicklink-pill">
                                <LifeBuoy size={13} /> Helpdesk
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <p className="nf-footer-text">
                Need urgent assistance? Contact the Campus Companion IT Desk at <strong>+91 732276XXXX</strong>
            </p>
        </div>
    );
}

export default NotFound;
