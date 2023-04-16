import React, {FC} from 'react';
import Image from "next/image";
import {IInfoIFilm} from "@/types/IInfoIFilm";
import styles from "./FilmItem.module.scss"
import Link from "next/link";

interface IFilmItem {
    film: IInfoIFilm
}

const determinateFilmName = (film: any): string => {
    if (film.nameOriginal) {
        return film.nameOriginal
    }
    if (film.nameRu) {
        return film.nameOriginal
    }
    return film.nameEn
}

export const FilmItem: FC<IFilmItem> = ({film}) => {
    const filmName = determinateFilmName(film)
    return (
        <Link href={`/film/${film.kinopoiskId}`}>
            <div className={styles.item}>
                <Image width={500} height={300} src={film.posterUrl} alt={filmName} />
                <div className={styles.info}>
                    <h2>{filmName}</h2>
                    {
                        film.genres.map(item => <div>{item}</div>)
                    }
                    <div className={styles.descr}>

                    </div>
                    <button></button>
                </div>
            </div>
        </Link>
    );
};
