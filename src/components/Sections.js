import { LitElement, html, css } from "lit-element";
import "./ListCardsPokemon";
import "./InfoPokemon";

export class Sections extends LitElement{
    static get styles() {
        return css`
            :host{
                width:95%;
            }

            section{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 10px;
                align-items: stretch;
                margin: 0 2rem 0 2rem;
                text-align:center;
            }
        `;
    }

    static get properties() {
        return {
            pokemonSelected: { type: String },
            isBack: {type: Boolean}
        };
    }

    constructor(){
        super();
        this.pokemonSelected = '';
    }
    
    _showInfo(e){
        this.pokemonSelected = e.detail.pokemon;
    }

    _showList(e){
        this.pokemonSelected = '';
    }

    render(){
        return html`
        <section>
            ${
                this.pokemonSelected != '' 
                    ? 
                        html`<info-pokemon @back_list='${this._showList}' .pokemonNameSelected='${this.pokemonSelected}'></info-pokemon>` 
                    : 
                        html`<list-pokemons @select_pokemonName="${this._showInfo}"></list-pokemons>`
            }
        </section>
        `;
    }

}

customElements.define('sections-component', Sections);