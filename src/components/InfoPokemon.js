import { LitElement, html, css } from "lit-element";
import { getPokemon } from "../services/pokemon";
import "./InfoEvolution";

export class InfoPokemon extends LitElement {
  static get styles() {
    return css`
      .info_pokemon {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 50px;
      }
      .evolutions {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        width: 100%;
      }
      .modal {
        position: absolute;
        background-color: #27282b;
        top: 0;
        height: 100%;
        width: 100%;
        display: none;
        flex-direction: column;
        justify-content: center;
      }

      .modal > span {
        border: 2px solid gray;
        position: relative;
        width: 20%;
      }

      .active {
        display: flex;
        align-items: center;
      }

      .form-data-pokemon {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 5px;
      }
    `;
  }

  static get properties() {
    return {
      pokemonNameSelected: { type: String },
      infoPokemon: { type: Object },
      selectedEvolution: { type: Object },
      checkPokemonExist: { type: Boolean },
      templateInfo: { type: Object },
    };
  }

  constructor() {
    super();
    this.pokemonNameSelected = "";
    this.infoPokemon = {};
    this.selectedEvolution = {};
    this.checkPokemonExist = false;
  }

  async firstUpdated() {
    const responseGetPokemon = await getPokemon(this.pokemonNameSelected);
    this.infoPokemon = responseGetPokemon[0];

    this.templateInfo = html`
            <div class='info_pokemon'>
                <h2>Information ${this.infoPokemon.name}</h2>
                <div class='modal' id='modal'>
                    <p>This is a modal informative about if </br> pokemon is duplicate</p></br>
                    <span @click='${this._changeCheckBox}'>Close</span>
                </div>
                <div class='info_pokemon'>
                    <form class='form-data-pokemon' @submit='${
                      this._submitFormData
                    }'>
                        <div>
                            <label>Name: </label>
                                <input id='namePokemon' name='namePokemon' type='text' value='${
                                  this.infoPokemon.name
                                }'/>
                        </div>
                        <div>
                            <label>Image: </label>
                            <input id='imagePokemon' name='imagePokemon' type='text' value='${
                              this.infoPokemon.image
                            }'/>
                        </div>
                        <div>
                            <label>Types: </label>
                            <input id='typesPokemon' name='typesPokemon' type='text' value='${
                              this.infoPokemon.type
                            }'/>
                        </div>
                        <input type='submit' value='Change Data'>
                    </form>
                    <div class='evolutions'>
                        <label>Evolutions: </label></br>
                        ${
                          this.infoPokemon.evolutions &&
                          this.infoPokemon.evolutions.length > 0
                            ? this.infoPokemon.evolutions.map(
                                (evolution) => html`
                                  <evolution-card
                                    .pokemon="${evolution}"
                                    @select_evolution="${this
                                      ._selectedEvolution}"
                                    @back_list="${this._clickBack}"
                                  >
                                  </evolution-card>
                                `
                              )
                            : html`<span>The pokemon no have evolution</span>`
                        }
                    </div>
                    <div>
                        <input type="checkbox" id="cboxPokemonExist" .value='${
                          this.checkPokemonExist
                        }' 
                        @change='${this._changeCheckBox}'/>
                        <label for="cboxPokemonExist">show if pokemon is duplicate!</label>
                    </div>
                    <div>
                        <button @click='${this._clickBack}'>Back</button>
                    </div>
                </div>
            </div>
        `;
  }

  _clickBack() {
    this.dispatchEvent(
      new CustomEvent("back_list", {
        detail: { isBack: true },
      })
    );
  }

  _selectedEvolution(e) {
    this.selectedEvolution = e.detail.pokemon;
    this.templateInfo = html`
      <info-evolution
        .evolutionNameSelected="${this.selectedEvolution}"
      ></info-evolution>
    `;
  }

  _changeCheckBox() {
    this.checkPokemonExist = !this.checkPokemonExist;
    this._showModal();
  }

  _showModal() {
    const modal = this.renderRoot.querySelector("#modal");
    if (this.checkPokemonExist) {
      modal.classList.add("active");
    } else {
      modal.classList.remove("active");
      this.checkPokemonExist = false;
    }
  }

  _submitFormData(e) {
    e.preventDefault();
    const inputName = this.renderRoot.querySelector("#namePokemon");
    const inputImage = this.renderRoot.querySelector("#imagePokemon");
    const inputTypes = this.renderRoot.querySelector("#typesPokemon");

    this.infoPokemon.name = inputName.value;
    this.infoPokemon.image = inputImage.value;
    this.infoPokemon.type = inputTypes.value;

    console.log(this.infoPokemon);

    alert(
      "New Data pokemon: " +
        " Name : " +
        this.infoPokemon.name +
        ", Image : " +
        this.infoPokemon.image +
        ", Type : " +
        this.infoPokemon.type
    );
  }

  render() {
    return html` <div>${this.templateInfo}</div>`;
  }
}

customElements.define("info-pokemon", InfoPokemon);
