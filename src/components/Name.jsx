import React from "react";
import productObj from "./Product";
import "../App.css"

const Name = () => {

    return (
        <>
            <p className="card-title">{productObj.name}</p>
        </>
    )
}

export default Name;