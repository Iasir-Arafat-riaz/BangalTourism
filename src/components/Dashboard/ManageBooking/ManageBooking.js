import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../Shared/Loding/Loading";

const ManageBooking = () => {
  const { admin } = useAuth();
  const [isOrdersLoading, setIsOrdersLoading] = useState(true);
  const [allOrders, setAllOrders] = useState([]);
  const [deletedId, setDeletedId] = useState(null);
  const [isNeedUpdated, setIsNeedUpdated] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // modal
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(async () => {
    setIsOrdersLoading(true);
    const url = "https://glacial-shelf-30568.herokuapp.com/manageorder";
    const allOrders = await fetch(url);
    console.log(allOrders);
    setAllOrders(allOrders);
    setIsOrdersLoading(false);
  }, []);
  return (
    <div>
      <h1 className="text-center mb-4">Manage All Orders</h1>
      {isOrdersLoading ? (
        <Loading />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Tour Name</th>
              <th scope="col">Tour Price</th>
              <th scope="col">Payment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.tourName}</td>
                  <td>{item.tourPrice}</td>
                  <td>
                    {item.isPaid ? (
                      <span className="badge rounded-pill bg-success p-2">
                        Paid{" "}
                      </span>
                    ) : (
                      <span className="badge rounded-pill bg-warning text-dark p-2">
                        Not Paid
                      </span>
                    )}
                  </td>
                  <td>
                    <button className="btn" disabled={item.isPaid}>
                      <AiFillDelete
                        className="text-danger"
                        style={{ fontSize: "25px" }}
                      />
                    </button>
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

export default ManageBooking;
