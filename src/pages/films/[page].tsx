import React, { FC } from 'react';
import {http} from "@/http/http";
import { Films } from '@/devPages/Films/Films';
import { IFilmsPages } from '@/pages/films';

export async function getServerSideProps(context: any) {
  const {data: filmsData} = await http.get("/v2.2/films",{params: {page: context.query.page}})
  return {props: {filmsData}}
}
const FilmsPage: FC<IFilmsPages> = ({filmsData}) => {
  return (
    <Films filmsData={filmsData}/>
  );
};

export default FilmsPage;