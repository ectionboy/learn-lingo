import styled from 'styled-components';

export const ContainerStyled = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 65px;
`;

export const StatisticsBoxStyled = styled.ul`
  display: flex;
  gap: 100px;
  border: 1.5px dashed #f4c550;
  border-radius: 30px;
  padding: 40px 100px;
`;

export const StatisticsItemStyled = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 36px;
`;

export const StatisticsNumberStyled = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  color: #121417;
  margin: 0;
`;

export const StatisticsTextStyled = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  margin: 0;
  width: 96px;
`;
export const StatisticsTextLastStyled = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  margin: 0;
  width: 74px;
`;
