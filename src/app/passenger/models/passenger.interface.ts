export interface Child {
    name: string,
    age: number
}
export interface Passenger {
    id: number,
    name: string,
    checkedin: boolean,
    date: number | null,
    children: Child[]
}