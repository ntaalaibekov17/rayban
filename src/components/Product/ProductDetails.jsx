import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import "./ProductDetails.css"
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Payment from "../Payment/Payment";
import {Link} from "react-router-dom"
import {red} from "@mui/material/colors";
const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
      <>
          <CssBaseline />
          <Container maxWidth="xl">
               <div style={{ display: 'flex', flexWrap:"wrap", marginTop:"123px", justifyContent:"center"}}>
                 <div>
                   <img src={productDetails.picture} alt=""/>
                 </div>
                 <div className="sprite">
                    <div className="border"></div>
                     <h4 className="details">DETAILS</h4>
                   <p>name: {productDetails.name}</p>
                   <p>type: {productDetails.type}</p>
                   <p>price: {productDetails.price} $</p>
                   <p>description:{productDetails.description}</p>
                     {/*<Link to="/payment" onClick={Button}>Buy Now</Link>*/}
                     <Link to="/payment"><Button sx = {{backgroundColor:"black", align:"center", paddingLeft:"50px", paddingRight:"50px", marginTop:"20px", color:"white"}}>Buy Now</Button> </Link>
                     {/*<Button className= "btttn"  sx = {{backgroundColor:"#ccd7db",marginTop:2, color:"white"}}>Buy Now</Button>*/}
                     <div className="border-bot"></div>
                 </div>
               </div>
          </Container>

      </>

  );
};

export default ProductDetails;
