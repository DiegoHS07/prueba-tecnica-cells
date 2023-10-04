const API_URL = "http://localhost:3002/pokemon";

export async function getAllPokemon(){
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Error en la solicitud');
    }
    const data = await response.json();
    return data;
};

export async function getPokemon(namePokemon){
    const response = await fetch(API_URL+"?name="+namePokemon);
    if (!response.ok) {
        throw new Error('Error en la solicitud');
    }
    const data = await response.json();
    return data;
};

