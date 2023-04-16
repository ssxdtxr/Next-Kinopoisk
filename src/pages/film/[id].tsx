import React, {FC} from "react";
import {Film} from "@/devPages/Film/Film";
import {http} from "@/http/http";
export async function getServerSideProps(context: any) {
    const {data: filmData} = await http.get(`/v2.2/films/${context.query.id}`)
    const {data: actorsData} = await http.get(`/v1/staff/`, {params: {filmId: context.query.id}})
    return {props: {filmData, actorsData}}
}
export interface IFilmPage {
    filmData: any
    actorsData: any
}
const FilmPage: FC<IFilmPage> = ({filmData, actorsData}) => {
    return <Film filmData={filmData} actorsData={actorsData}/>
}
export default FilmPage