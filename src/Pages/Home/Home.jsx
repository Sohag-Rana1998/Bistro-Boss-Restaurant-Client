import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import CenterBanner from './CenterBanner';
import ChefRecomends from './ChefRecomends/ChefRecomends';
import ContactNumber from './ContactNumber';
import Featured from './Featured/Featured';
import MenuItem from './MenuItem/MenuItem';
import OrderOnline from './OrderOnline/OrderOnline';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className=" container max-w-7xl mx-auto">
        <OrderOnline />
        <CenterBanner />
        <MenuItem />
        <ContactNumber />
        <ChefRecomends />
      </div>
      <Featured />
      <div className=" container max-w-7xl mx-auto">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
