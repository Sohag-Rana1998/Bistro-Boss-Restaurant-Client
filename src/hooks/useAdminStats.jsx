import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdminStats = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: adminStats,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['Admin-stats'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('admin-stats');
      return data;
    },
  });
  return { adminStats, refetch, isLoading };
};

export default useAdminStats;
