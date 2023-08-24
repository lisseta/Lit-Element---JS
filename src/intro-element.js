import { LitElement, html } from 'lit-element';

export class IntroLitelement extends LitElement {
    render() {
        return html`
        <p>Intro a litelements</p>
        `;
    }
}
customElements.define('intro-litelement', IntroLitelement);

/*Vanilla JS + Lit-HTML */
//HTML - Tagged Template String
//Render- Volcar el HTML generando con los templates string
import {html,render} from "../node_modules/lit-html/lit-html.js";

/*Render recibe 2 parametros
    TemplateResult: El resultado de obtener y generar un template
    Nodo Dom: Donde volcar el HTML generado*/
const cadena =">>>>> Contenido Dinàmico <<<<<"; 

//Version 1.
//const objectTemplateResult =html`<h2> Contenido estàtico(template)+${cadena} </h2>´;

//Version 2. -> Funcion Dinamica, parametro
const templateHolder = (paramString) => '<h2>Contenido estatico (template) + ${paramString} <h2>';
const objectTemplateResult =templateHolder(cadena);

//Render -> Sustituye lo del Body 
//render (objectoTemplateResult, elementoEnDom);

render(templateHolder(cadena), document.getElementById('container1'));
render(templateHolder('Este es otro texto'), document.getElementById('container2'));


    
    
