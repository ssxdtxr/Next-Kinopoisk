import React, { FC } from 'react';
import { IActor } from '@/pages/actor/[id]';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/container/Container';
import Image from 'next/image';
import styles from './Actor.module.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export const Actor: FC<IActor> = ({ actorData }) => {
  return (
    <Layout
      title={actorData.nameEn ?? ''}
      keywords={actorData.nameEn ?? ''}
      description={actorData.nameEn ?? ''}
    >
      <Container>
        <div className={styles.actor}>
          <Image className={styles.img} width={350} height={500} src={actorData.posterUrl} alt='poster' />
          <div className={styles.info}>
            <h1>{actorData.nameEn}</h1>
            <div className={styles.nameRu}>{actorData.nameRu}</div>
            <h2>О персоне</h2>
            <div className={styles.about}>
              <h4>Карьера</h4>
              <div>{actorData.profession}</div>
              <h4>Дата рождения</h4>
              <div>{dayjs(actorData.birthday).locale('ru').format('DD MMMM YYYY')}, {actorData.age}</div>
              {
                actorData.age === 0 ?
                  <>
                    <h4>Рост:</h4>
                    <div>{actorData.growth}см</div>
                  </>
                  :
                  ""
              }
              <h4>Место рождения:</h4>
              <div>{actorData.birthplace}</div>
              <h4>Всего фильмов</h4>
              <div>
                {
                  actorData.films.length
                }
              </div>
            </div>
          </div>
          <div className={styles.films}>
            <h2>Лучшие фильмы</h2>
            {
              actorData.films.slice(0, 4).map(film => <div>{film.nameEn}</div>)
            }
          </div>
        </div>
      </Container>
    </Layout>
  );
};

