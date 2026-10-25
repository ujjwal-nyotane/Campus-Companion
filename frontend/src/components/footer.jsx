import './css/footer.css';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import git from '../assets/linklogo/git.svg';
import x from '../assets/linklogo/x.svg';
import insta from '../assets/linklogo/insta.svg';

function Footer() {
    const location = useLocation();
    const { role, isLoggedIn } = useAuth();

    const isStudentDashboard =
        isLoggedIn &&
        role === 'Student' &&
        location.pathname !== '/' &&
        location.pathname !== '/f-dashboard';

    return (
        <footer className="footer">
            <div className="appDescription">
                <h2>Campus Companion</h2>
                <h4>Smart Student &amp; Academic Management Portal</h4>
                <ul className="links">
                    <li>
                        <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">
                            <img src={git} className="linklogo" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com" target="_blank" rel="noreferrer" title="X (Twitter)">
                            <img src={x} className="linklogo" alt="X" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                            <img src={insta} className="linklogo" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </div>

            {isStudentDashboard && (
                <div className="footer-nav-section">
                    <h3>Quick Access</h3>
                    <div className="quickfooterlinks">
                        <div>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/profile">My Info</Link>
                            <Link to="/grades">Grades</Link>
                            <Link to="/attendance">Attendance</Link>
                        </div>
                        <div>
                            <Link to="/timetable">Timetable</Link>
                            <Link to="/fees">Fee Portal</Link>
                            <Link to="/hostel">Hostel</Link>
                            <Link to="/support">Support</Link>
                        </div>
                    </div>
                </div>
            )}

            <div className="footer-contact-section">
                <h3>Contact &amp; Helpdesk</h3>
                <h4>Email: campuscompanion@tech.edu.in</h4>
                <h4>Helpline: +91 732276XXXX</h4>
                <p className="copyright-txt">&copy; 2026 Campus Companion. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
