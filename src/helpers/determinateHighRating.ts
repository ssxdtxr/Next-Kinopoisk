import { IInfoIFilm } from '@/types/IInfoIFilm';
import { IFilmData } from '@/types/IFIlmData';

export const determinateRating = (filmsData: IInfoIFilm | IFilmData) => {
  if (filmsData.ratingImdb) {
    return filmsData.ratingImdb
  }
  if (filmsData.ratingKinopoisk) {
    return filmsData.ratingKinopoisk
  }
  return 0
}