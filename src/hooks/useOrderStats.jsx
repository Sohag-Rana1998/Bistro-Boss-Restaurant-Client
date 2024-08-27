import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useOrderStats = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: orderStats = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/order-stats');
      console.log(data);
      return data;
    },
  });

  return { orderStats, refetch, isLoading };
};

export default useOrderStats;
