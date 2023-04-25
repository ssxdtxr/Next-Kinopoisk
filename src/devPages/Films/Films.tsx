import React, { FC } from 'react';
import { FilmItem } from '@/components/FilmItem/FilmItem';
import { IFilm } from '@/types/IFilm';
import styles from './Films.module.scss';
import { Container } from '@/components/container/Container';
import { Layout } from '@/components/layout/Layout';
import { Pagination } from '@/components/Pagination/Pagination';
import { ITopFilms } from '@/types/ITopFilms';

interface IFilms {
  filmsData: IFilm;
}

export const Films: FC<IFilms> = ({ filmsData }) => {
  return (
    <Layout
      description='Поиск фильмов и многое другое.'
      keywords='Топ 20 фильмов, Бестселлеры'
      title='NextKinopoisk'
    >
      <Container>
        <>
          <div className={styles.main}>
            <h2 className={styles.title}>Афиша кино</h2>

            <div className={styles.item}>
              {
                filmsData.items.map(item => <FilmItem key={item.kinopoiskId} film={item} />)
              }
            </div>
            <div className={styles.pagination}>
              <Pagination totalPages={filmsData.totalPages} link='/films' />
            </div>
          </div>
          <div className={styles.descr}>
            <div>
              <h1>ФИЛЬМЫ SSDTXR ОНЛАЙН</h1>
              <p>
                Насколько хороши новые кинофильмы от Нетфликс?
                Самое время узнать это, задержавшись на нашем сайте подольше.
                У нас вы можете смотреть онлайн любой приглянувшийся фильм без каких-либо ограничений.
                При этом вы можете рассчитывать на отсутствие назойливой рекламы и отличное качество картинки.
              </p>
            </div>
            <div>
              <h1>Любимое кино всегда с вами</h1>
              <p>
                Истинные киноманы готовы к просмотру фильмов везде: дома, по дороге на работу,
                в самолете или когда выдастся свободное время в офисе. Наш сервис предоставляет все условия для того,
                чтобы вы могли наслаждаться кино с любых устройств: ноутбука, планшета, SMART-TV или смартфона.
                Плееры работают бесперебойно и обеспечивают комфортный просмотр при любом разрешении.
              </p>
            </div>
          </div>
        </>
      </Container>
    </Layout>
  );
};
