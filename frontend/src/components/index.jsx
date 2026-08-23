import {Link} from 'react-router-dom'
import './index.css';
function Index(){
    return (
        <>
        <div className='indexhero'>
            <div>
                <h2>Welcome to Campus Companion</h2>
                <p></p>
            </div>
            <div>
                <Link to=''>Faculty</Link>
                <Link to='/'>Student</Link>
            </div>
        </div>
        </>
    )
}
export default Index;