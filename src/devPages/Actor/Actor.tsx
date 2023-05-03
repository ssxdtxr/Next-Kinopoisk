import React, { FC } from 'react';
import { IActor } from '@/pages/actor/[id]';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/container/Container';
import Image from 'next/image';
import styles from './Actor.module.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { motion } from 'framer-motion';

export const Actor: FC<IActor> = ({ actorData }) => {

  const infoVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
      x: 0,
    },
  };

  return (
    <Layout
      title={actorData.nameEn ?? ''}
      keywords={actorData.nameEn ?? ''}
      description={actorData.nameEn ?? ''}
    >
      <Container>
        <div className={styles.actor}>
          <Image className={styles.img} width={350} height={500} src={actorData.posterUrl} alt='poster' />
          <motion.div
            className={styles.info}
            initial={'hidden'}
            animate={'visible'}
            variants={infoVariants}
          >
            <div className={styles.name}>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2 } }}
              >
                {actorData.nameEn}
              </motion.h1>
              <div className={styles.nameRu}>{actorData.nameRu}</div>
            </div>
            <div className={styles.person}>
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
                    ''
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
                actorData.films.slice(0, 4).map(film => <div key={film.filmId}>{film.nameEn}</div>)
              }
            </div>
          </motion.div>
        </div>
      </Container>
    </Layout>
  );
};

