import { LitElement, html, css } from "lit-element";
import "./ListCardsPokemon";

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

    render(){
        return html`
        <section>
            <list-pokemons></list-pokemons>
        </section>
        `;
    }

}

customElements.define('sections-component', Sections);