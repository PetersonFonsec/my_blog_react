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

const skills = [
  {
    src: reactIcon,
    alt: "React logo",
  },
  {
    src: angularIcon,
    alt: "Angular logo",
  },
  {
    src: vueIcon,
    alt: "vueIcon",
  },
  {
    src: typescriptIcon,
    alt: "Typescript logo",
  },
  {
    src: gitIcon,
    alt: "Git logo",
  },
  {
    src: webpackIcon,
    alt: "Webpack logo",
  },
  {
    src: sassIcon,
    alt: "Sass logo",
  },
  {
    src: jsIcon,
    alt: "Js logo",
  },
  {
    src: dockerIcon,
    alt: "Docker logo",
  },
  {
    src: gulpIcon,
    alt: "Gulp logo",
  },
  {
    src: htmlIcon,
    alt: "Html logo",
  },
  {
    src: cssIcon,
    alt: "Css logo",
  },
];

const breakpoints = {
  360: {
    slidesPerView: 3,
    slidesPerColumn: 2,
  },
  1024: {
    slidesPerView: 4,
    slidesPerColumn: 3,
    pagination: false,
  },
};

export default function SkillsCarousel() {
  return (
    <CarouselWrapper>
      <Swiper
        slidesPerView={2}
        slidesPerColumn={2}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
      >
        {skills.map((skill, i) => (
          <SwiperSlide key={i}>
            <CardLite {...skill} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
}
