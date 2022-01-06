import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Dashboard = () => {
  const { handaleLogOut, user, isLoading, admin } = useAuth();

  return (
    <div className="MotherDashboard container-fluid">
      <div style={{ positon: "relative" }} className="row ">
        <div className="col-md-2 dashboardItems">
          <div id="wrapper">
            <div className="bg-white" id="sidebar-wrapper">
              {!admin ? (
                <div className="list-group list-group-flush my-3">
                  <Link
                    to="/Dashboard/MyBooking"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i className="fas fa-project-diagram me-2"></i>My Booking
                  </Link>
                  <Link
                    to="/Dashboard/ServiceReview"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i className="fas fa-chart-line me-2"></i>Review
                  </Link>
                  <Link
                    to="/Dashboard/Payment"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i className="fas fa-paperclip me-2"></i>Payment
                  </Link>
                  <Link
                    onClick={handaleLogOut}
                    to="/Home"
                    className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                  >
                    <i className="fas fa-power-off me-2"></i>Logout
                  </Link>
                </div>
              ) : (
                <div className="list-group list-group-flush my-3">
                  {/* admin navigation */}
                  <Link
                    to="/Dashboard/AddPlan"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i className="fas fa-shopping-cart me-2"></i>Add Plan
                  </Link>
                  <Link
                    to="/Dashboard/ManagePlan"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i className="fas fa-gift me-2"></i>Manage Plan
                  </Link>
                  <Link
                    to="/Dashboard/ManageBooking"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i className="fas fa-comment-dots me-2"></i>Manage Order
                  </Link>
                  <Link
                    to="/Dashboard/MakeAdmin"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i className="fas fa-map-marker-alt me-2"></i>Make Admin
                  </Link>
                  <Link
                    onClick={handaleLogOut}
                    to="/Home"
                    className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                  >
                    <i className="fas fa-power-off me-2"></i>Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-10 dashboardOrigin">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
