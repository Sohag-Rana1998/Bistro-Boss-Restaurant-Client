import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import OurMenu from '../Pages/OutMenu/OurMenu';
import OurShop from '../Pages/OurShop/OurShop';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Main from '../Layout/Main';
import Dashboard from '../Layout/Dashboard';
import Cart from '../Pages/Dashboard/Cart/Cart';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/our-menu',
        element: <OurMenu />,
      },
      {
        path: '/our-shop',
        element: <OurShop />,
      },
      {
        path: '/our-shop/:category',
        element: <OurShop />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'my-cart',
        element: <Cart />,
      },
      {
        path: 'all-users',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
