import { LitElement, html, css } from "lit-element";
import "./CardEvolution"

export class CardPokemon extends LitElement{
    static get styles() {
        return css`
            .principal-pokemon{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
            }

            .principal-pokemon > .info-pokemon{
                flex:1
            } 

            .card-pokemon{
                width:auto;
                height: auto;
                border: 1px solid gray;
            }

            .image-pokemon-card{
                margin:1rem;
                border: 1px solid gray;
                border-radius: 10px;
                height: 50px;
            }

            .card-pokemon:hover {
                border: 2px solid greenyellow;
            }

            .types-pokemon{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin-bottom: 10px;
            }

            .types-pokemon span{
                border: 2px solid gray;
                padding: 5px;
            }

            .evolutions{
                display:flex;
                justify-content: space-evenly;
            }
        `;
    }

    static get properties() {
        return {
            pokemon: {type: Object},
            showEvolutions: {type: Boolean},
        };
    }

    constructor(){
        super();
        this.pokemon = {};
        this.showEvolutions = false;
    }

    _displayInfo(){
        this.dispatchEvent(
            new CustomEvent('select_pokemonName',{
                detail: {pokemon: this.pokemon.name}
            })
        );
    }

    render(){
        const pokemon = this.pokemon;
        return html`
            <div class='card-pokemon' @click='${this._displayInfo}'>
                <div class='principal-pokemon'>
                    <div class='image-pokemon-card'>
                        <img class='img-principal' src='' alt='${pokemon.image}'/>
                    </div>
                    <div class='info-pokemon'>
                        <h3>${pokemon.name}</h3>
                        <div class='types-pokemon'>
                            ${pokemon.type.split("/").map((type)=> html`<span>${type}</span>`)}
                        </div>
                    </div>
                </div>
            </div>
                `;   
            }
}

customElements.define('card-pokemon', CardPokemon);