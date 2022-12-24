import React, { useState } from 'react';
import {
  NavbarContainer,
  InnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  CartCounter,
  HamburgerButton,
  NavbarLinkExtended,
  OuterContainer,
  CartImageContainer,
  CartCounterContainer,
} from './styles/Navbar.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const items = useSelector((state) => state.cart);
  return (
    <NavbarContainer>
      <InnerContainer>
        <NavbarLinkContainer>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/cart">Cart </NavbarLink>
          <HamburgerButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </HamburgerButton>
        </NavbarLinkContainer>
        <CartCounterContainer>
          <CartCounter>{items.length}</CartCounter>
          <CartImageContainer></CartImageContainer>
        </CartCounterContainer>
      </InnerContainer>
      {extendNavbar && (
        <OuterContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/cart">Cart </NavbarLinkExtended>
        </OuterContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
