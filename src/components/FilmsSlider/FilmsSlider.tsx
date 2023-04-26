import React, { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IFilm } from '@/types/IFilm';
import { FilmItem } from '@/components/FilmItem/FilmItem';

export interface IFilmsSlider {
  filmsData: IFilm;
}

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
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


export const FilmsSlider: FC<IFilmsSlider> = ({ filmsData }) => {
  console.log(filmsData);
  return (
    <Slider {...settings}>
      {
        filmsData.items.map(item => <FilmItem film={item} />)
      }
    </Slider>
  );
};