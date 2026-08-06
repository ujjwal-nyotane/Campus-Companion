
import { createRoot } from 'react-dom/client'
import './index.css'

const accessform=<div className='accessform'>
      <h3 className='text text-center'>Login / Signup</h3>
      <form className='container text-center'>
        <div ><span>Login</span>  <span>Signup</span></div>
        <label for='login-email' ></label>
          <input type="email" id="login-email" placeholder='Your Mail Address'/><br/>
          <label for='login-password' ></label>
          <input type="password" id="login-password" placeholder='Your Password'/>
      </form>
    </div>
const welcomemessage = <div style={{padding:"35px",textAlign:"center",verticalAlign:"center"}}>
    <h2 className='accesspagetitle' >Welcome to <span style={{color:"rgb(208, 174, 5)"}}>Campus</span> <span style={{color:"rgb(0, 67, 210)"}}>Companion</span></h2>
    <p>Campus-Companion is a smart student portal designed to simplify campus life. It provides attendance tracking, timetables, academic results, notices, assignments, event updates, fee information and others in one place. The platform helps students stay organized, connected, and informed through an intuitive and user-friendly interface.</p>
    </div>
const nav = <nav className='navbar'>
  <div className='logo'>
      <img src='src/assets/logo/logo.png' alt='logo'/>
      <img  className='logotext' src='src/assets/logo/logotext.png' alt='logotext'/>
  </div>
  {/* <div className='navigate'>
    <div className='home'>
      <img src='src/assets/logo/home.png'/>
    <span>Home</span>
    </div> 
    <div className='home'>
      <img src='src/assets/logo/attendance.png'/>
    <span>Attendance</span>
    </div>
    <div className='home'>
      <img src='src/assets/logo/result.png'/>
    <span>Result</span>
    </div>
    <div className='home'>
      <img src='src/assets/logo/food.png'/>
    <span>Food</span>
    </div> 
  </div>
  <div>
  <span>Your profile</span>
  </div>*/}
</nav>
const footer= <footer>

</footer>

const home = <div className='bg-primary'>
  {nav}
  <main >
  <div className='grid-2'>
    {welcomemessage}
    {accessform}
    {footer}
  </div>
  </main>
  
</div>

const div = <div>hello world</div>
createRoot(document.getElementById('root')).render(
  home
)
