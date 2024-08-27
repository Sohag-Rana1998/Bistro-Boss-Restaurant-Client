import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ['payment-history'],
    queryFn: async () => {
      if (user?.email) {
        const { data } = await axiosSecure.get(
          `/payment-history?email=${user?.email}`
        );
        console.log(data);
        return data;
      }
    },
  });
  return { paymentHistory, refetch };
};

export default usePaymentHistory;
