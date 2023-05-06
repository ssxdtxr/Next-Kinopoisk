import React, { FC } from 'react';
import styles from './SortSelects.module.scss';
import { SelectCountry } from '@/components/SortSelects/SelectCountry/SelectCountry';
import { IFilm } from '@/types/IFilm';
import { IInfoIFilm } from '@/types/IInfoIFilm';
import { SelectGenres } from '@/components/SortSelects/SelectGenres/SelectGenres';

interface ISortSelects {
  filmsData: IFilm;
  setFilms: (item: IInfoIFilm[]) => void;
}

export const SortSelects: FC<ISortSelects> = ({ filmsData, setFilms }) => {
  return (
    <div className={styles.sorts}>
      <SelectCountry filmsData={filmsData} setFilms={setFilms} />
      <SelectGenres filmsData={filmsData} setFilms={setFilms} />
    </div>
  );
};