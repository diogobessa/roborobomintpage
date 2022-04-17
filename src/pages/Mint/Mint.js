import React, { useState } from "react";
import { MintButton, QuantitySelector } from "../../components";
import "./Mint.css";

const Mint = () => {
    const [mintQuantity, setMintQuantity] = useState(1);

    return (
      <div className="mint-page-wrapper">
        <QuantitySelector quantity={ mintQuantity } setQuantity={ setMintQuantity }></QuantitySelector>
        <MintButton quantity={ mintQuantity }></MintButton>
      </div>
    );
  };
  
  export default Mint;
