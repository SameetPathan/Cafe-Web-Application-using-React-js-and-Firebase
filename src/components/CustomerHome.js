import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function CustomerHome() {
  return (
    <>
    <div class="alert alert-secondary" role="alert">
    Customer Home
</div>
    <div className="container mt-2">
     
      <div className="row">

        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
            <Link to="/customer-menu"  className="card-title">
             <h5 className="card-title">Menu</h5>
                </Link>
              
              <i className="fas fa-utensils fa-3x"></i>
            </div>
          </div>
        </div>
      
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
            <Link to="/customer-menu"  className="card-title">
             <h5 className="card-title">Offers</h5>
                </Link>
             
              <i className="fas fa-percent fa-3x"></i>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
            <Link to="/customer-order-history"  className="card-title">
             <h5 className="card-title">Order History</h5>
                </Link>
            
              <i className="fas fa-comments fa-3x"></i>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
            <Link to="/customer-feedback"  className="card-title">
             <h5 className="card-title">Give Feedbacks</h5>
                </Link>
            
              <i className="fas fa-comments fa-3x"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default CustomerHome;
