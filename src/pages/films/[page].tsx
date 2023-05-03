import React, { FC } from 'react';
import { http } from '@/http/http';
import { Films } from '@/devPages/Films/Films';
import { IFilmsPages } from '@/pages/films';
import { SkeletonTheme } from 'react-loading-skeleton';

export async function getServerSideProps(context: any) {
  const { data: filmsData } = await http.get('/v2.2/films', { params: { page: context.query.page } });
  return { props: { filmsData } };
}

const FilmsPage: FC<IFilmsPages> = ({ filmsData }) => {
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <Films filmsData={filmsData} />
    </SkeletonTheme>
  );
};

export default FilmsPage;