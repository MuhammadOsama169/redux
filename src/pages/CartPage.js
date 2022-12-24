import React from 'react';
import {
  MainContainer,
  InnerContainer,
  Card,
  TextPrice,
  TextHeading,
  ImageConatiner,
  CardContainer,
  Button,
} from '../components/styles/CartPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/CartSlice';

export const CartPage = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(remove(product));
  };
  return (
    <MainContainer>
      <InnerContainer>
        <TextHeading>Cart</TextHeading>
        <Card>
          {products.map((product) => (
            <CardContainer>
              <ImageConatiner src={product.image} alt="" />
              <TextHeading>{product.title}</TextHeading>
              <TextPrice>{product.price}</TextPrice>
              <Button onClick={() => handleRemove(product.id)}>
                Remove Item
              </Button>
            </CardContainer>
          ))}
        </Card>
      </InnerContainer>
    </MainContainer>
  );
};
