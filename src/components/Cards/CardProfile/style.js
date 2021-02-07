import styled from "styled-components";
import { Button } from "../../Button/style";

export const Card = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 330px;
    width: 100%;
  }

  @media (min-width: 1240px) {
    border-radius: 14px;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.25);
    left: 44px;
    position: absolute;
    padding: 32px;
    min-width: 385px;
    top: 100px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  display: block;
  height: 140px;
  margin-bottom: 28px;
  object-fit: cover;
  width: 140px;

  @media (min-width: 768px) {
    height: 320px;
    margin-bottom: 20px;
    width: 320px;
  }

  @media (min-width: 1240px) {
    height: 210.29px;
    margin-bottom: 40px;
    margin-top: -64px;
    width: 210.29px;
  }
`;

export const Description = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  margin-bottom: 35px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 73px;
  }

  @media (min-width: 1240px) {
    font-size: 18px;
    line-height: 29px;
    margin-bottom: 32px;
  }
`;

export const DownloadButton = styled(Button)`
  max-width: 140px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    max-width: 100%;
  }

  @media (min-width: 1240px) {
    font-size: 16px;
    line-height: 28px;
    max-width: 180px;
    padding: 12px;
  }
`;
