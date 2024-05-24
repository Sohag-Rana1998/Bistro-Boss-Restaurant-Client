import axios from 'axios';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useCartsData from '../../../hooks/useCartsData';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
const Cart = () => {
  const { cart, refetch } = useCartsData();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/carts/${id}`).then(data => {
          console.log(data.data);
          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
              confirmButton: false,
              showConfirmButton: false,
              timer: 1500,
            });
          }
          refetch();
        });
      }
    });
  };
  return (
    <div className="w-full px-10 mt-5">
      <div className="w-full">
        <SectionTitle
          heading={'WANNA ADD MORE?'}
          subheading={'My Cart'}
        ></SectionTitle>
      </div>
      <div className="w-full text-3xl mt-5 font-bold cinzel flex justify-evenly items-center">
        <div>Total Order: {cart?.length}</div>
        <div>Total Price: ${totalPrice}</div>
        <div>
          <button className="btn bg-[#d1a054]">PAY</button>
        </div>
      </div>

      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}

            <thead>
              <tr className="bg-[#d1a054] rounded-t-3xl">
                <th className="p-5 ">No</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th> Item Price</th>
                <th> Action</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {cart &&
                cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className=" w-32 h-20 rounded-lg">
                            <img src={item.image} className="w-full h-full" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn bg-red-600 "
                      >
                        <RiDeleteBin5Line className="text-white text-xl" />
                      </button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
