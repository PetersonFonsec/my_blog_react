import styled from "styled-components";

export const CarouselWrapper = styled.ul`
  overflow: hidden;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin-left: unset;
  }

  .swiper-wrapper {
    height: 206px;

    @media (min-width: 768px) {
      height: 360px;
    }

    @media (min-width: 1024px) {
      height: 340px;
    }
  }

  .swiper-slide {
    height: max-content;

    @media (max-width: 1024px) {
      display: flex;
      justify-content: center;
    }
  }

  .swiper-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .swiper-pagination {
    margin-top: 20px;
    position: unset;
  }

  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background: #fff070;
    box-shadow: 0px 4px 4px rgba(255, 240, 112, 0.25);
    opacity: 1;
    transition: 0.2s ease-in-out all;
  }

  .swiper-pagination-bullet-active {
    width: 24px;
    height: 14px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgb(6 214 160 / 25%);
    border-radius: 14px;
  }
`;
