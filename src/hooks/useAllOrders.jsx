import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
const useAllOrders = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allOrders,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['all-orders'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/all-orders`);
      return data;
    },
  });

  return { allOrders, refetch, isLoading };
};

export default useAllOrders;
