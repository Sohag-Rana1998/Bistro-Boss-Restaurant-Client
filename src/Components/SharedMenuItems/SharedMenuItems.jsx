import PropTypes from 'prop-types';

const SharedMenuItems = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="flex gap-3">
        <div>
          <img
            src={image}
            alt=""
            className="h-[110px] w-[150px] rounded-b-[200px] rounded-tr-[200px]"
          />
        </div>
        <div>
          <h2 className="text-lg uppercase">{name}</h2>
          <p className="text-sm">{recipe}</p>
        </div>
        <h3 className="text-xl font-bold text-yellow-600">${price}</h3>
      </div>
    </div>
  );
};

SharedMenuItems.propTypes = {
  item: PropTypes.object,
};

export default SharedMenuItems;
