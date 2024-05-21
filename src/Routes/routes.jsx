import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import OurMenu from '../Pages/OutMenu/OurMenu';
import OurShop from '../Pages/OurShop/OurShop';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

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
]);
export default router;
