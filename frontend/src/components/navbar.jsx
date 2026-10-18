import './css/navbar.css'
import profilelogo from '../assets/logo/default_logo.jpg'
import logo from '../assets/logo/logo.png'
import head from '../assets/logo/head.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/" className='navbrand'>
                <div className='nav-logo'><img src={logo}></img></div>
                <div className='nav-title'><img src={head}></img></div>
            </Link>



                <ul className='nav-links'>
             
                    <li><Link to="/dashboard" target="_top">Dashboard</Link></li>
                    <li><Link to="/profile" target="_top">My Info</Link></li>
                    <li><Link to="/grades" target="_top">Grades</Link></li>
                    <li><Link to="/attendance" target="_top">Attendance</Link></li>
                    <li><Link to="/timetable" target="_top">Timetable</Link></li>
                    <li><Link to="/fees" target="_top">Fee</Link></li>
                    <li><Link to="/hostel" target="_top">Hostel</Link></li>
                    <li><Link to="/support" target="_top">Support</Link></li>
                </ul>
                
                <></>
            
            <div className="nav-profile">
                <Link to="/profile"><img src={profilelogo} alt='logo'></img></Link>
            </div>


        </div>

    )

}

export default Navbar;