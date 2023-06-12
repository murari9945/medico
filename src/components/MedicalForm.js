import React, {  useContext } from "react";

import FormContext from "./FormContext";
import './MedicalForm.css'
const MedicalForm=()=>{
    const {
        medicineName,
        setMedicineName,
        description,
        setDescription,
        price,
        setPrice,
        quantity,
        setQuantity,
        handleAddToCart,
        handleQuantityChange
      } = useContext(FormContext);
    return(
        <div className="card">
            <div>
                <label>MedicineName</label>
                <input type="text"  value={medicineName} onChange={(event) => setMedicineName(event.target.value)}
                ></input>
                
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description}
          onChange={(event) => setDescription(event.target.value)}></input>
            </div>
            <div>
                <label>price</label>
                <input type="text" value={price}
          onChange={(event) => setPrice(event.target.value)}></input>
            </div>
            <div>
                <label>Available Quantity</label>
                <input type="text"  value={quantity}
                onChange={(event) => setQuantity(event.target.value)}></input>
            </div>
            <div>
                <button onClick={handleAddToCart}>ADD PRODUCT</button>
            </div>
        </div>
    )

}
export default MedicalForm;