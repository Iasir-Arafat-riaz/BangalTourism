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

  // open delete modal set ID
  const openModalSetId = (id) => {
    setDeletedId(id);
    onOpenModal();
  };

  //   delete order function
  const handleOrderDelete = async () => {
    console.log(admin);
    if (admin) {
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
    }
  };

  useEffect(async () => {
    setIsOrdersLoading(true);
    const url = "https://glacial-shelf-30568.herokuapp.com/manageorder";
    const orders = await fetch(url).then((res) => res.json());
    console.log(orders);
    setAllOrders(orders);
    setIsOrdersLoading(false);
  }, [isNeedUpdated]);

  return (
    <div className="py-3 px-1">
      <h1 className="text-center mb-4">Manage All Orders</h1>
      {isOrdersLoading ? (
        <Loading />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
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
                  <td className="text-uppercase">{item.tourName}</td>
                  <td>${item.tourPrice}</td>
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

export default ManageBooking;
