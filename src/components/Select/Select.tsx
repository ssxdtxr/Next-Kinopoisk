import React, { FC, useState } from 'react';
import styles from '././Select.module.scss';
import cn from 'classnames';
import { IFilm } from '@/types/IFilm';
import { IFilters } from '@/types/IFilters';
import { IInfoIFilm } from '@/types/IInfoIFilm';

interface ISelect {
  filmsData: IFilm;
  setFilms: (item: IInfoIFilm[]) => void;
}

export const Select: FC<ISelect> = ({ filmsData, setFilms }) => {
  // @ts-ignore
  const countries = [...new Set(filmsData.items.map(item => item.countries).flatMap(item => item.map(obj => obj.country)))];

  const [active, setActive] = useState<boolean>(false);
  const [country, setCountry] = useState<string>(countries[0]);

  const onActive = (): void => {
    setActive(!active);
  };

  const onCountry = (country: string): void => {
    const filterCountries = filmsData.items.filter(film => film.countries.map(item => item.country).join().includes(country));
    setCountry(country);
    setFilms(filterCountries);
    setActive(false);
  };

  return (
    <div className={styles.select}>
      <div onClick={onActive} className={styles.selectHeader}>
        <span className={styles.selectCurr}>{country}</span>
        <div className={styles.icon}>&times;</div>
      </div>
      <div className={cn(styles.selectBody, active && styles.active)}>
        {
          countries.map(item =>
            <>
              <div
                onClick={() => onCountry(item)}
                key={item.nameEn}
                className={styles.item}
              >
                {item}
              </div>
            </>,
          )
        }
      </div>
    </div>
  );
};

