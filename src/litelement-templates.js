import { LitElement, html, css } from 'lit-element';

class Litelement-Templates  extends LitElement {

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
    return css`
      :host {
        display: block;
      }
    `;
  }

customElements.define(litelement-templates.is, Litelement-Templates);
export default Litelement-Templates