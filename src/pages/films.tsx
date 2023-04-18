import React, {FC} from 'react';
import {Films} from "@/devPages/Films/Films";
import {http} from "@/http/http";
import {IFilm} from "@/types/IFilm";
import {Layout} from "@/components/layout/Layout";
import {Container} from "@/components/container/Container";
export async function getServerSideProps() {
    const {data} = await http.get("/v2.2/films")
    return {props: {filmsData: data}}
}
export interface IFilmsPages {
    filmsData: IFilm
}

const FilmsPage: FC<IFilmsPages> = ({filmsData}) => {
    return (
        <Layout
            description="Поиск фильмов и многое другое."
            keywords="Топ 250 фильмов, Бестселлеры"
            title="NextKinopoisk"
        >
            <Container>
                <Films filmsData={filmsData}/>
            </Container>
        </Layout>
    );
};

export default FilmsPage;