import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from 'js-cookie';
import BackgroundC from './components/background';
import Footer from './components/Footer';
import AdminHome from './components/AdminHome';
import ProductManagement from './components/ProductManagement';
import Billing from './components/Billings';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CustomerHome from './components/CustomerHome';
import Menu from './components/Menu';

function App() {

  const [loggedStatus, setLoggedStatus] = useState(true);
  const [isAdmin,setisAdmin] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    let cookieValue = Cookies.get('userstatus');
    if(cookieValue){
      setLoggedStatus(true)
    }else{
      setLoggedStatus(false)
    }
    let currentAccountValue = Cookies.get('currentAccount');
    if(currentAccountValue === "9975777709"){
      setisAdmin(true)
    }else{
      setisAdmin(false)
    }
   console.log("isAdmin",isAdmin)
   console.log("currentAccount",currentAccount)
   console.log("loggedStatus",loggedStatus)
  },[currentAccount,loggedStatus]);
  
  return (
    <Router>
    <Navbar isAdmin={isAdmin} setisAdmin={setisAdmin} setLoggedStatus={setLoggedStatus} loggedStatus={loggedStatus} setCurrentAccount={setCurrentAccount} currentAccount={currentAccount}/>
    <Routes>
      {loggedStatus ? (
        <>
        {isAdmin ? <>
        <Route exact path="/" element={ <AdminHome></AdminHome>} />
        <Route exact path="/admin-products" element={ <ProductManagement></ProductManagement>} />
        <Route exact path="/admin-billings" element={<Billing></Billing>} />
        </>:
        <>
        <Route exact path="/" element={<CustomerHome></CustomerHome>} />
        <Route exact path="/customer-menu" element={<Menu></Menu>} />
        </>}
        <Route exact path="/" element={<BackgroundC></BackgroundC>} />
        </>
      ) : (
        <>
          <Route exact path="/" element={<BackgroundC></BackgroundC>} />
          <Route path="*" element={<BackgroundC></BackgroundC>} />
        </>
      )}
    </Routes>
    <Footer></Footer>
    <ToastContainer />
  </Router>
  );
}

export default App;
