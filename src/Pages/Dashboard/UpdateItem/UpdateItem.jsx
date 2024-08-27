import { FaUtensils } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import useMenuDataById from '../../../hooks/useMenuDataById';
const imgbb_api_key = import.meta.env.VITE_IMGBB_API_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`;
const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { item, refetch } = useMenuDataById(id);
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async data => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axios.post(img_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    console.log(res.data.success);
    if (res.data.success) {
      const menuItem = {
        name: data.ItemName,
        image: res.data.data.display_url,
        price: parseFloat(data.price),
        recipe: data.recipe_details,
        category: data.category,
      };
      console.log(menuItem);

      const menuData = await axiosSecure.patch(`/item/${id}`, menuItem);
      console.log(menuData.data);
      if (menuData.data.modifiedCount) {
        Swal.fire({
          title: 'Added!',
          text: `${data.itemName} has been updated successfully`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        refetch();
        navigate('/dashboard/manage-items');
      }
    }
    console.log(res.data);
  };

  return (
    <div className="w-full">
      <div>
        <SectionTitle
          heading={'UPDATE ITEM'}
          subheading={"What's new?"}
        ></SectionTitle>
      </div>
      <div className="container mx-auto bg-[#F3F3F3] p-5 md:p-14">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="ItemName"
                className="block font-bold mb-2 text-sm"
              >
                Recipe name*
              </label>
              <input
                type="text"
                name="ItemName"
                id="ItemName"
                defaultValue={item?.name}
                {...register('ItemName', { require: true })}
                className="w-full  px-3 py-3 border rounded-xl border-gray-300  text-gray-800"
              />
            </div>
            <div className="flex w-full mb-4 justify-center items-end gap-5">
              <div className="w-full">
                <label
                  htmlFor="category"
                  className="block font-bold mb-2 text-sm"
                >
                  Category
                </label>
                <select
                  {...register('category', { require: true })}
                  className="select select-primary w-full "
                  defaultValue={item?.category}
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="soup">Soup</option>
                  <option value="pizza">Pizza</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor="price" className="block font-bold mb-2 text-sm">
                  Price
                </label>
                <input
                  type="price"
                  name="price"
                  id="price"
                  defaultValue={item?.price}
                  {...register('price', { require: true })}
                  placeholder="Price"
                  className="w-full  px-3 py-3 border rounded-xl border-gray-300  text-gray-800"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="recipe_details"
                className="block font-bold mb-2 text-sm"
              >
                Recipe Details
              </label>
              <textarea
                {...register('recipe_details', { require: true })}
                className="textarea w-full"
                name="recipe_details"
                id="recipe_details"
                defaultValue={item?.recipe}
                cols="10"
                rows="10"
              ></textarea>
            </div>
            <div>
              <label htmlFor="image" className="block font-bold mb-2 text-sm">
                Choose An Image
              </label>
              <input
                type="file"
                name="image"
                placeholder="Choose a file"
                className=""
                required
                accept="image/*"
                {...register('image', { require: true })}
              />
            </div>

            <button className="bg-[#835D23] w-40 btn mt-5 text-white">
              Add Items <FaUtensils />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
