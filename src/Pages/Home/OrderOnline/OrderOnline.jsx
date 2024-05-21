import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Slider from './Slider';

const OrderOnline = () => {
  const heading = 'ORDER ONLINE';
  const subheading = 'From 11:00am to 10:00pm';

  return (
    <div className=" my-16">
      <div className="mb-5">
        <SectionTitle heading={heading} subheading={subheading}></SectionTitle>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default OrderOnline;
