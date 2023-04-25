import React, { FC } from 'react';
import { Home } from '@/devPages/Home/Home';
import { http } from '@/http/http';
import { IFilm } from '@/types/IFilm';
import { ITopFilms } from '@/types/ITopFilms';

export async function getServerSideProps() {
  const { data: filmsData } = await http.get('/v2.2/films');
  const {data: top} = await http.get("/v2.2/films/top")
  return { props: { filmsData, top } };
}

export interface IHome {
  filmsData: IFilm;
  top: ITopFilms
}


const HomePage: FC<IHome> = ({ filmsData, top }) => {
  return <Home filmsData={filmsData} top={top}/>;
};
export default HomePage;