import styled from 'styled-components';

export const MainContainer = styled.section`
  width: 100%;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;
export const InnerContainer = styled.section`
  margin: auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 3%;
  padding-bottom: 5%;

  @media screen and (max-width: 900px) {
    padding-top: 0.1%;
    padding-bottom: 0.1%;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const CardContainer = styled.div`
  margin: 20px;
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 25px 40px #1687d933;
`;
export const Card = styled.div`
  margin: auto;
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ImageConatiner = styled.img`
  width: 15%;
  height: 15%;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const TextHeading = styled.div`
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const TextPrice = styled.div`
  font-size: 1.3em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  display: flex;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: #aa336a;
  justify-content: center;
  align-items: center;
  text-align: center;
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
