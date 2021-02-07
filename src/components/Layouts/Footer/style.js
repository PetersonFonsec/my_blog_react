import styled from "styled-components";

export const Footer = styled.footer`
  background: #f9f9f9;
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 600px;
  padding: 32px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #828ca3;
  border-top: #828ca3;

  @media (min-width: 768px) {
    padding: 60px;
  }

  hr {
    border-top: 1px solid #828ca3;
    width: 100%;
    margin: 24px 0;
  }
`;
