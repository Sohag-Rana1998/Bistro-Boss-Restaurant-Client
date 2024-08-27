import usePaymentHistory from '../../../hooks/usePaymentHistory';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const PaymentHistory = () => {
  const { paymentHistory } = usePaymentHistory();
  console.log(paymentHistory);
  return (
    <div className="w-full px-10 mt-5">
      <div className="w-full">
        <SectionTitle
          heading={'PAYMENT HISTORY'}
          subheading={'---At a Glance!---'}
        ></SectionTitle>
      </div>
      <div className="w-full text-3xl mt-5 font-bold cinzel">
        <div>Total Payment: {paymentHistory?.length}</div>
      </div>

      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}

            <thead>
              <tr className="bg-[#d1a054] rounded-t-3xl">
                <th>Email</th>
                <th>Category</th>
                <th>Total Price</th>
                <th> Payment Date</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {paymentHistory &&
                paymentHistory.map(item => (
                  <tr key={item._id}>
                    <td>{item.email}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
