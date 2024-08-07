import React from 'react';
import {
  ContainerStyled,
  StatisticsBoxStyled,
  StatisticsItemStyled,
  StatisticsNumberStyled,
  StatisticsTextLastStyled,
  StatisticsTextStyled,
} from './Statistics.styled';

const Statistics = () => {
  return (
    <ContainerStyled>
      <StatisticsBoxStyled>
        <StatisticsItemStyled>
          <StatisticsNumberStyled>32,000 +</StatisticsNumberStyled>
          <StatisticsTextStyled>Experienced tutors</StatisticsTextStyled>
        </StatisticsItemStyled>
        <StatisticsItemStyled>
          <StatisticsNumberStyled>300,000 +</StatisticsNumberStyled>
          <StatisticsTextStyled>5-star tutor reviews</StatisticsTextStyled>
        </StatisticsItemStyled>
        <StatisticsItemStyled>
          <StatisticsNumberStyled>120 +</StatisticsNumberStyled>
          <StatisticsTextLastStyled>Subjects taught</StatisticsTextLastStyled>
        </StatisticsItemStyled>
        <StatisticsItemStyled>
          <StatisticsNumberStyled>200 +</StatisticsNumberStyled>
          <StatisticsTextLastStyled>
            Tutor nationalities
          </StatisticsTextLastStyled>
        </StatisticsItemStyled>
      </StatisticsBoxStyled>
    </ContainerStyled>
  );
};

export default Statistics;
