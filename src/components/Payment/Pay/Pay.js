import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useAuth from '../../../Hooks/useAuth';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe('pk_test_51K93ltBcGooWtax9JKsV2tP7uqmbQYtdpRXFr4Ey1CHijNCVjRMV8eDkLX1YlNvDJHvktGKwvAjYvzFo93K3j06q00slg9hLuX');

const Pay = () => {

    const { user } = useAuth();
    const params = useParams();
    const [cartProduct, setCartProduct] = useState({});

    React.useEffect(() => {
        fetch(`https://glacial-shelf-30568.herokuapp.com/places/${params._id}`)
            .then(res => res.json())
            .then(data => setCartProduct(data))
    }, [cartProduct, params]);




    return (
        <>

            {
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        cartProduct={cartProduct}
                    />
                </Elements>
            }
        </ >
    );
};

export default Pay;