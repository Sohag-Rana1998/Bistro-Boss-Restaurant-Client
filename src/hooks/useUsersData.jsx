import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUsersData = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['all-users'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/users');
      return data;
    },
  });

  return { users, refetch };
};

export default useUsersData;
