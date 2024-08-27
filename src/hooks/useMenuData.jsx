import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMenuData = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['all-menuData'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/all-menu`);
      return data;
    },
  });
  return { menu, isLoading, refetch };
};

export default useMenuData;
