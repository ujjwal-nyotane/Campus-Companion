import { Route, Routes } from 'react-router-dom';
import Index from './components/index.jsx';
import Dashboard from './components/dashboard.jsx';
import Courses from './components/courses.jsx';
import Attendance from './components/attendance.jsx';
import Profile from './components/profile.jsx';
import ProtectedRoute from './components/protectedRoutes.jsx';
import Fees from './components/fees.jsx';
import Grades from './components/grades.jsx';
import Hostel from './components/hostel.jsx';
import Support from './components/support.jsx';
import Timetable from './components/timetable.jsx';
import F_dashboard from './components/faculty.jsx';
import FacultyAttendance from './components/facultyAttendance.jsx';
import FacultyLeaves from './components/facultyLeaves.jsx';
import FacultyNotices from './components/facultyNotices.jsx';
import RoleAuth from './components/roleauth.jsx';
import NotFound from './components/notfound.jsx';
import SidebarLayout from './layouts/SidebarLayout.jsx';

function App() {
    return (
        <Routes>
            
            <Route path="/" element={<Index />} />

            
            <Route element={<ProtectedRoute />}>
                
                <Route element={<RoleAuth assignedRole="Student" />}>
                    <Route element={<SidebarLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/attendance" element={<Attendance />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/timetable" element={<Timetable />} />
                        <Route path="/fees" element={<Fees />} />
                        <Route path="/hostel" element={<Hostel />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/grades" element={<Grades />} />
                    </Route>
                </Route>

                
                <Route element={<RoleAuth assignedRole="Faculty" />}>
                    <Route element={<SidebarLayout />}>
                        <Route path="/f-dashboard" element={<F_dashboard />} />
                        <Route path="/f-attendance" element={<FacultyAttendance />} />
                        <Route path="/f-leaves" element={<FacultyLeaves />} />
                        <Route path="/f-notices" element={<FacultyNotices />} />
                    </Route>
                </Route>
            </Route>

            
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
