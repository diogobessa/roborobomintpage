import React from "react";
import "./MintButton.css";

const MintButton = props => {
    const nftMakerBaseUrl = "https://payment.nft-maker.io/";
    const projectId = "ROBO1020ID";

    const openNftMakerPage = () => {
        window.open(`${nftMakerBaseUrl}?p=${projectId}&c=${props.quantity}`, "_blank")
    }

    return (
      <div className="mint-button">
          <button onClick={ openNftMakerPage }> Mint { props.quantity } ROBOROBO </button>
      </div>
    );
  };
  
  export default MintButton;
