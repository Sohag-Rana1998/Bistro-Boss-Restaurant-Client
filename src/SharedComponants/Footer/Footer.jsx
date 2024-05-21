import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className="max-w-[1990px]">
      <footer className="h-auto md:h-60 bg-black text-white">
        <div className="w-full flex h-full flex-col justify-between  mx-auto lg:flex-row ">
          <div className="w-full h-full bg-[#1F2937] flex flex-col md:flex-row justify-between items-center md:items-start pt-10">
            <div></div>
            <div className="md:p-5 p-4 text-center md:text-left inter mr-0 md:mr-8">
              <h3 className="text-3xl font-bold">CONTACT US</h3>

              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p> +88 123456789</p>
              <p> Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
          <div className="w-full h-full bg-[#111827]">
            <div className="w-full  h-full  flex flex-col md:flex-row items-center justify-between md:items-start pt-10">
              <div className="md:p-5 p-4 inter text-center md:text-left ml-0 md:ml-8 ">
                <h3 className="text-3xl font-bold mb-2">FOLLOW US</h3>

                <p>Join us on social media</p>
                <div className="text-white text-2xl flex items-center gap-2">
                  <FaFacebook />
                  <FiInstagram />
                  <FaTwitter />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-6 text-sm text-center bg-black text-white">
        © {currentYear} Job Portal. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
