import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 75px; /* others 30px 10px */
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 28px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #121417;
`;
