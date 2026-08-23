import './navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return (
        <div className='navbar'>
            <Link to="/" className='navbrand'>
                <div className='nav-logo'><img src='./src/assets/logo/logo.png'></img></div>
                <div className='nav-title'><img src='./src/assets/logo/head.png'></img></div>
            </Link>

        <ul className='nav-links'>
            <li><Link to="/home">Dashboard</Link></li>
            <li><Link to="/profile">My Info</Link></li>
            <li><Link to="/grades">Grades</Link></li>
            <li><Link to="/attendance">Attendance</Link></li>
            <li><Link to="/timetable">Timetable</Link></li>
            <li><Link to="/fees">Fee</Link></li>
            <li><Link to="/hostel">Hostel</Link></li>
            <li><Link to="/support">Support</Link></li>
        </ul>
        <div className="nav-profile">
            <a href="/profile"><img src='./src/assets/logo/default_logo.jpg' alt='logo'></img></a>
        </div>


        </div>

    )

}

export default Navbar;