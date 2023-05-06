import React, { FC } from 'react';
import { Container } from '@/components/container/Container';
import styles from '@/devPages/Search/Search.module.scss';
import { Pagination } from '@/components/Pagination/Pagination';
import { Layout } from '@/components/layout/Layout';
import { MSearchFilmItem } from '@/components/SearchFilmItem/SearchFilmItem';
import { ISearchPage } from '@/pages/search/[search]';

const searchVariants = {
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * .2,
    },
  }),
  hidden: {
    x: -100,
    opacity: 0,
  },
};

export const Search: FC<ISearchPage> = ({ filmsData, keyword }) => {
  return (
    <Layout
      description='Поиск фильмов и многое другое.'
      keywords='Топ 20 фильмов, Бестселлеры'
      title='NextKinopoisk'
    >
      <Container>
        <div className={styles.main}>
          <div className={styles.mainTop}>
            <h2 className={styles.title}>Результаты по запросу: <span>{keyword}</span></h2>
            <input placeholder='Поиск...' type='text' />
          </div>
          <div className={styles.item}>
            {
              filmsData.items.length ?
                filmsData.items.map((item, index) =>
                  <MSearchFilmItem
                    key={item.nameEn}
                    film={item}
                    variants={searchVariants}
                    initial={'hidden'}
                    custom={index + 1}
                    animate={'visible'}
                    whileTap={{ scale: .9, borderRadius: '10px', backgroundColor: '#fff' }}
                  />,
                ) :
                <div className={styles.notFound}>
                  <h1>По этому запросу ничего не найдено</h1>
                  <strong>Предлагаем Вам:</strong>
                  <ul>
                    <li>Убедись, что все слова написаны правильно.</li>
                    <li>Используйте синонимы</li>
                    <li>Попробуйте более общие ключевые слова.</li>
                  </ul>
                </div>
            }
          </div>
          {
            filmsData.items.length > 0 &&
            <div className={styles.pagination}>
              <Pagination totalPages={filmsData.totalPages} link={`/search/${keyword}`} />
            </div>
          }
        </div>
      </Container>
    </Layout>
  );
};
