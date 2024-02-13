import React, { useState, useEffect } from 'react';
import { getDatabase, ref as databaseRef, onValue } from 'firebase/database';
import { FaStar } from 'react-icons/fa';


function CustomerOffers() {
  const [offers, setOffers] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    // Load offers from Firebase Realtime Database
    const offersRef = databaseRef(db, 'CafeApplication/products');
    onValue(offersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const offersArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
        setOffers(offersArray);
      } else {
        setOffers([]);
      }
    });
  }, [db]);

  return (
    <>
      <div className="container mt-5" style={{ marginBottom: '30%' }}>
        <div className="row">
          {offers.map((offer) => (
            <div key={offer.id} className="col-md-4 mb-3">
              <div className="card card-offer">
                <img src={offer.imageUrl} className="card-img-top" alt={offer.title} />
                <div className="card-body">
                  <h5 className="card-title">{offer.title}</h5>
                  <p className="card-text">{offer.description}</p>
                  <div className="rating">
                    {[...Array(offer.rating)].map((_, index) => (
                      <FaStar key={index} className="star" />
                    ))}
                  </div>
                  <p className="card-text text-success">Discount: {offer.discount} 10 %</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


export default CustomerOffers
