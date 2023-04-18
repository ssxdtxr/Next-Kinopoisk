import React, {FC} from 'react';
import {FilmItem} from "@/components/FilmItem/FilmItem";
import {IFilm} from "@/types/IFilm";
import styles from "./Films.module.scss"
interface IFilms {
    filmsData: IFilm
}
export const Films: FC<IFilms> = ({filmsData}) => {
    return (
        <>
            <h2 className={styles.title}>Афиша кино</h2>
            <div className={styles.item}>
                {
                    filmsData.items.map(item => <FilmItem key={item.kinopoiskId} film={item}/>)
                }
            </div>
        </>

    );
};
