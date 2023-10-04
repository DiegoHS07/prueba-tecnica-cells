import { LitElement,css,html } from "lit-element";
import "./components/Sections";

export class App extends LitElement{
    static get styles() {
        return css`
            .main-container{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 10px;
                width: 100vw - 2rem;
                align-items: center;
            }
        `;
    }

    render(){
        return html`
        <main class='main-container'>
            <h1>Prueba Técnica CELLS</h1>
            <sections-component></sections-component>
        </main>
        `;
    }
}

customElements.define('app-component', App);