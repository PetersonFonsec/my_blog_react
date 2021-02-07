import styled from "styled-components";

export const List = styled.ul`
  display: flex;

  li:not(:last-child) {
    margin-right: 14px;
  }
`;

export const Item = styled.li`
  a {
    width: 100%;
    height: 100%;
    align-content: center;
    display: flex;
    justify-content: center;
  }

  img {
    object-fit: contain;
    @media (min-width: 1240px) {
      height: 34px;
      width: 34px;
    }
  }
`;
