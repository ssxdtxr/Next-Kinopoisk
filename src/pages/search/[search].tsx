import React, { FC } from 'react';
import { http } from '@/http/http';
import { IFilm } from '@/types/IFilm';
import { Search } from '@/devPages/Search/Search';

export async function getServerSideProps(context: any) {
  const { data } = await http.get<IFilm>('/v2.2/films', { params: { keyword: context.query.search } });
  return { props: { filmsData: data, keyword: context.query.search } };
}

export interface ISearchPage {
  filmsData: IFilm;
  keyword: string;
}

const SearchPage: FC<ISearchPage> = ({ filmsData, keyword }) => {
  return (
    <Search filmsData={filmsData} keyword={keyword} />
  );
};

export default SearchPage;