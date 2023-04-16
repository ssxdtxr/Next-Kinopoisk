import React, {FC} from 'react';
import {Films} from "@/devPages/Films/Films";
import {http} from "@/http/http";
import {IFilm} from "@/types/IFilm";
import {Layout} from "@/components/layout/Layout";
export async function getServerSideProps() {
    const {data} = await http.get("/v2.2/films")
    return {props: {filmsData: data}}
}
interface IFilmsPages {
    filmsData: IFilm
}

const FilmsPage: FC<IFilmsPages> = ({filmsData}) => {
    return (
        <Layout>
            <Films filmsData={filmsData}/>
        </Layout>
    );
};

export default FilmsPage;