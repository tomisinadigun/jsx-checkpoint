import React from "react";
import "../App.css"
import productObj from "./Product";

const Image = () => {
    return (
        <>
            <figure>
                <img src={productObj.image} alt="product image" className="card-img-top product-img" />
            </figure>
        </>
    )
}


export default Image;