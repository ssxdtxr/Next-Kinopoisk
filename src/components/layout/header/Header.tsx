import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import search from '../../../../public/search.png';
import { http } from '@/http/http';
import { IFilm } from '@/types/IFilm';
import { SearchDropDown } from '@/components/SearchDropDown/SearchDropDown';
import { IInfoIFilm } from '@/types/IInfoIFilm';
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/router';

const logo = <svg width={50} height={50} viewBox='0 -25.32 92.112 92.112' xmlns='http://www.w3.org/2000/svg'>
  <g id='_3d_movie_glasses' data-name='3d movie glasses' transform='translate(-457.485 -448.002)'>
    <path id='Path_34' data-name='Path 34'
          d='M509.62,480.829a8.654,8.654,0,0,0,8.651,8.643h22.688a8.648,8.648,0,0,0,8.638-8.643V458.946H527.663c-.04,0-.063,0-.124,0H457.485v21.884a8.655,8.655,0,0,0,8.643,8.645h22.7a8.608,8.608,0,0,0,7.486-4.4,8.519,8.519,0,0,0,1.158-4.241l-.013-5.717a4.338,4.338,0,0,1,4.325-4.323h3.536a4.336,4.336,0,0,1,4.323,4.323Zm35.659,0a4.333,4.333,0,0,1-4.32,4.322H518.271a4.333,4.333,0,0,1-4.325-4.322V467.594a4.337,4.337,0,0,1,4.325-4.325h22.688a4.337,4.337,0,0,1,4.32,4.325Z'
          fill='#f4f4f4' />
    <path id='Rectangle_16' data-name='Rectangle 16'
          d='M4.322,0H27.013a4.323,4.323,0,0,1,4.323,4.323V17.555a4.325,4.325,0,0,1-4.325,4.325H4.323A4.323,4.323,0,0,1,0,17.557V4.322A4.322,4.322,0,0,1,4.322,0Z'
          transform='translate(461.81 463.269)' fill='#27b7ff' />
    <path id='Rectangle_17' data-name='Rectangle 17'
          d='M4.325,0H27.008a4.325,4.325,0,0,1,4.325,4.325V17.558a4.322,4.322,0,0,1-4.322,4.322H4.32A4.32,4.32,0,0,1,0,17.56V4.325A4.325,4.325,0,0,1,4.325,0Z'
          transform='translate(513.946 463.269)' fill='#ff5245' />
    <path id='Path_35' data-name='Path 35'
          d='M482.023,458.963c1.1-.607,2.31-1.292,2.78-1.591.609-.389,1.107.751,1.381,1.591h4.231c-.815-2.183-1.949-5.279-2.886-7.955-1.655-4.719-5.5-2.47-5.5-2.47l-24.48,10.425Z'
          fill='#c9d1d1' />
    <path id='Path_36' data-name='Path 36'
          d='M525.112,458.963c-1.1-.607-2.3-1.292-2.775-1.591-.614-.389-1.109.751-1.385,1.591H516.72c.807-2.183,1.949-5.279,2.886-7.955,1.655-4.719,5.506-2.47,5.506-2.47l24.472,10.425Z'
          fill='#c9d1d1' />
  </g>
</svg>;

export const Header = () => {
  const router = useRouter();
  console.log(router);
  const [searchValue, setSearchValue] = useState<string>('');
  const [films, setFilms] = useState<IInfoIFilm[]>([]);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const debouncedSearchValue = useDebounce(searchValue);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const searchFilms = async () => {
    const { data } = await http.get<IFilm>('/v2.2/films', { params: { keyword: searchValue } });
    setFilms(data.items);
    setIsOpenDropDown(true);
  };

  useEffect(() => {
    if (debouncedSearchValue.length >= 2) {
      searchFilms();
    } else {
      setIsOpenDropDown(false);
    }
  }, [debouncedSearchValue]);


  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        {logo}
        <h1>ssxdtxr</h1>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navItem}>
          <Link href='/'>
            <li className={router.asPath == `/` ? styles.active : ''}>Home</li>
          </Link>
          <li>About</li>
          <Link href='/films/1'>
            <li className={router.asPath == `/films/${router.query.page}` ? styles.active : ''}>Films</li>
          </Link>
          <li>Contacts</li>
        </ul>
        <div className={styles.search}>
          <SearchDropDown films={films} isOpen={isOpenDropDown} value={debouncedSearchValue} />
          <input onChange={changeHandler} placeholder='Поиск' type='text' />
          <Image width={25} height={25} src={search} alt='search' />
        </div>
      </nav>
    </header>
  );
};

