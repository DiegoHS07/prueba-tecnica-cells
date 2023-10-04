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
        };
    }

    constructor(){
        super();
        this.listPokemon = [];
    }

    async firstUpdated(){
        const responseAllPokemon = await getAllPokemon();
        this.listPokemon = responseAllPokemon;
    }

    
    
    render(){
    
        return html`
        <div class='list-pokemons'>
            ${this.listPokemon.map((pokemon) =>
                html`
                <card-pokemon 
                    .pokemon='${pokemon}'
                >
                </card-pokemon>
                `
            )}
        </div>`;
    }

}

customElements.define('list-pokemons', ListCardsPokemon);