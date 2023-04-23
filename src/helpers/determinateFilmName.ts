import { IFilmData } from '@/types/IFIlmData';
import { IFilm } from '@/types/IFilm';
import { IInfoIFilm } from '@/types/IInfoIFilm';

export const determinateFilmName = (film: IInfoIFilm | IFilmData): string => {
  if (film.nameOriginal) {
    return film.nameOriginal;
  }
  if (film.nameRu) {
    return film.nameRu;
  }
  return film.nameEn || "";

};