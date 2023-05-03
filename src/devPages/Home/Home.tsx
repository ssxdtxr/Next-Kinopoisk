import React, { FC } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/container/Container';
import { FilmsSlider } from '../../components/FilmsSlider/FilmsSlider';
import styles from './Home.module.scss';
import { FilmsHighRatingSlider } from '@/components/FilmsHighRatingSlider/FilmsHighRatingSlider';
import { IHome } from '@/pages';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { changeYear } from '@/store/slices/filters.slice';


export const Home: FC<IHome> = ({ filmsData, top }) => {
  const year = useSelector((state: RootState) => state.filters.year);
  const dispatch = useDispatch();
  console.log(year);

  const clickHandler = () => {
    dispatch(changeYear('1990'));
  };
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
            <button onClick={clickHandler}>Меняем год</button>
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

