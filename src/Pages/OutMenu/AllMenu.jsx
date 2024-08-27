import SectionTitle from '../../Components/SectionTitle/SectionTitle';

import SharedMenuItems from '../../Components/SharedMenuItems/SharedMenuItems';

import CoverImg1 from '../../../public/menu/banner3.jpg';
import dessertImg2 from '../../../public/menu/dessert-bg.jpeg';
import pizzaImg1 from '../../../public/menu/pizza-bg.jpg';
import SaladImg1 from '../../../public/menu/salad-bg.jpg';
import SoupImg1 from '../../../public/menu/soup-bg.jpg';

import Cover from '../../Components/Shared/Cover';
import { Link } from 'react-router-dom';
import useMenuData from '../../hooks/useMenuData';
const AllMenu = () => {
  const { menu } = useMenuData();
  const offerItem = menu?.filter(item => item.category == 'offered');
  const desserts = menu?.filter(item => item.category == 'dessert');
  const pizzas = menu?.filter(item => item.category == 'pizza');
  const salads = menu?.filter(item => item.category == 'salad');
  const soups = menu?.filter(item => item.category == 'soup');
  console.log(offerItem);
  return (
    <div className=" max-w-[1990px] mx-auto container">
      {/* This is todays offer */}
      <div className="mb-20">
        <div className="my-16">
          <Cover
            img={CoverImg1}
            heading={'OUR MENU'}
            subheading={'Would you like to try a dish?'}
          ></Cover>
          <SectionTitle
            heading={`TODAY'S OFFER`}
            subheading={`Don't miss`}
          ></SectionTitle>
        </div>
        <div className="max-w-7xl container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {offerItem?.slice(0, 6).map(item => (
              <SharedMenuItems key={item._id} item={item}></SharedMenuItems>
            ))}
          </div>
          <div className="flex justify-center mt-4 mb-5">
            <Link to={'/our-shop'}>
              <button className="btn py-3 px-5  rounded-xl border-b-4 border-b-black">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* This is dessert part */}
      <div className="mb-20">
        <div className="my-16">
          <Cover
            img={dessertImg2}
            heading={'DESSERTS'}
            subheading={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          ></Cover>
        </div>
        <div className="max-w-7xl container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {desserts?.slice(0, 6).map(item => (
              <SharedMenuItems key={item._id} item={item}></SharedMenuItems>
            ))}
          </div>
          <div className="flex justify-center mt-4 mb-5">
            <Link to={'/our-shop/dessert'}>
              <button className="btn py-3 px-5  rounded-xl border-b-4 border-b-black">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* This is pizzas part */}
      <div className="mb-20">
        <div className="my-16">
          <Cover
            img={pizzaImg1}
            heading={'PIZZA'}
            subheading={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          ></Cover>
        </div>
        <div className="max-w-7xl container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {pizzas?.slice(0, 6).map(item => (
              <SharedMenuItems key={item._id} item={item}></SharedMenuItems>
            ))}
          </div>
          <div className="flex justify-center mt-4 mb-5">
            <Link to={'/our-shop/pizza'}>
              <button className="btn py-3 px-5  rounded-xl border-b-4 border-b-black">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* This is salads part */}
      <div className="mb-20">
        <div className="my-16">
          <Cover
            img={SaladImg1}
            heading={'SALAD'}
            subheading={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          ></Cover>
        </div>
        <div className="max-w-7xl container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {salads?.slice(0, 6).map(item => (
              <SharedMenuItems key={item._id} item={item}></SharedMenuItems>
            ))}
          </div>
          <div className="flex justify-center mt-4 mb-5">
            <Link to={'/our-shop/salad'}>
              <button className="btn py-3 px-5  rounded-xl border-b-4 border-b-black">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* This is soups part */}
      <div className="mb-20">
        <div className="my-16">
          <Cover
            img={SoupImg1}
            heading={'SOUPS'}
            subheading={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          ></Cover>
        </div>
        <div className="max-w-7xl container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {soups?.slice(0, 6).map(item => (
              <SharedMenuItems key={item._id} item={item}></SharedMenuItems>
            ))}
          </div>
          <div className="flex justify-center mt-4 mb-5">
            <Link to={'/our-shop/soup'}>
              <button className="btn py-3 px-5  rounded-xl border-b-4 border-b-black">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMenu;
