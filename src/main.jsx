
import { createRoot } from 'react-dom/client'
import './index.css'

const loginform=<div>
      <h3 className='text text-center'>Login / Signup</h3>
      <form>
        <div className='container'><span>Login</span>  <span>Signup</span></div>

      </form>
    </div>

const home = <div className='bg-primary'>
  <main >
  <div className='container grid-2'>
    <div style={{padding:"35px",textAlign:"center",verticalAlign:"center"}}>
    <h2 className='text'>Welcome to Campus Compainion</h2>
    <p className='text'>Campus-Companion is a smart student portal designed to simplify campus life. It provides attendance tracking, timetables, academic results, notices, assignments, event updates, fee information and others in one place. The platform helps students stay organized, connected, and informed through an intuitive and user-friendly interface.</p>
    </div>
    {loginform}
  </div>
  </main>
  
</div>

const div = <div>hello world</div>
createRoot(document.getElementById('root')).render(
  home
)
