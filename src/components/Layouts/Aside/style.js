import styled from "styled-components";

export const Aside = styled.aside`
  width: 100vw;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: stretch;
    display: flex;
    height: 100%;
    left: 84px;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`;

export const AsideContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-bottom: 94px;
    height: inherit;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: inherit;
    position: relative;
  }
`;
