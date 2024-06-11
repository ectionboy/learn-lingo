import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 10px 75px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const AuthList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const LoginElement = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: #121417;
  }
`;

export const RegistrationElement = styled.li`
  a {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: #fff;
    border-radius: 12px;
    padding: 14px 40px;
    background-color: #121417;
  }
`;
