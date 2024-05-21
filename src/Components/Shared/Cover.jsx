/* eslint-disable react/prop-types */
const Cover = ({ heading, subheading, img }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
      }}
      className={`max-w-[1990px] w-full mx-auto  h-[700px] flex justify-center items-center bg-cover bg-no-repeat bg-center bg-fixed`}
    >
      <div className="h-[450px]  container max-w-7xl mx-auto text-white bg-black bg-opacity-30 cinzen text-center p-5 md:p-10 flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover ">
        <h1 className="text-6xl font-bold mb-4">{heading}</h1>
        <h1 className="text-2xl font-semibold">{subheading}</h1>
      </div>
    </div>
  );
};

export default Cover;
