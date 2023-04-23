import React, { FC } from 'react';
import { Home } from '@/devPages/Home/Home';
import { http } from '@/http/http';
import { IFilm } from '@/types/IFilm';

export async function getServerSideProps() {
  const { data: filmsData } = await http.get('/v2.2/films');
  return { props: { filmsData} };
}

export interface IHome {
  filmsData: IFilm;
}


const HomePage: FC<IHome> = ({ filmsData }) => {
  return <Home filmsData={filmsData} />;
};
export default HomePage;