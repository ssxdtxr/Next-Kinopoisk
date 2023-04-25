import React, { FC } from 'react';
import { Film } from '@/devPages/Film/Film';
import { http } from '@/http/http';
import { IFilmData } from '@/types/IFIlmData';
import { IActorsData } from '@/types/IActorsData';
import { ITopFilms } from '@/types/ITopFilms';

export async function getServerSideProps(context: any) {
  const { data: filmData } = await http.get(`/v2.2/films/${context.query.id}`);
  const { data: actorsData } = await http.get(`/v1/staff/`, { params: { filmId: context.query.id } });
  const {data: top} = await http.get("/v2.2/films/top")
  // const {data: video} = await http.get(`/v2.2/films/`, {params: {id: context.query.id}}, 'video')
  return { props: { filmData, actorsData, top} };
}

export interface IFilmPage {
  filmData: IFilmData;
  actorsData: IActorsData[];
  top: ITopFilms
}

const FilmPage: FC<IFilmPage> = ({ filmData, actorsData, top }) => {
  return <Film filmData={filmData} actorsData={actorsData} top={top} />;
};
export default FilmPage;