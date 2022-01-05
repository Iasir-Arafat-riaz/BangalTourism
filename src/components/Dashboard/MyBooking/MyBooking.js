import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyBooking = () => {

    const { user } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(` https://glacial-shelf-30568.herokuapp.com/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products, user]);

    return (
        <Container>
            <Row>
                <h2>MyBooking</h2>
                {
                    products.map(product => <Col lg={4} md={6} xs={12}>

                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default MyBooking;