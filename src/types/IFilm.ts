import {IInfoIFilm} from "@/types/IInfoIFilm";

export interface IFilm {
    total: number
    totalPages: number
    items: IInfoIFilm[]
}
