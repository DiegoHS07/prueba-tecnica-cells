import { LitElement, html, css } from "lit-element";

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
                justify-content: center;
            }
            
            .card-evolution{
                width: 90%;
                border: 1px solid gray;
                height: auto;
            }
        `;
    }

    static get properties() {
        return {
            pokemon: {type: Object},
            namePokemon: { type: String },
            imagePokemon: { type: String },
            typesPokemon: {type: String},
            evolutionsPokemon: {type: Array},
            showEvolutions: {type: Boolean},
        };
    }

    constructor(){
        super();
        this.pokemon = {};
        this.showEvolutions = false;
    }

    _showEvolutions(){
        this.showEvolutions = !this.showEvolutions;
    }

    _infoEvolution(name){
        alert(name);
    }
    
    render(){
        const pokemon = this.pokemon;
        return html`
            <div class='card-pokemon' @click='${this._showEvolutions}'>
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