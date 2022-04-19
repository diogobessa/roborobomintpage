import React, { Fragment, useState } from "react";
import "./MintButton.css";

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";


const MintButton = props => {
    const [openToaster, setOpenToaster] = useState(false);
    const [loading, setLoading] = useState(false);
    const nftMakerBaseUrl = "https://payment.nft-maker.io/";
    const projectId = "ROBO1020ID";
    const wallet = "addr1q8ev22c7gehvarwp5yvd24ycefdweajefdx6zxqh0a4s3yyuhejpgz47vqm8xcsq527lds2vs5an5y0sa0yp4gxfu45qf055hp";


    const copyMintAddress = async () => {
        setLoading(true);
        await navigator.clipboard.writeText(wallet);
        setOpenToaster(true);
        setLoading(false);
        //window.open(`${nftMakerBaseUrl}?p=${projectId}&c=${props.quantity}`, "_blank")
    }


    const handleClose = () => {
        setOpenToaster(false);
    }

    return (
        <Fragment>
            <p className="mint-address">{wallet}</p>
            <div className="mint-button"> 
                <Button onClick={ copyMintAddress } variant="contained" disabled={loading}>{ loading ? 'a copiar...' : 'Copy Mint Address!' }</Button>
                <Snackbar open={openToaster} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose} message='Address copied to the clipboard!'><Alert severity="success">Address copied to the clipboard!</Alert></Snackbar>
            </div>  
        </Fragment>
    );
  };
  
  export default MintButton;

  /*
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
  */
  /*
  <button onClick={ openNftMakerPage }> Mint { props.quantity } ROBOROBO </button>
  */
 /*outlined */