import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from 'js-cookie';
import BackgroundC from './components/background';
import Footer from './components/Footer';

function App() {

  const [loggedStatus, setLoggedStatus] = useState(true);
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    let cookieValue = Cookies.get('userstatus');
    if(cookieValue){
      setLoggedStatus(true)
    }else{
      setLoggedStatus(false)
    }
   
  });
  
  return (
    <Router>
    <Navbar setLoggedStatus={setLoggedStatus} loggedStatus={loggedStatus} setCurrentAccount={setCurrentAccount} />
    <Routes>
      {loggedStatus ? (
        <>
       
        </>
      ) : (
        <>
          <Route exact path="/" element={<BackgroundC></BackgroundC>} />
          <Route path="*" element={<BackgroundC></BackgroundC>} />
        </>
      )}
    </Routes>
    <Footer></Footer>
  </Router>
  );
}

export default App;
