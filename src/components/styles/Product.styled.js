import styled from 'styled-components';

export const MainContainer = styled.section`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 30px;
  background: white;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  background: #764abc;
  padding: 5px 10px;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #513282;
  }
`;
export const ImageContainer = styled.img`
  height: 250px;
  width: 250px;
`;
export const Card = styled.div`
  background: white;
  margin: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 1px;
  cursor: pointer;
  &:hover {
    transition: transform 0.5s;
    transform: scale(1.1);
  }
`;
export const TextHeading = styled.div`
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`;
export const TextPrice = styled.div`
  font-size: 0.83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`;
export const TextContainer = styled.div`
  displau: flex;
  justify-content: flex-start;
`;
