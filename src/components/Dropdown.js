import { css, html, LitElement } from "lit";

export class Dropdown extends LitElement {
  static properties = {
    open: { state: true },
  };

  static get styles() {
    return css`
      .wrapper {
        width: fit-content;
      }
    `;
  }

  openCloseMenuHandler = () => (this.open = !this.open);

  leaveMenuHandler = () => (this.open = false);

  render() {
    return html`
      <div class="wrapper" @mouseleave="${this.leaveMenuHandler}">
        <button @click="${this.openCloseMenuHandler}">
          Click para mostrar el menu
        </button>
        ${this.open ? html`<slot></slot>` : ""}
      </div>
    `;
  }
}
