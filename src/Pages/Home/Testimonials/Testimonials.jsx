import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="my-20">
      <div className="">
        <SectionTitle
          subheading="What Our Clients Say"
          heading="TESTIMONIALS"
        ></SectionTitle>
      </div>
      <div>
        {' '}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-aut0 md:h-[300px]"
        >
          {reviews?.map(review => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col w-full md: container max-w-7xl mx-auto justify-center items-center py-5 text-center">
                <div>
                  <Rating
                    style={{ maxWidth: 200 }}
                    value={review.value}
                    readOnly
                  />
                </div>
                <div>
                  <img
                    src="https://i.postimg.cc/3R128bDy/quote-left-1.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <p>{review.details}</p>
                  <h3 className="text-xl font-bold">{review.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
