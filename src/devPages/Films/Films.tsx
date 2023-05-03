import React, { FC, useState } from 'react';
import { MFilmItem } from '@/components/FilmItem/FilmItem';
import { IFilm } from '@/types/IFilm';
import styles from './Films.module.scss';
import { Container } from '@/components/container/Container';
import { Layout } from '@/components/layout/Layout';
import { Pagination } from '@/components/Pagination/Pagination';
import { Select } from '@/components/Select/Select';
import { IInfoIFilm } from '@/types/IInfoIFilm';
import { motion } from 'framer-motion';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';

interface IFilms {
  filmsData: IFilm;
}

export const Films: FC<IFilms> = ({ filmsData }) => {
  const [films, setFilms] = useState<IInfoIFilm[]>(filmsData.items);

  const textVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.3,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
    },
  };

  const filmVariants = {
    hidden: {
      opacity: 0,
      rotateX: 180,

    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: custom * .15,
      },
      rotateX: 0,
    }),
  };
  return (
    <Layout
      description='Поиск фильмов и многое другое.'
      keywords='Топ 20 фильмов, Бестселлеры'
      title='Films'
    >
      <Container>
        <div className={styles.main}>
          <div className={styles.mainTop}>
            <motion.h2
              initial='hidden'
              className={styles.title}
              variants={textVariants}
              animate='visible'
            >
              Афиша кино
            </motion.h2>
            <Select filmsData={filmsData} setFilms={setFilms} />
          </div>
          <div className={styles.item}>
            {
              !films.length && <CardSkeleton cards={10} />
            }
            {
              films.map((item, index) =>
                <MFilmItem
                  key={item.kinopoiskId}
                  film={item}
                  variants={filmVariants}
                  initial={'hidden'}
                  animate={'visible'}
                  custom={index + 1}
                />)
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
              Насколько хороши новые кинофильмы от SSDTXR?
              Самое время узнать это, задержавшись на нашем сайте подольше.
              У нас вы можете смотреть онлайн любой приглянувшийся фильм без каких-либо ограничений.
              При этом вы можете рассчитывать на отсутствие назойливой рекламы и отличное качество
              картинки.
            </p>
          </div>
          <div>
            <h1>Любимое кино всегда с вами</h1>
            <p>
              Истинные киноманы готовы к просмотру фильмов везде: дома, по дороге на работу,
              в самолете или когда выдастся свободное время в офисе. Наш сервис предоставляет все условия
              для того,
              чтобы вы могли наслаждаться кино с любых устройств: ноутбука, планшета, SMART-TV или
              смартфона.
              Плееры работают бесперебойно и обеспечивают комфортный просмотр при любом разрешении.
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
