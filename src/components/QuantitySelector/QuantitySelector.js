import React, { Fragment, useState } from "react";
import RoboFaceButton from "../RoboFaceButton";
import "./QuantitySelector.css";

const QuantitySelector = props => {    
    const onSelectMintQuantity = (quantity) => {
        props.setQuantity(quantity)
    }

    return (
      <div className="quantity-selector">
        quantity: { props.quantity }
        {
              Array.from(Array(3)).map( (x, i) => <RoboFaceButton key={ i } value={ i+1 } clickFn={ onSelectMintQuantity } className={ props.quantity >= i+1 ? 'highlight' : 'z' }></RoboFaceButton>)
        }

      </div>
    );
  };
  
  export default QuantitySelector;

  /*
        <RoboFaceButton value={ 1 } clickFn={ setMintQuantity } className="teste"></RoboFaceButton>
        <RoboFaceButton value={ 2 } clickFn={ setMintQuantity }></RoboFaceButton>
        <RoboFaceButton value={ 3 } clickFn={ setMintQuantity }></RoboFaceButton>
  */