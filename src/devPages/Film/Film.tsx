import React, {FC} from 'react';
import {IFilmPage} from "@/pages/films/[id]";
import styles from "./Film.module.scss"
import {Layout} from "@/components/layout/Layout";
import {Container} from "@/components/container/Container";
import Image from "next/image";

const determinateFilmName = (film: any): string => {
    if (film.nameOriginal) {
        return film.nameOriginal
    }
    if (film.nameRu) {
        return film.nameOriginal
    }
    return film.nameEn
}


export const Film: FC<IFilmPage> = ({filmData, actorsData}) => {
    console.log(filmData, actorsData)
    console.log(filmData.filmLength)
    console.log(filmData.description)
    const mainName = determinateFilmName(filmData)
    return (
        <Layout
            description="Поиск фильмов и многое другое."
            keywords="Топ 250 фильмов, Бестселлеры"
            title="NextKinopoisk"
        >
            <Container>
                <div className={styles.wrapper}>
                    <Image className={styles.poster} width={280} height={420} src={filmData.posterUrl} alt="posterUrl" />
                    <div className={styles.info}>
                        <h1 className={styles.title}>{mainName}</h1>
                        <div className={styles.infoH}>
                            {
                                filmData.countries.map(country => country.country).join(", ")

                            },
                            {
                                `${filmData.filmLength} минут`
                            }
                            <div className={styles.genres}>
                                {
                                    filmData.genres.map(item => item.genre).join(", ")
                                }
                            </div>
                        </div>
                        <div className={styles.mainInfo}>
                            <h4>Старт проката:</h4>
                            <div>{filmData.startYear ? filmData.startYear : "??"}</div>
                            <h4>Режиссер:</h4>
                            <div>{actorsData.filter(actor => actor.professionText === "Режиссеры").map(item => item.nameEn).join(", ")}</div>
                            <h4>В главных ролях:</h4>
                            <div>{actorsData.filter(actor => actor.professionText === "Актеры").map(item => item.nameEn).join(", ")}</div>
                        </div>
                        <div className={styles.descr}>
                            {
                                filmData.description
                            }
                        </div>

                    </div>
                </div>
            </Container>
        </Layout>
    );
};

