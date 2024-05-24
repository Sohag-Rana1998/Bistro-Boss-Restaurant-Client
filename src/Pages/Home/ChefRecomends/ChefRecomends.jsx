import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Card from '../../../Components/Shared/Card/Card';
import useMenuData from '../../../hooks/useMenuData';

const ChefRecomends = () => {
  const { items } = useMenuData();

  const salad = items?.filter(item => item.category == 'salad');

  return (
    <div>
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subheading="Should Try"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
        {salad?.slice(0, 3).map(item => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default ChefRecomends;
