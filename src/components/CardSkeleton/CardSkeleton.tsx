import React, { FC } from 'react';
import styles from '@/components/FilmItem/FilmItem.module.scss';
import Skeleton from 'react-loading-skeleton';

interface ICardSkeleton {
  cards: number;
}

export const CardSkeleton: FC<ICardSkeleton> = ({ cards }) => {
  return (
    <>
      {
        [...new Array(cards)].map((_, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.img}>
              <Skeleton width={193} height={273} />
              <Skeleton width={13} height={13} />
            </div>
            <div className={styles.info}>
              <Skeleton width={35} height={35} />
              <div className={styles.descr}>
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </div>
        ))
      }
    </>

  );
};

