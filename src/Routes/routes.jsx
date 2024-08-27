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
import AddItems from '../Pages/Dashboard/AddItems/AddItems';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';
import UpdateItem from '../Pages/Dashboard/UpdateItem/UpdateItem';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome';
import UserHome from '../Pages/Dashboard/UserHome/UserHome';

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
      // users routes
      {
        path: 'my-cart',
        element: <Cart />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />,
      },
      {
        path: 'user-home',
        element: <UserHome />,
      },

      // admin routes
      {
        path: 'all-users',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: 'add-items',
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-items',
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: 'admin-home',
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: 'update-item/:id',
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
