import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

import { Button } from '@material-tailwind/react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post('/users', userInfo).then(res => {
          console.log(res.user);

          Swal.fire({
            icon: 'success',
            title: 'Successfully  Login',
            showConfirmButton: true,
          });
          navigate(location.state || '/');
        });
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

  return (
    <div>
      <div className="flex justify-around items-center ">
        <div className="divider divider-primary   w-full"></div>
        <h2>OR</h2>
        <div className="divider divider-primary  w-full"></div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button
          onClick={handleGoogleLogin}
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center w-full gap-3"
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
