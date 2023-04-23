import React, { FC } from 'react';
import Image from 'next/image';
import { IInfoIFilm } from '@/types/IInfoIFilm';
import styles from './FilmItem.module.scss';
import Link from 'next/link';
import star from '../../../public/filmItem/star.svg';
import { determinateRating } from '@/helpers/determinateHighRating';
import { determinateFilmName } from '@/helpers/determinateFilmName';

interface IFilmItem {
  film: IInfoIFilm;
}

export const FilmItem: FC<IFilmItem> = ({ film }) => {
  const filmName = determinateFilmName(film);
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Link key={film.nameEn} href={`/film/${film.kinopoiskId}`}>
          <Image layout='fill' src={film.posterUrl} alt={film.nameEn ?? ''} />
        </Link>
        <div className={styles.rating}>
          <Image width={13} height={13} src={star} alt='star' />
          <div>
            {determinateRating(film)}
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <svg
          width={25}
          height={25}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill="#888888"
        >
          <path
            d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z' />
        </svg>
        <div className={styles.descr}>
          <Link key={film.nameEn} href={`/film/${film.kinopoiskId}`}>
            <div className={styles.name}>{filmName}</div>
          </Link>
          <span className={styles.year}>{film.year}</span>
        </div>
      </div>
    </div>

  );
};
