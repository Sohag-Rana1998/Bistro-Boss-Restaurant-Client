import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../Components/Shared/SocialLogin/SocialLogin';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const axiosPublic = useAxiosPublic();
  const [type, setType] = useState(false);
  const {
    createUserByEmailAndPassword,

    handleUpdateProfile,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    createUserByEmailAndPassword(data.email, data.password)
      .then(result => {
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post('/users', userInfo).then(res => {
          console.log(res.data);

          console.log(result.user);
          handleUpdateProfile(data.name, data.photo);
          reset();
          Swal.fire({
            icon: 'success',
            title:
              'Congratulation! Your account has been registered successfully',
            showConfirmButton: true,
          });
          navigate(location.state || '/');
        });
      })
      .catch(errors => console.log(errors.message));
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="flex  min-h-screen w-screen mx-auto  flex-col justify-between items-center mb-10 bg-[url(https://s3-alpha-sig.figma.com/img/4e38/4d11/b068cd862e966bd80016bce98e0c320c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0sAUiU8-ZkCLcr8IKpjeXNFVixfrJEFJGvfCHAfXg5uIVCZltVpYy4hdd3H65P0sF7qd2iJkDjUBPywNldRcSJBINH2SK4S0IUyJFuK1tsO7Vnne0Ln9RC4PgpNDT~tH8Wk~BuxmSohnavG1quSIU9aJELUWtcu1w-i7Wocw2jBpTd8bpV~Mcjz~uu6KKFEbgj9si~keKEFZE-SLcHzh8SB0QHkbJvllZcA9K5Ik07G3ByNrsThLQNjv2lvZQxjlOUgdyHwKe1QVJ66z4rs1IvchvEWnvMrrv2paBz54eHai9ZVnYaJ0JAT~nyxVUUNg5MDieoi3ql955QsWaxjLg__)] bg-cover bg-center bg-no-repeat">
      <Helmet>
        <title>Bistro Boss Restaurant | Register</title>
      </Helmet>
      <div className="flex flex-col md:flex-row-reverse  items-center border p-5">
        <div className=" w-full  md:w-[50%]">
          <img
            className="h-[500px]"
            src="https://s3-alpha-sig.figma.com/img/568e/9472/340b23f84e1940c64659bc58c9bbdf66?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RzC0QUol8z2WLJcw7FyqHEKC-nXeO-j0WXJO0BaCdNYt2I8h1Qc-ZMUYEjuprtnKQnAmp3hJmfYLa7lUxQe4mA1p~KsTsAWgGIG6U-KNm~Shh2IFSBVuIUFjIIyYIlnZslr6Bt2o29~hBLlF8Mm4MK74Nwc1G7CX5CFfPKA-HrT1eFFmxBoKgrNdFet6ljWkXhLD82cIXs3ii4VVp6q50x2KCX4YGW36tEyJ5LOHkpacLMv~oOaDXY9ycbm8l8eJe0qr59XauDQMUnzt9rHGaZ71~mnjCk11C7SpWnIFnL16MiSqfyUq40die~ccuTUnJrFHY3cDkpG747ZagS83Yg__"
            alt=""
          />
        </div>
        <div className="w-full md:w-[50%]">
          <div className="flex flex-col    w-full  ">
            <div className="mb-4 text-center">
              <h1 className="my-3 text-4xl text-black font-bold">
                Sign Up Now
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-sm"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    {...register('name', { required: true })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 "
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="block mb-2 font-bold text-sm"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    {...register('photo', { required: true })}
                    placeholder="Your PhotoURL"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50"
                  />
                  {errors.photo && (
                    <span className="text-red-500">Photo URL is required</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-bold text-sm"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register('email', { required: true })}
                    id="email"
                    placeholder="Email address"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div>
                  <div className="flex  justify-between mb-2">
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
                      {...register('password', {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                      placeholder="password"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                    />{' '}
                    {errors.password?.type === 'required' && (
                      <p className="text-red-500">Password is required</p>
                    )}
                    {errors.password?.type === 'minLength' && (
                      <p className="text-red-500">
                        Password must be six character
                      </p>
                    )}
                    {errors.password?.type === 'maxLength' && (
                      <p className="text-red-500">
                        Password must be less then 20 characters
                      </p>
                    )}
                    {errors.password?.type === 'pattern' && (
                      <p className="text-red-500">
                        Password must have one Uppercase, one lowercase, one
                        number and one special characters.
                      </p>
                    )}
                    <span
                      className="absolute right-5 top-2 "
                      onClick={() => setType(!type)}
                    >
                      {type ? (
                        <IoEye className="text-2xl text-black" />
                      ) : (
                        <IoEyeOff className="text-2xl text-black" />
                      )}
                    </span>{' '}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <input
                    type="submit"
                    value="Register"
                    className="w-full px-8 py-3 font-semibold cursor-pointer rounded-md bg-blue-600 text-gray-50"
                  />
                </div>
                <p className="px-6 text-sm text-center ">
                  Already have an account yet?
                  <Link to={'/login'}>
                    {' '}
                    <button className="hover:underline cursor-pointer font-bold text-xl text-blue-600">
                      Log In
                    </button>
                  </Link>
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

export default Register;
