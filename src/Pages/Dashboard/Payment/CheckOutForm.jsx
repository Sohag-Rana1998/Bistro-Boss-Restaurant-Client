import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCartsData from '../../../hooks/useCartsData';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const axiosSecure = useAxiosSecure();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const { cart, refetch } = useCartsData();
  const navigate = useNavigate();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post('/create-checkout-session', { price: totalPrice })
        .then(res => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('');
    }

    // Confirmed Payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'annonymous',
            email: user?.email || 'annonymous',
          },
        },
      });

    if (confirmError) {
      console.log('confirmError', confirmError);
    } else {
      console.log('Payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          cartId: cart?.map(item => item._id),
          menuIds: cart?.map(item => item.foodId),
          category: cart?.category,
          transactionId: paymentIntent.id,
        };
        console.log(cart);
        const { data } = await axiosSecure.post('/payments', payment);
        console.log(data);
        if (data?.paymentResult?.insertedId) {
          refetch();
          navigate('/dashboard/payment-history');
          Swal.fire({
            icon: 'success',
            title: 'Payment Successful',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type="submit"
          className="mt-5 btn btn-accent"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-600 my-3"> {error}</p>
      <p className=" my-3"> {transactionId}</p>
    </div>
  );
};

export default CheckOutForm;
