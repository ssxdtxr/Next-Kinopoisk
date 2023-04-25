import React, { FC } from 'react';
import { IFilmPage } from '@/pages/film/[id]';
import styles from './Film.module.scss';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/container/Container';
import Image from 'next/image';
import star from '../../../public/filmItem/star.svg';
import starEmpty from '../../../public/filmItem/star-empty.svg';
import { IActorsData } from '@/types/IActorsData';
import { determinateFilmName } from '@/helpers/determinateFilmName';
import { determinateRating } from '@/helpers/determinateHighRating';
import { ActorsSlider } from '@/components/ActorsSlider/ActorsSlider';
import { FilmsHighRatingSlider } from '@/components/FilmsHighRatingSlider/FilmsHighRatingSlider';

const determinateProfession = (actorsData: IActorsData[], profession: string) => {
  return actorsData.filter(actor => actor.professionText === profession);
};


export const Film: FC<IFilmPage> = ({ filmData, actorsData, top}) => {
  const mainName = determinateFilmName(filmData);
  const actors = determinateProfession(actorsData, 'Актеры');
  const filmDirector = determinateProfession(actorsData, 'Режиссеры');
  return (
    <Layout
      description={filmData.nameEn ?? '' }
      keywords={filmData.description ?? ''}
      title={determinateFilmName(filmData)}
    >
      <Container>
        <div className={styles.film}>
          <Image width={140} height={210} src={filmData.posterUrl} alt='poster' />
          <div className={styles.info}>
            <h1>{determinateFilmName(filmData)}</h1>
            <h2>{filmData.shortDescription}</h2>
            <div className={styles.infoNum}>
              <span className={styles.year}>{filmData.startYear ?? filmData.year}</span>
              <span>{filmData.countries.map(country => country.country)}</span>
              <span>{filmData.filmLength} Мин.</span>
              <span></span>
            </div>
            <div className={styles.rating}>
              <span className={styles.numbRate}>{determinateRating(filmData)}</span>
              {
                [...Array(10)].map((_, index) => index <= (Math.floor(determinateRating(filmData)) - 1) ?
                  <Image key={index} width={25} height={25} src={star} alt='star' />
                  :
                  <Image key={index} width={25} height={25} src={starEmpty} alt='starEmpty' />,
                )
              }
            </div>
            <div className={styles.genres}>
              {
                filmData.genres.map((genre, index) => index === 0 ?
                  <span className={styles.genre}>{genre.genre[0].toUpperCase() + genre.genre.substring(1)}</span> :
                  <span className={styles.genreNext}>{genre.genre[0].toUpperCase() + genre.genre.substring(1)}</span>,
                )}
            </div>
          </div>
        </div>
        <div className={styles.video}>
          video
        </div>
        <div className={styles.desctiption}>
          <h2>Описание фильма {determinateFilmName(filmData)}</h2>
          <div className={styles.descr}>
            {filmData.description}
          </div>
          {
            filmData.nameOriginal ?
              <div className={styles.infoOther}>
                <h4>Оригинальное название</h4>
                <span>{filmData.nameOriginal}</span>
              </div>
              :
              ''
          }
          <div className={styles.infoOther}>
            <h4>IMDb Рейтинг</h4>
            <div className={styles.rate}>
              <Image width={15} height={15} src={star} alt='star' />
              <span>{determinateRating(filmData)}</span>
            </div>

          </div>
          <div className={styles.infoOther}>
            <h4>IMDb Рейтинг</h4>
            <div className={styles.rate}>
              <Image width={15} height={15} src={star} alt='star' />
              <span>{filmData.ratingImdb}</span>
            </div>
          </div>
        </div>
        <div className={styles.actors}>
          <h2>Популярные Актеры фильма</h2>
          <ActorsSlider actorsData={actorsData} />
        </div>
        <div className={styles.recommend}>
          <h2>Советуем посмотреть</h2>
          <FilmsHighRatingSlider top={top} />
        </div>

      </Container>
    </Layout>
  );
};

