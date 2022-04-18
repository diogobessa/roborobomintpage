import React, { Fragment, useState } from "react";
import { Header, MintButton, QuantitySelector } from "../../components";
import "./Mint.css";
 
const Mint = () => {
    const [mintQuantity, setMintQuantity] = useState(1);

    return (
        <Fragment>
            <Header></Header>
            <div className="mint-page-wrapper">
                <div className="card">
                    <QuantitySelector quantity={ mintQuantity } setQuantity={ setMintQuantity }></QuantitySelector>
                    <MintButton quantity={ mintQuantity }></MintButton>
                </div>
            </div>
            <footer>
                <p>aaa</p>
                <p>bbbb</p>
            </footer>
        </Fragment>
    );
  };
  
  export default Mint;
