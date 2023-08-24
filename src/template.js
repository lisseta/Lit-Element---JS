import { LitElement, html, css } from 'lit-element';

/*export class LitElementTemplates extends LitElement{
    static get styles() {
        return css
        :host {
            display:block;
            padding: 25px;
            color: var(--LitElement-templates-text-color, #000);
        }
    }
}*/

class Template  extends LitElement {

  static get is() {
    return 'template.js';
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      
    `;
  }
}

  static get styles() {
    return css
      :host {
        display: block;
      }
    `;
  }

customElements.define(template.is, Template);
export default Template