import { LitElement } from "lit-element";
import {getAllPokemon, getPokemon} from "./../services/pokemon";

export class DataManager extends LitElement{

    static get properties() {
        return {
            url: { type: String },
            listPokemon: {type: Object}
        };
    }

    constructor(){
        super();
        this.url = "";
    }

    async firstUpdated(){
        let responsePokemon = "";
        if(this.url != ''){
            responsePokemon = await getPokemon(this.url);
        }else{
            responsePokemon = await getAllPokemon();
        }
        this.dispatchEvent(
            new CustomEvent('response_pokemon',{
                detail: { response: responsePokemon },
            })
        );
    }

}

customElements.define('data-manager', DataManager);