import React, {FC} from 'react';
import {Layout} from "@/components/layout/Layout";
import {Container} from "@/components/container/Container";
import {FilmsSlider} from "../../components/FilmsSlider/FilmsSlider"
import styles from "./Home.module.scss"
import { IHome } from '@/pages';
import { FilmsHighRatingSlider } from '@/components/FilmsHighRatingSlider/FilmsHighRatingSlider';


export const Home: FC<IHome> = ({filmsData}) => {
    console.log(filmsData);
    return (
        <Layout
            description="Поиск фильмов и многое другое."
            keywords="Топ 20 фильмов, Бестселлеры"
            title="NextKinopoisk"
        >
            <Container>
                <h1 className={styles.main}>SSXDTXR – фильмы SSXDTXR бесплатно</h1>
                <div className={styles.infoFilms}>
                    <div className={styles.popular}>
                        <h2>С высоким ретингом</h2>
                        <FilmsHighRatingSlider filmsData={filmsData} />
                    </div>
                    <div className={styles.films}>
                        <h2>Фильмы</h2>
                        <FilmsSlider filmsData={filmsData} />
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

