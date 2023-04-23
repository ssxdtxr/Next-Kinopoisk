export interface IActorData {
  personId: number;
  webUrl: string | null;
  nameRu: string | null;
  nameEn: string | null;
  sex: string[] | null;
  posterUrl: string;
  growth: string | null;
  birthday: string | null;
  death: string | null;
  age: number | null;
  birthplace: string | null;
  deathplace: string | null;
  hasAwards: number | null;
  profession: string | null;
  facts: {
    personId: number
    name: string | null
    divorced: boolean
    divorcedReason: string | null
    sex: string[]
    children: number
    webUrl: string
    relation: string
  }[];
  films: {
    filmId: number
    nameRu: string | null
    nameEn: string | null
    rating: string | null
    general: boolean
    description: string | null
    professionKey: string[]
  }[];
}