import React from 'react'
import { ContainerStyled, TitleContainer } from './Hero.styled'
import titleImg from './titleblock.png' 

const Hero = () => {
  return (
    <ContainerStyled>
        <TitleContainer>
            <h1>Unlock your potential with the best <span>language</span> tutors</h1>
            <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
            <button>Get started</button>
        </TitleContainer>
        <img src={titleImg} alt="title Img"/>
    </ContainerStyled>
  )
}

export default Hero