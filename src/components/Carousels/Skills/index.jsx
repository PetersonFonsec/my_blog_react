import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import { CarouselWrapper } from "./style";
import CardLite from "../../Cards/CardLite";

import reactIcon from "../../../assets/icons/react.svg";
import angularIcon from "../../../assets/icons/angular.svg";
import vueIcon from "../../../assets/icons/vue.svg";
import sassIcon from "../../../assets/icons/sass.svg";
import jsIcon from "../../../assets/icons/js.svg";
import dockerIcon from "../../../assets/icons/docker.svg";
import gulpIcon from "../../../assets/icons/gulp.svg";
import gitIcon from "../../../assets/icons/git.svg";
import webpackIcon from "../../../assets/icons/webpack.svg";
import typescriptIcon from "../../../assets/icons/typescript.svg";
import cssIcon from "../../../assets/icons/css.svg";
import htmlIcon from "../../../assets/icons/html.svg";

SwiperCore.use([Pagination]);

const breakpoints = {
  375: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  768: {
    slidesPerView: 4,
    slidesPerColumn: 3,
    pagination: false,
    spaceBetween: 44,
  },
};

export default function SkillsCarousel() {
  return (
    <CarouselWrapper>
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={2}
        slidesPerColumn={2}
        spaceBetween={12}
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <CardLite src={reactIcon} alt="React logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={angularIcon} alt="Angular logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={vueIcon} alt="Vue logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={typescriptIcon} alt="Typescript logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={gitIcon} alt="Git logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={webpackIcon} alt="Webpack logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={sassIcon} alt="Sass logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={jsIcon} alt="Js logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={dockerIcon} alt="Docker logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={gulpIcon} alt="Gulp logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={htmlIcon} alt="Html logo" />
        </SwiperSlide>

        <SwiperSlide>
          <CardLite src={cssIcon} alt="Css logo" />
        </SwiperSlide>
      </Swiper>
    </CarouselWrapper>
  );
}
