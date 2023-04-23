import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FC } from 'react';
import { IActorsData } from '@/types/IActorsData';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ActorsSlider.module.scss';
import next from "../../../public/arrow-right.svg"
import prev from "../../../public/arrow-left.svg"

export interface IActorSlider {
  actorsData: IActorsData[]
}

function ActorNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.next} onClick={onClick} >
      <Image width={50} height={50} src={next} alt="next" />
    </div>
  );
}

function ActorPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.prev} onClick={onClick} >
      <Image width={50} height={50} src={prev} alt="prev" />
    </div>
  );
}

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
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
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
export const ActorsSlider: FC<IActorSlider> = ({ actorsData }) => {
  return (
    <Slider {...settings}>
      {
        actorsData.slice(0, 19).map(actor => (
          <Link key={actor.nameEn} href={`/actor/${actor.staffId}`}>
            <div className={styles.actorItem}>
              <div className={styles.actorImg}>
                <Image layout='fill' src={actor.posterUrl} alt={actor.nameEn || ''} />
              </div>
              <div className={styles.name}>{actor.nameEn}</div>
            </div>
          </Link>
        ))
      }
    </Slider>
  );
};