import { Route, Routes } from 'react-router-dom';
import Index from './components/Index.jsx'
import Dashboard from './components/Dashboard.jsx'
import Attendance from './components/attendance.jsx'
import Profile from './components/profile.jsx'
import ProtectedRoute from './components/ProtectedRoutes.jsx';
import students from './data/data.js';
function App() {
    {
        if (localStorage.getItem("data")) {

        } else {
            localStorage.setItem("data", JSON.stringify(students))
        }
    }
    return (
        <Routes>
            <Route path="/"
                element={<Index />}
            />
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path='*' element={<><h1>404</h1></>} />
        </Routes>
    )
}
export default App