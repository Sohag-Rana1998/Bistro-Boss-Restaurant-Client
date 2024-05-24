import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCartsData = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: cart = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['CartsData', user?.email],
    queryFn: async () => {
      if (user.email) {
        const { data } = await axiosSecure.get(`/carts?email=${user.email}`);
        return data;
      }
    },
  });
  return { cart, isLoading, refetch };
};

export default useCartsData;
