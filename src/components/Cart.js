import FormContext from './FormContext';
import React, {  useContext } from "react";
const Cart = () => {
    const { cartItems } = useContext(FormContext);
  
    return (
      <div>
        <h2>BILL DETAILS</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>Medicine Name: {item.medicineName}</p>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <p>Available Quantity: {item.quantity}</p>
           
          </div>
        ))}
        
      </div>
    );
  };
  export default Cart;