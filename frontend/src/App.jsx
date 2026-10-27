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
        <ProtectedRoute></ProtectedRoute>
    )
}
export default App