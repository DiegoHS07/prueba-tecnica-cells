import { LitElement, html, css } from "lit-element";
import "./CardPokemon";

import {getAllPokemon} from "./../services/pokemon";

export class ListCardsPokemon extends LitElement{
    static get styles() {
        return css`
            .list-pokemons{
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
        `;
    }
    
    static get properties() {
        return {
            listPokemon: { type: Array },
            select_pokemonName: {type: String}
        };
    }

    constructor(){
        super();
        this.listPokemon = [];
        this.select_pokemonName = ''
    }

    async firstUpdated(){
        const responseAllPokemon = await getAllPokemon();
        this.listPokemon = responseAllPokemon;
    }

    _selectPokemon(e){
        this.select_pokemonName = e.detail.pokemon
        this.dispatchEvent(
            new CustomEvent('select_pokemonName',{
                detail: { pokemon: this.select_pokemonName },
                bubbles: true,
                composed: true
            })
        );
    }

    
    render(){
        return html`
        <div class='list-pokemons'>
            ${this.listPokemon.map((pokemon) =>
                html`
                <card-pokemon 
                    .pokemon='${pokemon}'
                    @select_pokemonName='${this._selectPokemon}'
                >
                </card-pokemon>
                `
            )}
        </div>`;
    }

}

customElements.define('list-pokemons', ListCardsPokemon);