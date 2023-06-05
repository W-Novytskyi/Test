import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleHome = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #464040;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 70px;
`;

export const Card = styled.div`
  position: absolute;

  &:nth-of-type(1) {
    transform: rotate(-12deg);
    transform-origin: bottom left;
  }

  &:nth-of-type(2) {
    transform: rotate(-9deg);
    transform-origin: bottom left;
  }
  &:nth-of-type(3) {
    transform: rotate(-6deg);
    transform-origin: bottom left;
  }
  &:nth-of-type(4) {
    transform: rotate(-3deg);
    transform-origin: bottom left;
  }
`;
