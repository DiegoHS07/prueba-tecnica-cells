import { LitElement, html, css } from "lit-element";
import "./CardPokemon";
import "./DataManager";

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


    _selectPokemon(e){
        this.select_pokemonName = e.detail.pokemon
        this.dispatchEvent(
            new CustomEvent('select_pokemonName',{
                detail: { pokemon: this.select_pokemonName },
            })
        );
    }


    _listPokemon(e){
        this.listPokemon = e.detail.response;
    }
    
    render(){
        return html`
        <div class='list-pokemons'>
            <data-manager @response_pokemon='${this._listPokemon}'></data-manager>
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