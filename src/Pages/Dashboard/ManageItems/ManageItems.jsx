import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import { RiDeleteBin5Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useMenuData from '../../../hooks/useMenuData';
import { FaEdit } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
const ManageItems = () => {
  const axiosSecure = useAxiosSecure();
  const { menu, refetch } = useMenuData();

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
        axiosSecure.delete(`${import.meta.env.VITE_API}/menu/${id}`).then(data => {
          console.log(data.data);
          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',

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
      <div className="w-full text-3xl mt-5 font-bold cinzel ">
        <div>Total Order: {menu?.length}</div>
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
                <th> Action1</th>
                <th> Action2</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {menu &&
                menu.map((item, index) => (
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
                      <Link to={`/dashboard/update-item/${item._id}`}>
                        <button className="btn bg-red-600 ">
                          <FaEdit className="text-white text-xl" />
                        </button>
                      </Link>
                    </th>
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

export default ManageItems;
