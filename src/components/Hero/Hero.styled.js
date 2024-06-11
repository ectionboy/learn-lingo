import styled from 'styled-components';

export const ContainerStyled = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 65px;
  img {
    max-width: 568px;
    max-height: 530px;
  }
`;

export const TitleContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  max-height: 530px;
  border-radius: 30px;
  padding: 94px 64px;
  background-color: #f8f8f8;

  h1 {
    font-weight: 500;
    font-size: 48px;
    line-height: 1.3;
    color: #121417;
    max-width: 560px;
    margin: 0;
    margin-bottom: 30px;
  }
  h1 span {
    font-style: italic;
    font-weight: 400;
    background-color: #fbe9ba;
    border-radius: 8px;
    padding: 0 4px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.375;
    letter-spacing: -0.02em;
    color: #121417;
    max-width: 470px;
    margin: 0;
    margin-bottom: 60px;
  }
  button {
    border-radius: 12px;
    padding: 16px 88px;
    max-width: 267px;
    background-color: #f4c550;
    border: none;
    font-family: inherit;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.55;
    color: #121417;
  }
  button:hover,
  button:active {
    background-color: #ffdc86;
    color: #121417;
  }
`;
