import React, { useState, createContext, useContext } from "react";
import FormContext from "./FormContext";


// Form provider component to manage the form state
const FormProvider = ({ children }) => {
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    const newItem = {
      medicineName,
      description,
      price,
      quantity
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    resetForm();
  };

  const resetForm = () => {
    setMedicineName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  const handleQuantityChange = (index, event) => {
    const updatedCartItems = [...cartItems];
    const selectedQuantity = event.target.value;
    const availableQuantity = updatedCartItems[index].availableQuantity;
  
    // Check if the selected quantity is valid (less than or equal to the available quantity)
    if (selectedQuantity <= availableQuantity) {
      updatedCartItems[index].quantity = selectedQuantity;
      updatedCartItems[index].availableQuantity = availableQuantity - selectedQuantity;
      setCartItems(updatedCartItems);
    }
  };
  

  const formState = {
    medicineName,
    setMedicineName,
    description,
    setDescription,
    price,
    setPrice,
    quantity,
    setQuantity,
    handleAddToCart,
    handleQuantityChange,
    cartItems
  };

  return (
    <FormContext.Provider value={formState}>{children}</FormContext.Provider>
  );
};
export default FormProvider;