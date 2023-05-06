import React, { FC } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/container/Container';
import { FilmsSlider } from '../../components/FilmsSlider/FilmsSlider';
import styles from './Home.module.scss';
import { FilmsHighRatingSlider } from '@/components/FilmsHighRatingSlider/FilmsHighRatingSlider';
import { IHome } from '@/pages';


export const Home: FC<IHome> = ({ filmsData, top }) => {
  return (
    <Layout
      description='Поиск фильмов и многое другое.'
      keywords='Топ 20 фильмов, Бестселлеры'
      title='NextKinopoisk'
    >
      <Container>
        <h1 className={styles.main}>SSXDTXR – фильмы SSXDTXR бесплатно</h1>
        <div className={styles.infoFilms}>
          <div className={styles.popular}>
            <h2>Популярные фильмы на сайте</h2>
            <FilmsHighRatingSlider top={top} />
          </div>
          <div className={styles.films}>
            <h2>Фильмы</h2>
            <FilmsSlider filmsData={filmsData} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

