import React, { useState, useEffect } from 'react';
import { getDatabase, ref as databaseRef, push,onValue } from 'firebase/database';
import { toast} from 'react-toastify';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';

const Billing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [allproducts, setallProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [billingSuccess, setBillingSuccess] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const db = getDatabase();

  useEffect(() => {
    // Load products from Firebase Realtime Database
    const productsRef = databaseRef(db, 'CafeApplication/products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
        setProducts(productsArray);
        setallProducts(productsArray)
      } else {
        setProducts([]);
        setallProducts([]);
      }
    });
  }, [db]);

  const handleProductSearch = () => {
    const filteredProducts = allproducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleAddToBill = (product) => {
    // Add the selected product to the bill
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
    // Update the total sum
    setTotalSum((prevTotal) => prevTotal + parseFloat(product.price));
  };

  const handleSaveBilling = async () => {
    // Save billing details to Firebase Realtime Database
    const billingRef = databaseRef(db, 'CafeApplication/billings');
    const newBilling = {
      products: selectedProducts,
      totalSum,
      customerName,
      customerNumber,
      timestamp: new Date().toISOString(),
    };
    await push(billingRef, newBilling);

    // Reset state after saving
    setBillingSuccess(true);
    setSearchQuery('');
    setProducts([]);
    setSelectedProducts([]);
    setTotalSum(0);
    setCustomerName('');
    setCustomerNumber('');
    toast.success('Bill generated successfully.', {
    position: 'top-right',
    autoClose: 3000, 
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
    setTimeout(() => {
      setBillingSuccess(false);
    }, 9000);
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <>
    <div class="alert alert-secondary"  role="alert">
    Billing Management
</div>
    <div className="container mt-5" style={{marginBottom:"33%"}}>
     
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="searchQuery">Search Product:</label>
            <input
              type="text"
              className="form-control"
              id="searchQuery"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleProductSearch}>
            Search
          </button>
          <ul className="list-group mt-3">
            {products.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {product.name} - ${product.price}
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={() => handleAddToBill(product)}
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
      <div className="alert alert-secondary" role="alert">
        <FaCalendarAlt /> {currentDateTime.toLocaleDateString()} <FaClock className='ml-2' /> {currentDateTime.toLocaleTimeString()}
        <br />
        Bill Details
      </div>
      
          <ul className="list-group">
            {selectedProducts.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {product.name} - {product.price}
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <strong>Total Sum: {totalSum.toFixed(2)}</strong>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="customerName">Customer Name:</label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="customerNumber">Customer Number:</label>
            <input
              type="text"
              className="form-control"
              id="customerNumber"
              value={customerNumber}
              onChange={(e) => setCustomerNumber(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-success" onClick={handleSaveBilling}>
          Save Billing
        </button>
  

          <button type="button" className="btn btn-primary ml-2" onClick={() => window.print()}>
          Print
        </button>
    
          {billingSuccess && (
            <div className="alert alert-success mt-3" role="alert">
              Billing saved successfully!
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Billing;
