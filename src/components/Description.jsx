import React from "react";
import productObj from "./Product";
import "../App.css"

const Description = () => {
    return (
        <>
            <p className="descript">{productObj.description}</p>
        </>
    )
}


export default Description;