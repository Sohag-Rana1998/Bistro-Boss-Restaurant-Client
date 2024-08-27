import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllPayments = () => {
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], refetch } = useQuery({
    queryKey: ['all-payments'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/all-payments');
      return data;
    },
  });

  return { payments, refetch };
};

export default useAllPayments;
