import './navbar.css'

function Navbar(){
    return (
        <div className='navbar'>
            <a href="index.html" className='navbrand'>
                <div className='nav-logo'><img src='./src/assets/logo/logo.png'></img></div>
                <div className='nav-title'><img src='./src/assets/logo/head.png'></img></div>
            </a>

        <ul className='nav-links'>
            <li><a href="">Dashboard</a></li>
            <li><a href="">My Info</a></li>
            <li><a href="">Grades</a></li>
            <li><a href="">Attendance</a></li>
            <li><a href="">Timetable</a></li>
            <li><a href="">Fee</a></li>
            <li><a href="">Hostel</a></li>
            <li><a href="">Support</a></li>
        </ul>
        <div className="nav-profile">
            <a href=""><img src='./src/assets/logo/default_logo.jpg' alt='logo'></img></a>
        </div>


        </div>

    )

}

export default Navbar;