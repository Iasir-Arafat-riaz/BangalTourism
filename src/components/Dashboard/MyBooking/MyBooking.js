import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import Loading from "../../Shared/Loding/Loading";
import { AiFillDelete } from "react-icons/ai";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const MyBooking = () => {
  const { user } = useFirebase();
  const [isOrdersLoading, setIsOrdersLoading] = useState(true);
  const [myOrders, setMyorders] = useState([]);
  const [deletedId, setDeletedId] = useState(null);
  const [isNeedUpdated, setIsNeedUpdated] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  //   modal
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  //   delete order function
  const handleOrderDelete = async () => {
    setIsDeleting(true);
    const url = `https://glacial-shelf-30568.herokuapp.com/order/${deletedId}`;
    const deleted = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    onCloseModal();
    setIsNeedUpdated(isNeedUpdated + 1);
    setIsDeleting(false);
  };

  //   set order id to delete

  const openModalSetId = (id) => {
    setDeletedId(id);
    onOpenModal();
  };

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
    <div style={{marginTop:"60px"}} className="">
      <h1 className="text-center mb-4">My Booking</h1>
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
              <th scope="col">Action</th>
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
                        unpaid
                      </span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn"
                      disabled={item.isPaid}
                      onClick={() => openModalSetId(item._id)}
                    >
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
      <Modal open={open} onClose={onCloseModal} center>
        <div className="container p-4">
          <h5 className="mb-3">Are your you want to perform this action?</h5>

          {!isDeleting ? (
            <div>
              <button
                className="btn btn-outline-danger me-1"
                onClick={handleOrderDelete}
              >
                Confirm
              </button>
              <button
                className="btn btn-outline-success"
                onClick={onCloseModal}
              >
                Close
              </button>{" "}
            </div>
          ) : (
            <button class="btn btn-primary" type="button" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Deleting...
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MyBooking;
