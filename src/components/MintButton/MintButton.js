import React, { Fragment } from "react";
import "./MintButton.css";

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MintButton = props => {
    const nftMakerBaseUrl = "https://payment.nft-maker.io/";
    const projectId = "ROBO1020ID";

    const openNftMakerPage = () => {
        window.open(`${nftMakerBaseUrl}?p=${projectId}&c=${props.quantity}`, "_blank")
    }

    

    const handleChange = (event: SelectChangeEvent) => {
      props.changeMintQuantity(event.target.value);
    };

    return (
    <Fragment>
        <div className="quantity-price"> 
            <FormControl fullWidth>
                <InputLabel id="select-quantity">Quantity</InputLabel>
                <Select
                    labelId="select-quantity"
                    id="select-quantity"
                    value={ props.quantity }
                    label="Quantity"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>
            </FormControl>
            <p>
                {50*props.quantity} ADA
            </p>
        </div>
        <div className="mint-button"> 
            <Button onClick={ openNftMakerPage } variant="contained">Mint!</Button>
        </div>
    </Fragment>
    );
  };
  
  export default MintButton;

  /*
  <button onClick={ openNftMakerPage }> Mint { props.quantity } ROBOROBO </button>
  */
 /*outlined */