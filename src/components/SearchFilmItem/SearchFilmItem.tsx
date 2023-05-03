import React, { FC, forwardRef } from 'react';
import { IInfoIFilm } from '@/types/IInfoIFilm';
import Image from 'next/image';
import styles from './SearchFilmItem.module.scss';
import { determinateFilmName } from '@/helpers/determinateFilmName';
import { determinateRating } from '@/helpers/determinateHighRating';
import Link from 'next/link';
import star from '../../../public/filmItem/star.svg';
import { motion } from 'framer-motion';

interface ISearchFilmItem {
  film: IInfoIFilm;
}

// eslint-disable-next-line react/display-name
export const SearchFilmItem: FC<ISearchFilmItem> = forwardRef(({ film }, ref) => {
  return (
    <Link href={`/films/${film.kinopoiskId}`}>
      <div className={styles.article} ref={ref}>
        <Image width={150} height={150} src={film.posterUrl} alt={determinateFilmName(film)} />
        <div className={styles.details}>
          <div className={styles.meta}>
            <div className={styles.title}>{determinateFilmName(film)}</div>
            {
              film.countries.map((item, index) => <span key={index}>{item.country}</span>)
            }
            <div>
            <span>
              {determinateRating(film)}
              <Image width={20} height={20} src={star} alt='star' />
            </span>
              <span className={styles.info}>{film.year}</span>
            </div>
          </div>
          <div className={styles.genres}>
            {
              film.genres.map(genre => <div
                  key={genre.genre}
                  className={styles.genre}
                >
                  {genre.genre[0].toUpperCase() + genre.genre.slice(1)}
                </div>,
              )
            }
          </div>
        </div>
      </div>
    </Link>
  );
});

export const MSearchFilmItem = motion(SearchFilmItem);
