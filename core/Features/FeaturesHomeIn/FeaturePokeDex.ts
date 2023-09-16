import ApiGetPokemonList from "@/core/Api/ApiHomeIn/ApiGetPokemonList";

export const FeaturePokeDex = () => {

    const getPokemonList = ()=> {
        ApiGetPokemonList().then(res => {
            console.log("res ", res)
            // if (res.data && res.data.length > 0) {
            //     console.log('Datos Usuario', res.data[0]);
            //     // setDataConsulta(res.data);
            //     setResponseDto(res.data[0]);

            // }
            // else {
            //     console.log('usuario sin un asesor asignado');
            // }
        }).catch(err => {
            console.log("error ApiAdvisorMok ", err);
        })
    }
    // export async function getPokemonList() {
    //     const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
    //     const data = await response.json();
    //     return data.results;
    // }
    return{getPokemonList}
}