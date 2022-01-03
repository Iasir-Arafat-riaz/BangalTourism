import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="MotherDashboard">
      <div style={{ positon: "relative" }} className="row ">
        <div className="col-md-2 dashboardItems">
          <div id="wrapper">
            <div class="bg-white" id="sidebar-wrapper">
              <div class="list-group list-group-flush my-3">
                <Link
                  to="/Dashboard/MyBooking"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-project-diagram me-2"></i>My Booking
                </Link>
                <Link
                  to="/Dashboard/ServiceReview"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-chart-line me-2"></i>Review
                </Link>
                <Link
                  to="/Dashboard/Payment"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-paperclip me-2"></i>Payment
                </Link>
                <Link
                  to="/Dashboard/AddPlan"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-shopping-cart me-2"></i>Add Plan
                </Link>
                <Link
                  to="/Dashboard/ManagePlan"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-gift me-2"></i>Manage Plan
                </Link>
                <Link
                  to="/Dashboard/ManageBooking"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-comment-dots me-2"></i>Manage Order
                </Link>
                <Link
                  to="/Dashboard/MakeAdmin"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-map-marker-alt me-2"></i>Make Admin
                </Link>

                <Link
                  // onClick={logOut}
                  to="/Home"
                  class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                >
                  <i class="fas fa-power-off me-2"></i>Logout
                </Link>
              </div>
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
