import React, { FC } from 'react';
import { IInfoIFilm } from '@/types/IInfoIFilm';
import { determinateFilmName } from '@/helpers/determinateFilmName';
import styles from './SearchDropDown.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { determinateRating } from '@/helpers/determinateHighRating';
import star from '../../../public/filmItem/star.svg';

interface ISearchDropDown {
  films: IInfoIFilm[];
  isOpen: boolean;
  value: string;
}

export const SearchDropDown: FC<ISearchDropDown> = ({ films, isOpen, value }) => {
  return (
    <AnimatePresence>
      {
        isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          className={styles.dropDown}
        >
          {
            films.slice(0, 5).map(film => (
              <Link key={film.nameEn} href={`/film/${film.kinopoiskId}`}>
                <div className={styles.item}>
                  <Image width={55} height={80} src={film.posterUrl} alt={determinateFilmName(film)} />
                  <div>
                    <div className={styles.title}>{determinateFilmName(film)}</div>
                    <div className={styles.rating}>
                      {determinateRating(film)}
                      <Image width={20} height={20} src={star} alt='star' />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
          <Link className={styles.all} href={`/search/${value}`}>Посмотреть все</Link>
        </motion.div>
      }
    </AnimatePresence>
  );
};

