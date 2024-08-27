/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCartsData from '../../../hooks/useCartsData';

const Card = ({ item }) => {
  const { refetch } = useCartsData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const { _id, image, name, price, recipe, category, menuId } = item;

  const handleAddToCart = async () => {
    if (user && user.email) {
      // send food to database

      const cartData = {
        foodId: menuId,
        userEmail: user.email,
        image,
        name,
        price,
        category,
      };
      try {
        const { data } = await axiosSecure.post('/carts', cartData);

        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Food added to your cart',
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      Swal.fire({
        title: 'You are not logged in',
        text: 'You have to login to add this food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: location.pathname });
        }
      });
    }
  };
  return (
    <div>
      <div>
        <div className="relative">
          <img className="h-64 " src={image} alt="" />
          <p className="font-bold absolute top-4 right-10 text-white bg-black bg-opacity-80 px-4 py-2 rounded-md">
            ${price}
          </p>
        </div>
        <div className="flex justify-center flex-col gap-3 items-center mt-3">
          <h3 className="text-xl font-bold">{name}</h3>
          <p>{recipe}</p>
          <button
            onClick={handleAddToCart}
            className="btn mb-4  border-b-4 text-yellow-400 border-b-yellow-400 py-2 px-3"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
