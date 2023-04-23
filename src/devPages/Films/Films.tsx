import React, {FC} from 'react';
import {FilmItem} from "@/components/FilmItem/FilmItem";
import {IFilm} from "@/types/IFilm";
import styles from "./Films.module.scss"
import { Container } from '@/components/container/Container';
import { Layout } from '@/components/layout/Layout';
import { Pagination } from '@/components/Pagination/Pagination';
interface IFilms {
    filmsData: IFilm
}
export const Films: FC<IFilms> = ({filmsData}) => {
  console.log(filmsData);
    return (
      <Layout
        description="Поиск фильмов и многое другое."
        keywords="Топ 20 фильмов, Бестселлеры"
        title="NextKinopoisk"
      >
        <Container>

          <div className={styles.main}>
            <h2 className={styles.title}>Афиша кино</h2>

            <div className={styles.item}>
              {
                filmsData.items.map(item => <FilmItem key={item.kinopoiskId} film={item}/>)
              }
            </div>
          </div>
          <Pagination totalPages={filmsData.totalPages} link="/films"/>
        </Container>
      </Layout>
    );
};
