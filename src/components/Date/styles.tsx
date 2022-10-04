import styled from "styled-components";
import { COLORS, FONTS } from '../UI/variables';

export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  height: 169px;
  @media screen and (max-width: 769px), (max-height: 426px) {
    display: none;
  }
`

export const Time = styled.h1`
  color: ${COLORS.darkText};
  /* margin-bottom: -6.5%; */
  font-weight: ${FONTS.fontWeightBold};
  font-size: 9rem;

  height: 120px;
`

export const Date = styled.p`
  color: ${COLORS.darkText};

  height: 18px;

  font-size: 0.875rem;
  line-height: 18px;
`