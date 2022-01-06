
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loding/Loading";
import "react-responsive-modal/styles.css";
import useFirebase from "../../../Hooks/useFirebase";

const Payment = () => {
    const { user } = useFirebase();
    const [isOrdersLoading, setIsOrdersLoading] = useState(true);
    const [myOrders, setMyorders] = useState([]);
    const [isNeedUpdated, setIsNeedUpdated] = useState(0);


    //   set order id to delete



    useEffect(async () => {
        setIsOrdersLoading(true);
        if (user?.uid) {
            const url = `https://glacial-shelf-30568.herokuapp.com/order/${user.email}`;
            const orders = await fetch(url).then((res) => res.json());
            setMyorders(orders);
            setIsOrdersLoading(false);
        }
    }, [user, isNeedUpdated]);


    return (
        <div className="">
            <h1 className="text-center mb-4">My Orders</h1>
            {isOrdersLoading ? (
                <Loading />
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tour Name</th>
                            <th scope="col">Tour Price</th>
                            <th scope="col">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders.map((item, index) => {
                            return (
                                <tr key={item._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.tourName}</td>
                                    <td>{item.tourPrice}</td>
                                    <td>
                                        {item.isPaid ? (
                                            <span className="badge rounded-pill bg-success p-2">
                                                Paid{" "}
                                            </span>
                                        ) : (
                                            <span className="badge rounded-pill bg-warning text-dark p-2">
                                                <Link to={`/Dashboard/Pay/${item.tourId}`}>pay</Link>
                                            </span>
                                        )}
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}

        </div>
    );
};

export default Payment;
