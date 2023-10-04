import { LitElement, html, css } from "lit-element";

export class InfoEvolution extends LitElement{

    static get styles() {
        return css`
            .info_pokemon{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                gap: 50px;
            }
            .form-data-pokemon{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                gap: 5px;
            }
        `
    }

    static get properties() {
        return {
            evolutionNameSelected : {type: Object},
        };
    }

    constructor(){
        super();
        this.evolutionNameSelected = {};
    }

    _clickBack(){
        this.dispatchEvent(
            new CustomEvent('back_list',{
                detail: { isBack: true },
            })
        );
    }

    render(){
        return html`
            <h2>Information ${this.evolutionNameSelected.name}</h2>    
            <div class='info_pokemon'>
                <form class='form-data-pokemon'>
                    <div>
                        <label>Name: </label>
                            <input id='namePokemon' name='namePokemon' type='text' value='${this.evolutionNameSelected.name}'/>
                    </div>
                    <div>
                        <label>Image: </label>
                        <input id='imagePokemon' name='imagePokemon' type='text' value='${this.evolutionNameSelected.image}'/>
                    </div>
                    <div>
                        <label>Types: </label>
                        <input id='typesPokemon' name='typesPokemon' type='text' value='${this.evolutionNameSelected.type}'/>
                    </div>
                    <input type='submit' value='Change Data'>
                </form>
            </div>
            <div class='evolutions'>
                        <label>Evolutions: </label></br>
                        ${
                            this.evolutionNameSelected.evolutions && this.evolutionNameSelected.evolutions.length > 0
                            ? this.evolutionNameSelected.evolutions.map((evolution) => html`
                                <evolution-card 
                                    .pokemon='${evolution}' 
                                    @select_evolution='${this._selectedEvolution}'
                                    @back_list='${this._clickBack}'
                                >
                                </evolution-card>
                            `)
                            : html`<span>The pokemon no have evolution</span>`
                        }
                    </div>
            <div>
                <button>Back</button>
            </div>
        `;
    }
}

customElements.define('info-evolution', InfoEvolution);