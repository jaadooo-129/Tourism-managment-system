import React from 'react';
import { Link } from 'react-router-dom';

const Destination = ({ src, title, type, location, features, price }) => (
  <div className="pack">
    <video src={src} autoPlay muted loop alt={title} />
    <div className="pack2">
      <h2>{title}</h2>
      <p>Package type: {type}</p>
      <p>Package Location: {location}</p>
      <p>Features {features}</p>
    </div>
    <div className="book">
      <p>Rs. {price}</p>
      <Link to="/contact">
        <button>Book Now</button>
      </Link>
    </div>
  </div>
);

export default Destination;
