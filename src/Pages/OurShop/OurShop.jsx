import Cover from '../../Components/Shared/Cover';
import ourShopImg from '../../../public/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenuData from '../../hooks/useMenuData';
import Card from '../../Components/Shared/Card/Card';
import { useParams } from 'react-router-dom';
const OurShop = () => {
  const { category } = useParams();
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const initialIndex = categories.indexOf(category || 'salad');

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const { menu } = useMenuData();
  const drinks = menu?.filter(item => item.category == 'drinks');
  const desserts = menu?.filter(item => item.category == 'dessert');
  const pizzas = menu?.filter(item => item.category == 'pizza');
  const salads = menu?.filter(item => item.category == 'salad');
  const soups = menu?.filter(item => item.category == 'soup');
  return (
    <div>
      <div>
        <Cover
          img={ourShopImg}
          heading={'OUR SHOP'}
          subheading={'Would you like to try a dish?'}
        ></Cover>
      </div>
      <div className="max-w-7xl mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
              {salads?.map(item => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
              {pizzas?.map(item => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
              {soups?.map(item => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
              {desserts?.map(item => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
              {drinks?.map(item => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
