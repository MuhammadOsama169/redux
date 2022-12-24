import React, { useState, useEffect } from 'react';
import {
  MainContainer,
  ProductWrapper,
  ImageContainer,
  TextContainer,
  TextPrice,
  TextHeading,
  Card,
} from './styles/Product.styled';
import { ProgressBar } from 'loading-animations-react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import { fetchProducts } from '../store/ProductSlice';
import { STATUSES } from '../store/ProductSlice';

export const Products = () => {
  // const [products, setProducts] = useState([]);

  const { data: products, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <ProgressBar />;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong, Please refresh the page!...</h2>;
  }

  return (
    <MainContainer>
      <ProductWrapper>
        {products.map((product) => (
          <Card key={product.id}>
            <ImageContainer
              src={product.image}
              alt=""
              onClick={() => {
                handleAdd(product);
              }}
            />
            <TextContainer>
              <TextHeading> {product.title}</TextHeading>
              <TextPrice> ${product.price}</TextPrice>
            </TextContainer>
          </Card>
        ))}
      </ProductWrapper>
    </MainContainer>
  );
};
