import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import SharedMenuItems from '../../../Components/SharedMenuItems/SharedMenuItems';
import useMenuData from '../../../hooks/useMenuData';

const MenuItem = () => {
  const { items } = useMenuData();

  const popular = items?.filter(item => item.category == 'popular');

  return (
    <div>
      <div className="my-5">
        <SectionTitle
          subheading="Check it out"
          heading="MenuItem"
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popular?.map(item => (
          <SharedMenuItems key={item._id} item={item}></SharedMenuItems>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-5">
        <button className="btn py-3 px-5 rounded-3xl border-b-4 border-black">
          Viw Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
