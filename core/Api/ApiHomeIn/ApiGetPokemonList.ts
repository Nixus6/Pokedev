// import {REACT_APP_API_GET_SALES } from '../../../Domain/Settings/SettingsVariables';
import { Get } from '@/core/Http/Get'; 


//Feature: ApiGetPokemonList
//Autor: nicolas.moreno
//Description: Get the list of all pokemons min 125
function ApiGetPokemonList() {
    const { AxiosGet } = Get();

    const res = AxiosGet()
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    return res;
}

export default ApiGetPokemonList;