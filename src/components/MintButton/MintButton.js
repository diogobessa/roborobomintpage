import React, { Fragment, useState } from "react";
import "./MintButton.css";

const MintButton = props => {

    const openNftMakerPage = () => {
        window.open("https://google.com/", "_blank")
    }

    return (
      <div className="mint-button">
          <button onClick={ openNftMakerPage }> bt </button>

            mint button { props.quantity }
      </div>
    );
  };
  
  export default MintButton;
