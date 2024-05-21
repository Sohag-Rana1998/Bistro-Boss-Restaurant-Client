import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Featured = () => {
  return (
    <div className="max-w-[1990px] py-10 text-white h-auto md:h-[700px] container bg-[url(https://i.postimg.cc/2ycGKWXq/Rectangle-13.png)] bg-fixed bg-no-repeat bg-center bg-cover">
      <div className="mt-10 mb-8">
        <SectionTitle
          heading="FROM OUR MENU"
          subheading="Check it out"
        ></SectionTitle>
      </div>
      <div className="flex flex-col md:flex-row  items-center gap-5  mx-auto w-full  container max-w-7xl  ">
        <div className=" w-full  md:w-[50%]">
          <img
            className="h-[300px] w-full "
            src="https://s3-alpha-sig.figma.com/img/7770/bb80/602fab25f38a216a24aa109c0eb34983?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XCcoEQBc1tVkFZtufFLMOzcY8VTXb5V954~m4i8ojK22GO~RHi4B-tzliVWimQfSKs1f~CLyGWKRUaV5C8xVDPlB3xhS7ntbsuzwkhHxl~dggkjtoq417CdKr-iLCTn3PaCB-fGZ2yzmQaDkYss4ZLjAuPrE7LJUWK6PmNn9n8meVVhaoM1kBWdpyWztj3RN2ZAfFSdmq~sb19XqOnRkI1~95P4Dvq4MlWztKcDq~WCFyS1ZKqtT0VOacnIV080ccitkKXAA6Pwct5BHV-ZZrRrM7~nUBTOAugrqtfXRVMjZ6md0zS1RHcc78O1qf22RUjP9-640tyIK5wBpuX7MFw__"
            alt=""
          />
        </div>
        <div className=" inter text-center md:text-left px-5 md:px-0 w-full  md:w-[50%]">
          <h4>March 20, 2023</h4>
          <h3 className="texl-xl">WHERE CAN I GET SOME?</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn-outline rounded-md text-white py-2 px-3 border-b-4 border-b-yellow-400 ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
