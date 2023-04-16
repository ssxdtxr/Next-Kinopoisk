import React, {FC} from 'react';
import {IFilmPage} from "@/pages/film/[id]";

export const Film: FC<IFilmPage> = ({filmData, actorsData}) => {
    console.log(filmData, actorsData)
    return (
        <div>

        </div>
    );
};

