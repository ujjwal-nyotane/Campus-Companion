
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
    <h2 >Welcome to Campus Companion</h2>
    <p>Campus-Companion is a smart student portal designed to simplify campus life. It provides attendance tracking, timetables, academic results, notices, assignments, event updates, fee information and others in one place. The platform helps students stay organized, connected, and informed through an intuitive and user-friendly interface.</p>
    </div>
const nav = <nav className='navbar'>
  <div className='logo'>
      <img src='src/assets/logo/logo.png' alt='logo'/>
      <img  className='logotext' src='src/assets/logo/logotext.png' alt='logotext'/>
  </div>
  <div>

  </div>
  <div>

  </div>
</nav>


const home = <div className='bg-primary'>
  {nav}
  <main >
  <div className='grid-2'>
    {welcomemessage}
    {accessform}
  </div>
  </main>
  
</div>

const div = <div>hello world</div>
createRoot(document.getElementById('root')).render(
  home
)
