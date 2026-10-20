import './css/notfound.css';
import nf404 from '../assets/logo/404.png'
import { useNavigate } from 'react-router-dom';
function NotFound(){
    const navigate = useNavigate();
    const hadleclick = ()=>{
        navigate("/");
    }

    return <div className="notfound-main">
    <h1 className="title">404</h1>
    <div className='image'>
    <img src={nf404} alt="404"></img></div>
    <h3 className="content">Page Not Found</h3>
    <button className='backbutton' onClick={hadleclick}>Back to Home</button>
    </div>
}
export default NotFound;