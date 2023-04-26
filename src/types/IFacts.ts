export interface IFacts {
    total: number
    items: IFact[]
}

export interface IFact {
    text: string
    type: string[]
    spoiler: boolean
}