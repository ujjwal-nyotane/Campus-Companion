import { Route, Routes } from 'react-router-dom';
import Index from './components/index.jsx'
import Dashboard from './components/dashboard.jsx'
import Attendance from './components/attendance.jsx'
import Profile from './components/profile.jsx'
import ProtectedRoute from './components/ProtectedRoutes.jsx';
import Fees from './components/fees.jsx';
import Grades from './components/grades.jsx';
import Hostel from './components/hostel.jsx';
import Support from './components/support.jsx'
import Timetable from './components/timetable.jsx';
import students from './data/data.js';
import Navbar from './components/navbar.jsx';
import F_dashboard from './components/faculty.jsx';
import Footer from './components/footer.jsx';
import RoleAuth from './components/roleauth.jsx';
import NotFound from './components/notfound.jsx'

function App() {
    {
        if (localStorage.getItem("data")) {

        } else {
            localStorage.setItem("data", JSON.stringify(students))
        }
    }
    return (<>
        <Navbar />
        <Routes>
            <Route path="/" element={<Index />} />
            <Route element={<ProtectedRoute />}>
                <Route element={<RoleAuth assignedRole={"Student"}/>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path='/timetable' element={<Timetable />} />
                    <Route path='/fees' element={<Fees />} />
                    <Route path='/hostel' element={<Hostel />} />
                    <Route path='support' element={< Support />} />
                    <Route path='/grades' element={<Grades />} />
                </Route>
                <Route element={<RoleAuth assignedRole={"Faculty"}/>}>
                    <Route path='/f-dashboard' element={<F_dashboard/>}/>
                </Route>
            </Route>

            <Route path='*' element={<NotFound/>} />


        </Routes>
        <Footer />
    </>
    )
}
export default App