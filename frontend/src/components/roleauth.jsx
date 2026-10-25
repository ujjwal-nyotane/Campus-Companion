import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const RoleAuth = ({ assignedRole }) => {
    const { isLoggedIn, role } = useAuth();

    if (isLoggedIn && role === assignedRole) {
        return <Outlet />;
    }
    return <Navigate to="/" replace />;
};

export default RoleAuth;
