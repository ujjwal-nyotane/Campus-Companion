import Index from './components/index.jsx'
import Dashboard from "./components/dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Profile from "./components/profile.jsx";
import Fees from './components/fees.jsx'
import { Route,Routes,Link } from "react-router-dom";

function App(){
    return (
        <Routes>
            <Route path='/index' element={
           <> <Navbar/>
            <Index/>
            <Footer/>
            </>
        }/>
        <Route path='/' element={
           <> <Navbar/>
            <Dashboard/>
            <Footer/>
            </>
        }/>
         <Route path='/attendance' element={
           <> <Navbar/>
            <Attendance/>
            <Footer/>
            </>
        }/>
        <Route path='/fees' element={
           <> <Navbar/>
            <Fees/>
            <Footer/>
            </>
        }/>
        </Routes>
    )
}
export default App