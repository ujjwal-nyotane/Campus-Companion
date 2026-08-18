import './footer.css';
import {Link} from 'react-router-dom'


function Footer(){
    return <div className='footer'>
    <div className='appDescription'>
        <h2>Campus Companion</h2>
        <h4>Connect with us on</h4>
        <ul className='links'>
            <li><a href='github.com'><img src="./src/assets/linklogo/git.svg" className='linklogo' alt="git" /></a></li>
            <li><a href='x.com'><img src="./src/assets/linklogo/x.svg" className='linklogo' alt="X.xom" /></a></li>
            <li><a href='instagram.com'><img src="./src/assets/linklogo/insta.svg" className='linklogo' alt="insta" /></a></li>
        </ul>
    </div>
    <div>
        <h3>Quick Acces</h3>
        
        <div className='quickfooterlinks'>
            <div>
            <Link>Dashborad</Link>
            <Link>My Info</Link>
            <Link>Grades</Link>
            <Link>Attendance</Link>
            </div>
            <div>
            <Link>Timetable</Link>
            <Link>Fee</Link>
            <Link>Hostel</Link>
            <Link>Support</Link>
            </div>
        </div>
    
    </div>
    <div>
        <h3>Contact Information</h3>
        <h3>Mail : campuscompanion@tech.in</h3>
        
    </div>
    </div>

}   
export default Footer