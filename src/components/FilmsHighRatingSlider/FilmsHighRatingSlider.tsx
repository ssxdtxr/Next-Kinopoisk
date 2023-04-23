import React, { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IFilm } from '@/types/IFilm';
import { determinateRating } from '@/helpers/determinateHighRating';
import { FilmItem } from '@/components/FilmItem/FilmItem';

export interface IFilmsSlider {
  filmsData: IFilm;
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


export const FilmsHighRatingSlider: FC<IFilmsSlider> = ({ filmsData }) => {
  return (
    <Slider {...settings}>
      {
        filmsData.items.filter(item => determinateRating(item) > 8).map(item => <FilmItem film={item} />)
      }
    </Slider>
  );

};