import './css/notfound.css';
import nf404 from '../assets/logo/404.png'
function NotFound(){

    return <div className="notfound-main">
    <h1 className="title">404</h1>
    <div className='image'>
    <img src={nf404} alt="404"></img></div>
    <h3 className="content">Page Not Found</h3>
    </div>
}
export default NotFound;