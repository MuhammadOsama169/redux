import React from 'react';
import {
  MainContainer,
  InnerContainer,
  TextHeading,
  TextPrice,
} from '../components/styles/Home.styled';
import { Products } from '../components/Products';

export const HomePage = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Products />
      </InnerContainer>
    </MainContainer>
  );
};
