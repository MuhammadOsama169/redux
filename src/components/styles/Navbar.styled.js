import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartImg from '../../assets/images/cart.png';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '50%' : '100px')};
  background-color: black;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 1086px) {
    display: none;
  }
`;

export const InnerContainer = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  @media all and (max-width: 1086px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const Logo = styled(Link)`
  max-width: 180px;
  height: 61px;
  cursor: pointer;
  @media all and (min-width: 1086px) {
    max-width: auto;
    margin-left: 0px;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1086px) {
    padding: 0px;
  }
`;

export const NavbarLink = styled(Link)`
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: white;
  color: #f5f5f5;
  text-decoration: none;

  &:hover {
    color: #ffcd3d;
  }
  @media all and (max-width: 1086px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 29px;
  color: white;
  text-decoration: none;
  padding-top: 20px;
  &:hover {
    color: #ffcd3d;
    transform: scale(0.98);
  }
`;

export const Button = styled.a`
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3d6fff;
  border-radius: 63px;
  font-family: 'Work Sans', sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  color: #ffcd3d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media all and (max-width: 1086px) {
    display: none;
  }
  &:hover {
    opacity: 0.9;
  }
`;

export const HamburgerButton = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  display: flex;
  @media all and (min-width: 1086px) {
    display: none;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  @media screen and (min-width: 1086px) {
    display: none;
    padding: 10px;
  }
`;

export const CartCounter = styled.div`
  display: flex;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background: red;
  border-radius: 50px;
  padding: 5px;
  &:hover {
    transition: transform 0.5s;
  }
`;
export const CartCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;
export const CartImageContainer = styled.div`
  background-image: url(${CartImg});
  background-size: 100%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
  @media all and (min-width: 1086px) {
    max-width: auto;
    margin-left: 0px;
  }
`;
