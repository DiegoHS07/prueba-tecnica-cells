import { LitElement, html, css } from "lit-element";
import "./ListCardsPokemon";
import "./InfoPokemon";

export class Sections extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 95%;
      }

      section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        align-items: stretch;
        margin: 0 2rem 0 2rem;
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      pokemonSelected: { type: String },
      isBack: { type: Boolean },
      template: { type: Object },
    };
  }

  constructor() {
    super();
    this.pokemonSelected = "";
    this.template = html`
      <h2>List Pokemon</h2>
      <list-pokemons @select_pokemonName="${this._showInfo}"></list-pokemons>
    `;
  }

  _showInfo(e) {
    this.pokemonSelected = e.detail.pokemon;
    this.template = html`
      <info-pokemon
        @back_list="${this._showList}"
        .pokemonNameSelected="${this.pokemonSelected}"
      >
      </info-pokemon>
    `;
  }

  _showList() {
    this.template = html`
      <h2>List Pokemon</h2>
      <list-pokemons @select_pokemonName="${this._showInfo}"></list-pokemons>
    `;
  }

  render() {
    return html`
      <section id="content" name="content">${this.template}</section>
    `;
  }
}

customElements.define("sections-component", Sections);
