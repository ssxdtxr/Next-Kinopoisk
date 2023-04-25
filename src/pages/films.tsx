import React, {FC} from 'react';
import {Films} from "@/devPages/Films/Films";
import {http} from "@/http/http";
import {IFilm} from "@/types/IFilm";
export async function getServerSideProps() {
    const {data: filmsData} = await http.get("/v2.2/films")
    console.log(filmsData);
    return {props: {filmsData}}
}
export interface IFilmsPages {
    filmsData: IFilm
}

const FilmsPage: FC<IFilmsPages> = ({filmsData}) => {
    return (
      <Films filmsData={filmsData}/>
    );
};

export default FilmsPage;