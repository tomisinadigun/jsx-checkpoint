import React from "react";
import productObj from "./Product";
import "../App.css"

const Price = () => {
    return (
        <>
            <p className="product-price">{productObj.price}</p>
        </>
    )
}

export default Price;