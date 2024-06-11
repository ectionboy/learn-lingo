import React from 'react';
import { Link } from 'react-router-dom';
import icons from 'icons.svg';
import { AuthList, ContainerStyled, LoginElement, LogoContainer, NavList, RegistrationElement } from './Header.styled';

const Header = () => {
  return (
    <header>
      <ContainerStyled>
        <Link to="/">
          <LogoContainer>
            <svg width={'28px'} height={'28px'}>
              <use href={`${icons}#icon-ukraine`}></use>
            </svg>
            LearnLingo
          </LogoContainer>
        </Link>

        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/teachers">Teachers</Link>
            </li>

            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </NavList>
        </nav>
        <div>
          <AuthList>
            <LoginElement>
              <Link to="/">
                <svg width={'20px'} height={'20px'}>
                  <use href={`${icons}#icon-log-in`}></use>
                </svg>
                Log in
              </Link>
            </LoginElement>
            <RegistrationElement>
              <Link to="/">Registration</Link>
            </RegistrationElement>
          </AuthList>
        </div>
      </ContainerStyled>
    </header>
  );
};

export default Header;
