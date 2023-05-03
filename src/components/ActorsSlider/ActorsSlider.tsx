import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FC } from 'react';
import { IActorsData } from '@/types/IActorsData';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ActorsSlider.module.scss';
import next from '../../../public/arrow-right.svg';
import prev from '../../../public/arrow-left.svg';

export interface IActorSlider {
  actorsData: IActorsData[];
}

function ActorNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.next} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
           fill="currentColor" className="bi bi-caret-right"
           viewBox="0 0 16 16">
        <path
            d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
      </svg>
    </div>
  );
}

function ActorPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.prev} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
           fill="currentColor" className="bi bi-caret-left"
           viewBox="0 0 16 16">
        <path
            d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
      </svg>
    </div>
  );
}

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <ActorNextArrow />,
  prevArrow: <ActorPrevArrow />,
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
export const ActorsSlider: FC<IActorSlider> = ({ actorsData }) => {
  console.log(actorsData)
  return (
    <Slider {...settings}>
      {
        actorsData.map(actor => actor.nameEn || actor.nameRu ? (
            <div className={styles.actorItem}>
              <Link key={actor.nameEn} href={`/actor/${actor.staffId}`}>
                <div className={styles.img}>
                  <Image className={styles.imgСhange} width={200} height={200} src={actor.posterUrl} alt={actor.nameEn || ''} />
                </div>
                <div className={styles.name}>{actor.nameEn}</div>
                <div className={styles.profession}>{actor.professionText.slice(0, -1)}</div>
              </Link>

            </div>
          )
          : '')
      }
    </Slider>
  );
};