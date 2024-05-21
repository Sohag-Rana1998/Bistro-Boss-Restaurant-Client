import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../SharedComponants/NavBar/NavBar';
import Footer from '../SharedComponants/Footer/Footer';
import { Toaster } from 'react-hot-toast';
const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login' || 'register');
  const noHeaderFooter1 = location.pathname.includes('register');
  return (
    <div className="max-w-[1990px] mx-auto min-h-screen flex flex-col justify-between">
      <div>
        <div>{noHeaderFooter || noHeaderFooter1 || <NavBar />}</div>
        <div>
          <Outlet />
        </div>
      </div>
      <div>{noHeaderFooter || noHeaderFooter1 || <Footer />}</div>
      <Toaster />
    </div>
  );
};

export default Main;
