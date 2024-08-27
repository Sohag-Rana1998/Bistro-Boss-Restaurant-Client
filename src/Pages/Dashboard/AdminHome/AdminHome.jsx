import { FaShuttleVan, FaWallet } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoLayersSharp } from 'react-icons/io5';
import CustomBarChart from '../../../Components/Shared/Recharts/CustomBarChart';
import PieCharts from '../../../Components/Shared/Recharts/PieCharts';
import useAdminStats from '../../../hooks/useAdminStats';

const AdminHome = () => {
  const { adminStats, refetch, isLoading } = useAdminStats();

  return (
    <div className="w-full mx-auto">
      <div>
        <h3 className="text-3xl font-semibold cinzel mb-4">
          Hi, Welcome Back!
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-5">
        <div className="w-full h-[150px] bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-xl flex items-center justify-center">
          <div className="text-white gap-3  flex items-center text-2xl inter font-extrabold">
            <FaWallet className="text-white text-3xl" />
            <div className="">
              <h3>{adminStats?.revenue.toFixed(2)}</h3>
              <h3> Revenue</h3>
            </div>
          </div>
        </div>
        <div className="w-full h-[150px] bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-xl flex items-center justify-center gap-3 ">
          <FaPeopleGroup className="text-white text-3xl" />
          <div className="text-white text-2xl inter font-extrabold">
            <h3>{adminStats?.users}</h3>
            <h3>Customers</h3>
          </div>
        </div>
        <div className="w-full h-[150px] bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-xl flex items-center justify-center gap-3 ">
          <IoLayersSharp className="text-white text-3xl" />
          <div className="text-white text-2xl inter font-extrabold">
            <h3>{adminStats?.menuItems}</h3>
            <h3>Products</h3>
          </div>
        </div>
        <div className="w-full h-[150px] bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-xl flex items-center justify-center gap-3 ">
          <FaShuttleVan className="text-white text-3xl" />
          <div className="text-white text-2xl inter font-extrabold">
            <h3>{adminStats?.orders}</h3>
            <h3>Orders</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex-col md:flex-row flex divide-x-4 divide-[#D1A054] divide-solid bottom-2 ">
        <div className="w-full">
          <CustomBarChart />
        </div>
        <div className="w-full">
          <PieCharts />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
