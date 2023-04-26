import React, { FC } from 'react';
import { Film } from '@/devPages/Film/Film';
import { http } from '@/http/http';
import { IFilmData } from '@/types/IFIlmData';
import { IActorsData } from '@/types/IActorsData';
import { ITopFilms } from '@/types/ITopFilms';
import {IFacts} from "@/types/IFacts";

export async function getServerSideProps(context: any) {
  const { data: filmData } = await http.get(`/v2.2/films/${context.query.id}`);
  const { data: actorsData } = await http.get(`/v1/staff/`, { params: { filmId: context.query.id } });
  const {data: top} = await http.get("/v2.2/films/top")
  const {data: video} = await http.get(`/v2.2/films/${context.query.id}/videos`)
  const {data: facts} = await http.get(`/v2.2/films/${context.query.id}/facts`)
  return { props: { filmData, actorsData, top, video, facts} };
}

export interface IFilmPage {
  filmData: IFilmData;
  actorsData: IActorsData[];
  top: ITopFilms
  video: any
  facts: IFacts
}

const FilmPage: FC<IFilmPage> = ({ filmData, actorsData, top, video, facts }) => {
  return <Film filmData={filmData} actorsData={actorsData} top={top} video={video} facts={facts} />;
};
export default FilmPage;