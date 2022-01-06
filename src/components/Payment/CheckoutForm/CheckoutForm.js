import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Alert, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';



const CheckoutForm = ({ cartProduct }) => {

    const { price, _id } = cartProduct;
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [process, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch('https://glacial-shelf-30568.herokuapp.com/payment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            });

    }, [price]);


    // pay button
    const payButton = {
        border: '1px solid black',
        padding: '5px 30px',
        borderRadius: '25px',
        color: 'black',
        background: "#fff",
        marginTop: '30px'
    }

    const HandleSubmit = async (e) => {

        e.preventDefault();

        if (!stripe || !elements) {
            return;
        };
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        };
        setProcessing(true)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {

            setSuccess("");
            setError(error.message);
        }
        else {
            setError('');
        };
        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {

                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
        }
        else {
            setError('');
            setSuccess("your payment is done");
            setProcessing(false);

            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                isPaid: true,
                transsaction: paymentIntent.client_secret.slice('_secret')[0]
            };
            const uri = `https://glacial-shelf-30568.herokuapp.com/cartProducts/${_id}`
            fetch(uri, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {

                })

        };
    };


    return (
        < >
            <form onSubmit={HandleSubmit} className="payment-form" style={{ display: "flex", justifyContent: 'center', marginTop: 20 }}>
                <article
                    className='shadow'
                    style={{ background: "#fff", marginTop: 10, padding: 4, width: 500, marginBottom: 2 }}
                >
                    <CardElement
                        options={{
                            style: {

                                base: {
                                    fontSize: '16px',
                                    color: 'black',
                                    '::placeholder': {
                                        color: 'black',
                                    },
                                },
                                invalid: {
                                    color: 'red',
                                },
                            },
                        }}
                    />
                    {process && !error ? <Spinner animation="border" /> : <button style={payButton} type="submit" disabled={!stripe}>
                        Pay $ {price}
                    </button>}

                    {success && <Alert className='mt-2 mb-2' variant="success" > {success}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>
                    }
                </article>
            </form>

        </>
    );
};

export default CheckoutForm;