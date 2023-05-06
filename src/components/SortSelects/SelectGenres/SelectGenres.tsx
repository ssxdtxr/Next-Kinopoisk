import React, { FC, useState } from 'react';
import styles from './SelectGenres.module.scss';
import cn from 'classnames';
import { IFilm } from '@/types/IFilm';
import { IInfoIFilm } from '@/types/IInfoIFilm';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface ISelect {
  filmsData: IFilm;
  setFilms: (item: IInfoIFilm[]) => void;
}

const activeVariants = {
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * .08,
    },
  }),
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 3,
    },
  },
};

export const SelectGenres: FC<ISelect> = ({ filmsData, setFilms }) => {
  const countr = useSelector((state: RootState) => state.filters.countries);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(axiosCountries());
  //   console.log();
  // }, [dispatch]);


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
    <AnimatePresence>
      <div className={styles.select}>
        <div onClick={onActive} className={cn(styles.selectHeader, active && styles.activeSelectHeader)}>
          <span className={styles.selectCurr}>{country}</span>
          {active &&
            <motion.div
              initial={'hidden'}
              animate={'visible'}
              variants={activeVariants}
              exit={{ opacity: 0, x: -100 }}
              className={cn(styles.selectBody, active && styles.active)}>
              {
                countries.map((item, index) =>
                  <>
                    <motion.div
                      initial={'hidden'}
                      animate={'visible'}
                      variants={activeVariants}
                      onClick={() => onCountry(item)}
                      key={item.nameEn}
                      className={styles.item}
                      custom={index + 1}
                    >
                      {item}
                    </motion.div>
                  </>,
                )
              }
            </motion.div>}
        </div>
      </div>
    </AnimatePresence>
  );
};

