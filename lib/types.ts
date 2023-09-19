
export interface GenericItem {
    [key: string | symbol]: string;
}

export interface Result {
    name: string;
    url: string;
}

export interface messageErrors {
    email: String,
    password: String,
    ambosCampos: String,
}

export interface PokemonList {
    count: number;
    next?: string;
    previous?: string;
    results: Result[] | GenericItem[];
}

export default PokemonList;