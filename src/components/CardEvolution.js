import { LitElement, html, css, eventOptions } from "lit-element";

export class CardEvolution extends LitElement{
    static get styles() {
        return css` 
        
            :host{
                width:100%;
            }

            .card-evolution{
                width: 100%;
                border: 1px solid gray;
                height: auto;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .image-pokemon-card{
                margin:1rem;
                border: 1px solid gray;
                border-radius: 10px;
                height: 50px;
            }

            .card-evolution:hover {
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

        `;
    }

    static get properties() {
        return {
            pokemon: {type: Object},
        };
    }

    constructor(){
        super();
        this.pokemon = {};
    }

    _infoEvolution(){
        this.dispatchEvent(
            new CustomEvent('select_evolution',{
                detail: { pokemon: this.pokemon },
            })
        );
    }

    render(){
        return html`
            <div class='card-evolution' @click='${this._infoEvolution()}'>
                <div class='image-pokemon-card'>
                    <img src='' alt='${this.pokemon.image}'/>
                </div>
                <div>
                    <h3>${this.pokemon.name}</h3>
                    <div class='types-pokemon'>
                        ${this.pokemon.type.split("/").map((type)=> html`<span>${type}</span>`)}
                    </div>
                </div>
            </div>       
        `
    }
}

customElements.define('evolution-card', CardEvolution);