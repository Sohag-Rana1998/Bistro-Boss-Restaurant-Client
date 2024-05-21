import { Card } from '@material-tailwind/react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const ChefRecomends = () => {
  return (
    <div>
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subheading="Should Try"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
        <Card>
          <img
            className="h-64 "
            src="https://s3-alpha-sig.figma.com/img/4730/b1c4/8a372e2ca42102d3fab47af6a948d709?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BRHMRwOF3oMjWATNEjhfs~witceTKO3EDqV1gKPp2PGp4ZWQb-ObtDAp7Y3SV2QDFpbFuVrrR2vUTa4IOrAu3sicDX1NN5C26b3VXUGAdQqv3sMNitz82mxOzhrtMkdL~IGMFI-G6NW5V1gOL8hQ1lWH8lcdIbY2Ib8bKT~zXRH95R~3MwMC8t57ad-8D5F7hcdepLIoBgMvBwqcl6Liwd2qhGmkcwoVp-Evwwco7U~uq6iVdumIuAtsC8Xc6YzmcIkrnWhY2lgeCQmTeQDW2iUMretmDGLItA3aSR~eCoLzHA8iV0cvZDTUZeJERhkthLeIf8P8UCiea9LKtXUAGQ__"
            alt=""
          />
          <div className="flex justify-center flex-col gap-3 items-center mt-3">
            <h3 className="text-xl font-bold">Caeser Salad</h3>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn mb-4  border-b-4 text-yellow-400 border-b-yellow-400 py-2 px-3">
              Add To Cart
            </button>
          </div>
        </Card>
        <Card>
          <img
            className="h-64 "
            src="https://s3-alpha-sig.figma.com/img/4730/b1c4/8a372e2ca42102d3fab47af6a948d709?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BRHMRwOF3oMjWATNEjhfs~witceTKO3EDqV1gKPp2PGp4ZWQb-ObtDAp7Y3SV2QDFpbFuVrrR2vUTa4IOrAu3sicDX1NN5C26b3VXUGAdQqv3sMNitz82mxOzhrtMkdL~IGMFI-G6NW5V1gOL8hQ1lWH8lcdIbY2Ib8bKT~zXRH95R~3MwMC8t57ad-8D5F7hcdepLIoBgMvBwqcl6Liwd2qhGmkcwoVp-Evwwco7U~uq6iVdumIuAtsC8Xc6YzmcIkrnWhY2lgeCQmTeQDW2iUMretmDGLItA3aSR~eCoLzHA8iV0cvZDTUZeJERhkthLeIf8P8UCiea9LKtXUAGQ__"
            alt=""
          />
          <div className="flex justify-center flex-col gap-3 items-center mt-3">
            <h3 className="text-xl font-bold">Caeser Salad</h3>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn  mb-4  border-b-4 text-yellow-400 border-b-yellow-400 py-2 px-3">
              Add To Cart
            </button>
          </div>
        </Card>
        <Card>
          <img
            className="h-64 "
            src="https://s3-alpha-sig.figma.com/img/4730/b1c4/8a372e2ca42102d3fab47af6a948d709?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BRHMRwOF3oMjWATNEjhfs~witceTKO3EDqV1gKPp2PGp4ZWQb-ObtDAp7Y3SV2QDFpbFuVrrR2vUTa4IOrAu3sicDX1NN5C26b3VXUGAdQqv3sMNitz82mxOzhrtMkdL~IGMFI-G6NW5V1gOL8hQ1lWH8lcdIbY2Ib8bKT~zXRH95R~3MwMC8t57ad-8D5F7hcdepLIoBgMvBwqcl6Liwd2qhGmkcwoVp-Evwwco7U~uq6iVdumIuAtsC8Xc6YzmcIkrnWhY2lgeCQmTeQDW2iUMretmDGLItA3aSR~eCoLzHA8iV0cvZDTUZeJERhkthLeIf8P8UCiea9LKtXUAGQ__"
            alt=""
          />
          <div className="flex justify-center flex-col items-center mt-3 gap-3">
            <h3 className="text-xl font-bold">Caeser Salad</h3>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn  mb-4   w-32  border-b-4 text-yellow-400 border-b-yellow-400 py-2 px-3">
              Add To Cart
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChefRecomends;
