import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function AdminHome() {
  return (
    <>
    <div class="alert alert-secondary" role="alert">
Admin Dashboard
</div>
    <div className="container mt-5">
    
      
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3">
        <Link to="/admin-orders"  className="btn btn-primary btn-block my-2 my-sm-0 mr-2">
        Orders
                </Link>
         
        </div>
        <div className="col-md-3 mb-3">
        <Link to="/admin-products"  className="btn btn-info btn-block my-2 my-sm-0 mr-2">
        Products
                </Link>
          
        </div>
        <div className="col-md-3 mb-3">
        <Link to="/admin-billings"  className="btn btn-success btn-block my-2 my-sm-0 mr-2">
        Billings
                </Link>
          
        </div>
        <div className="col-md-3 mb-3">
        <Link to="/admin-feedback-view"  className="btn btn-warning btn-block my-2 my-sm-0 mr-2">
        Feedbacks
                </Link>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminHome