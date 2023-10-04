import { LitElement, html, css } from "lit-element";
import { getPokemon } from "../services/pokemon";

export class InfoPokemon extends LitElement{

    static get styles() {
        return css`
            .info_pokemon{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                gap: 50px;
            }
            .evolutions{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                gap: 10px;
                width:100%;
            }
        `;
    }

    static get properties() {
        return {
            pokemonNameSelected: { type: String },
            infoPokemon: { type: Object },
        };
    }

    constructor(){
        super();
        this.pokemonNameSelected = '';
        this.infoPokemon = {};
    }

    async firstUpdated(){
        const responseGetPokemon = await getPokemon(this.pokemonNameSelected);
        this.infoPokemon = responseGetPokemon[0];
    }

    _clickBack(){
        this.dispatchEvent(
            new CustomEvent('back_list',{
                detail: { isBack: true },
                bubbles: true,
                composed: true
            })
        );
    }

    render(){
        const pokemon = this.infoPokemon;
        return html`
            <div class='info_pokemon'>
                <h2>${pokemon.name}</h2>
                <div>
                    <img  src='' alt='${pokemon.image}'/>
                </div>
                <div class='types-pokemon'>
                    <label>Types: </label>
                    <span>${pokemon.type}</span>
                </div>
                <div class='evolutions'>
                    <label>Evolutions: </label></br>
                    ${
                        pokemon.evolutions 
                        ? pokemon.evolutions.map((evolution) => html`
                            <evolution-card .pokemon='${evolution}'></evolution-card>
                        `)
                        : ''
                    }
                </div>
                <div>
                    <button @click='${this._clickBack}'>Back</button>
                </div>
            </div>
        `;
    }
}

customElements.define('info-pokemon', InfoPokemon);