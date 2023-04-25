import React, { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FilmItem } from '@/components/FilmItem/FilmItem';
import { ITopFilms } from '@/types/ITopFilms';


export interface IFilmsSlider {
  top: ITopFilms;
}

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  // nextArrow: <ActorNextArrow />,
  // prevArrow: <ActorPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


export const FilmsHighRatingSlider: FC<IFilmsSlider> = ({ top }) => {
  console.log(top);
  return (
    <Slider {...settings}>
      {
        top.films.map(item => <FilmItem film={item} />)
      }
    </Slider>
  );
};