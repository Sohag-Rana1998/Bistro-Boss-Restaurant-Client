import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isAdmin,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      if (user?.email) {
        const { data } = await axiosSecure.get(`/admin/${user?.email}`);
        return data;
      }
    },
  });

  return { isAdmin, refetch, isLoading };
};

export default useAdmin;
