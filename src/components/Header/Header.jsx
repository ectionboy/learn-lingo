import React from 'react';
import { Link } from 'react-router-dom';
import icons from 'icons.svg';
import { ContainerStyled } from './Header.styled';

const Header = () => {
  return (
    <header>
      <ContainerStyled>
        <div>
          <Link to="/">
            <svg width={"28px"} height={"28px"}>
              <use href={`${icons}#icon-ukraine`}></use>
            </svg>
            <span>LearnLingo</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/teachers">Teachers</Link>
            </li>

            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li><Link to="/"><svg width={"20px"} height={"20px"}>
              <use href={`${icons}#icon-log-in`}></use>
            </svg>Log in</Link></li>
            <li><Link to="/">Registration</Link></li>
          </ul>
        </div>
      </ContainerStyled>
    </header>
  );
};

export default Header;
