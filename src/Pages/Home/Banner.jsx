import img1 from '../../../public/home/01.jpg';
import img2 from '../../../public/home/02.jpg';
import img3 from '../../../public/home/03.png';
import img4 from '../../../public/home/04.jpg';
import img5 from '../../../public/home/05.png';
import img6 from '../../../public/home/06.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel>
        <div className="h-[600px] xl:h-[800px]">
          <img className="h-full" src={img1} />
        </div>
        <div className="h-[600px] xl:h-[800px]">
          <img className="h-full" src={img2} />
        </div>
        <div className="h-[600px] xl:h-[800px]">
          <img className="h-full" src={img3} />
        </div>
        <div className="h-[600px] xl:h-[800px]">
          <img className="h-full" src={img4} />
        </div>
        <div className="h-[600px] xl:h-[800px]">
          <img className="h-full" src={img5} />
        </div>
        <div className="h-[600px] xl:h-[800px]">
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
