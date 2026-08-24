import Index from './components/index.jsx';
import Dashboard from "./components/dashboard.jsx";
import Attendance from './components/attendance.jsx';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Profile from "./components/profile.jsx";
import Fees from './components/fees.jsx';
import TimeTable from './components/timetable.jsx';
import Hostel from './components/hostel.jsx';
import Grades from './components/grades.jsx';
import Support from './components/support.jsx';
import F_dashboard from './components/faculty.jsx';
import { Route,Routes,Link } from "react-router-dom";


function App(){
    return (
        <Routes>
            <Route path='/' element={
           <> <Navbar/>
            <Index/>
            <Footer/>
            </>
        }/>

        <Route path='/home' element={
           <> <Navbar/>
            <Dashboard/>
            <Footer/>
            </>
        }/>
        <Route path='/grades' element={
           <> <Navbar/>
            <Grades/>
            <Footer/>
            </>
        }/>

        <Route path='/profile' element={
            <>
            <Navbar/>
            <Profile/>
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

        <Route path='/timetable' element={
           <> <Navbar/>
            <TimeTable/>
            <Footer/>
            </>
        }/>

        <Route path='/hostel' element={
            <>
                <Navbar/>
                <Hostel/>
                <Footer/>
            </>
        }/>

        <Route path='/support' element={
            <>
                <Navbar/>
                <Support/>
                <Footer/>
            </>
        }/>

        <Route path='/f-dashboard' element={
            <>
                <Navbar/>
                <F_dashboard/>
                <Footer/>
            </>
        }/>
        
        </Routes>
    )
}
export default App