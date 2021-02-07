import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 32px 32px;
  padding-bottom: 86px;
  position: relative;
  width: 1288px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 18px 44px 44px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    justify-content: flex-end;
    flex-direction: row;
    padding-bottom: 104px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  margin-bottom: 40px;
  max-width: 100%;
  width: max-content;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 40px;
    line-height: 49px;
    margin-bottom: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 48px;
    line-height: 59px;
    margin-top: 80px;
    margin-right: 68px;
  }

  strong {
    color: ${({ theme }) => theme.colors.contrast};
    display: block;
    font-weight: bold;
  }
`;
