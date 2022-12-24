import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
export const InnerContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1088px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TextHeading = styled.div`
font-size: 1em;
margin-top: 1.33em;
margin-bottom: 1.33em;
margin-left: 0;
margin-right: 0;
font-weight: bold;
  }
`;
export const TextPrice = styled.div`
  font-size: 0.83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`;
