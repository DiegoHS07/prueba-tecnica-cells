import { LitElement, html, css } from "lit-element";
import { getPokemon } from "../services/pokemon";

export class InfoEvolution extends LitElement{

    static get properties() {
        return {
            evolutionNameSelected: { type: String },
        };
    }

    constructor(){
        super();
        this.evolutionNameSelected = '';
    }

    render(){
        html`
            <h2>${this.evolutionNameSelected}</h2>    
        `
    }
}

customElements.define('info-pokemon', InfoEvolution);