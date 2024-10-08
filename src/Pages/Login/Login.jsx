import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';

import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useRef, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogin from '../../Components/Shared/SocialLogin/SocialLogin';

const Login = () => {
  const captChaRef = useRef();
  const [type, setType] = useState(false);

  const { signInWithEmail } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const handleLogIn = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const user_captcha_value = captChaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      console.log(user_captcha_value);
    } else {
      return toast('CaptCha Not Verified');
    }

    signInWithEmail(email, password)
      .then(() => {
        // console.log(result.user);

        Swal.fire({
          icon: 'success',
          title: 'Log In successful',
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(location?.state || '/');
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title:
            'Something went wrong. Please provide a registered email and password.',
          showConfirmButton: true,
        });
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="flex w-screen mx-auto  flex-col justify-between items-center mb-10 bg-[url(https://i.postimg.cc/fbmdS3k4/Rectangle-75.png)] bg-cover bg-center bg-no-repeat">
      <Helmet>
        <title>Bistro Boss Restaurant | Login</title>
      </Helmet>
      <div className="flex flex-col md:flex-row   min-h-screen  items-center border p-5">
        <div className=" w-full  md:w-[50%]">
          <img
            className="h-[450px]"
            src="https://i.postimg.cc/BbcPYRHm/authentication2-1.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-[50%]">
          <div className="flex flex-col    w-full  ">
            <div className="mb-4 text-center">
              <h1 className="my-3 text-4xl text-black font-bold">Sign In</h1>
            </div>
            <form
              onSubmit={handleLogIn}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-bold mb-2 text-sm"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder=" Email address"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm font-bold">
                      Password
                    </label>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline text-gray-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={type ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="password"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                      required
                    />
                    <span
                      className="absolute right-5 top-2 "
                      onClick={() => setType(!type)}
                    >
                      {type ? (
                        <IoEye className="text-2xl" />
                      ) : (
                        <IoEyeOff className="text-2xl" />
                      )}
                    </span>{' '}
                  </div>
                </div>
              </div>
              <div>
                <label className="block font-bold mb-2 text-sm">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  id="captcha"
                  ref={captChaRef}
                  required
                  placeholder="Type the text above in captcha"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
              <div className="space-y-2">
                <div>
                  <input
                    type="submit"
                    value="Log In"
                    className="w-full btn px-8 py-3 cursor-pointer font-semibold rounded-md bg-blue-600 text-gray-50"
                  />
                </div>
                <p className="px-6 text-sm text-center text-gray-600">
                  Don&apos;t have an account yet?
                  <Link to={'/register'}>
                    <button
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:underline cursor-pointer font-bold text-xl text-violet-600"
                    >
                      Sign up
                    </button>
                  </Link>
                  .
                </p>
              </div>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>

      <ScrollRestoration />
    </div>
  );
};

export default Login;
