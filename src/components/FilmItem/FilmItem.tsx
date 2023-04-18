import React, {FC} from 'react';
import Image from "next/image";
import {IInfoIFilm} from "@/types/IInfoIFilm";
import styles from "./FilmItem.module.scss"
import Link from "next/link";
import star from "../../../public/filmItem/star.png"
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
            <div className={styles.item}>
                <Link href={`/films/${film.kinopoiskId}`}>
                    <Image className={styles.filmImage} width={250} height={300} src={film.posterUrl} alt={filmName}/>
                </Link>
                <div className={styles.info}>
                    <Link href={`/films/${film.kinopoiskId}`}>
                        <h3 className={styles.filmName}>{filmName}</h3>
                    </Link>
                    <div className={styles.genres}>
                        {
                            film.genres.map(item => item.genre).join(", ")
                        }
                    </div>
                    <div className={styles.rate}>
                        <h3>Rating: {film.ratingImdb}</h3>
                        <Image width={32} height={32} src={star} alt="star" />
                    </div>
                </div>
            </div>

    );
};
