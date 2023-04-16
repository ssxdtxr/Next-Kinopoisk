import React, {FC} from 'react';
import {FilmItem} from "@/components/FilmItem/FilmItem";
import {IFilm} from "@/types/IFilm";
interface IFilms {
    filmsData: IFilm
}
export const Films: FC<IFilms> = ({filmsData}) => {
    return (
        <div>
            {
                filmsData.items.map(item => <FilmItem key={item.kinopoiskId} film={item}/>)
            }
        </div>
    );
};
