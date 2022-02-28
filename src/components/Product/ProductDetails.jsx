import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src={productDetails.picture} alt="" />
      </div>

      <div>
        <h2>name: {productDetails.name}</h2>
        <h3>type: {productDetails.type}</h3>
        <h4>price: {productDetails.price}</h4>
        <h5>description: {productDetails.description}</h5>
      </div>
    </div>
  );
};

export default ProductDetails;
