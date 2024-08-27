import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useMenuDataById = id => {
  const axiosSecure = useAxiosSecure();
  const {
    data: item = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['menuDataById'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/menu/${id}`);
      return data;
    },
  });
  return { item, isLoading, refetch };
};

export default useMenuDataById;
