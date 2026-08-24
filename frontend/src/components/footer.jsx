import './footer.css';
import { Link } from 'react-router-dom'


function Footer() {
    return <div className='footer'>
        <div className='appDescription'>
            <h2>Campus Companion</h2>
            <h4>Connect with us on</h4>
            <ul className='links'>
                <li><a href='github.com' target='_blank'><img src="./src/assets/linklogo/git.svg" className='linklogo' alt="git" /></a></li>
                <li><a href='x.com'><img src="./src/assets/linklogo/x.svg" className='linklogo' alt="X.xom" /></a></li>
                <li><a href='instagram.com'><img src="./src/assets/linklogo/insta.svg" className='linklogo' alt="insta" /></a></li>
            </ul>
        </div>

        <div>
            {(window.location.pathname != '/f-dashboard' && window.location.pathname != '/') ?
        <><h3>Quick Acces</h3>
        
        <div className='quickfooterlinks'>
            <div>
            <Link to='/home' target='_top'>Dashborad</Link>
            <Link to='/profile' target='_top'>My Info</Link>
            <Link to='/grades' target='_top'>Grades</Link>
            <Link to='/attendance' target='_top'>Attendance</Link>
            </div>
            <div>
            <Link to='/timetable' target='_top'>Timetable</Link>
            <Link to='/fees' target='_top'>Fee</Link>
            <Link to='/hostel' target='_top'>Hostel</Link>
            <Link to='/support' target='_top'>Support</Link>
            </div>
        </div>
        </>

                :
                <></>
            }
        </div>
        <div>
            <h3>Contact Information</h3>
            <h4>Mail : campuscompanion@tech.in</h4>

        </div>
    </div>

}
export default Footer