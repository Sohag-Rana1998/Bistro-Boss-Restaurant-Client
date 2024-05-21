const Card = ({ item }) => {
  console.log(item);
  const { image, name, price, recipe } = item;
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
          <button className="btn mb-4  border-b-4 text-yellow-400 border-b-yellow-400 py-2 px-3">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
