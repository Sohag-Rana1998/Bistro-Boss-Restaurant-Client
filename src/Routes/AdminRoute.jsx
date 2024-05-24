import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import PropTypes from 'prop-types';
const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useAuth();
  const { isAdmin, isLoading } = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    logOut();
    navigate('/login', { state: { from: location.pathname } });
  };

  if (loading || isLoading) {
    return (
      <div className="w-[80%] mx-auto min-h-screen flex justify-center items-center">
        <progress className="progress w-56 mb-1"></progress>
        <progress className="progress w-56 mb-1"></progress>
        <progress className="progress w-56 mb-1"></progress>
      </div>
    );
  } else if (user && isAdmin?.role === 'admin') {
    return children;
  } else {
    return handleNavigate();
  }
};
AdminRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminRoute;
