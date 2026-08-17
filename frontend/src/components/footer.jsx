import './footer.css';


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
    </div>

}   
export default Footer