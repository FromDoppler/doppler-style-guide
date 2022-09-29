export class Dropdown extends HTMLElement {
  _open = false;
  _button;
  _expandableBox;

  openCloseMenuHandler = () => {
    this._open = !this._open;
    this.updateRender();
  };

  constructor() {
    super();
    this._button = this.querySelector("dp-dropdown>dp-dropbdown-button");
    this._expandableBox = this.querySelector("dp-dropdown>dp-dropdown-content");

    //TODO: use class for hide or show expandableBox
    this._expandableBox.setAttribute(
      "style",
      `display: ${this._open ? "block" : "none"}`
    );

    this.append(this._button, this._expandableBox);
  }

  updateRender() {
    //TODO: use class for hide or show expandableBox
    this._expandableBox.setAttribute(
      "style",
      `display: ${this._open ? "block" : "none"}`
    );
  }

  collapse() {
    this._open = false;
    this.updateRender();
  }

  _collapseOther() {
    const all = document.querySelectorAll("dp-dropdown");
    all.forEach((dropdown) => {
      if (dropdown !== this) {
        dropdown.collapse();
      }
    });
  }

  connectedCallback() {
    this._button.addEventListener("click", () => {
      this.openCloseMenuHandler();
      this._collapseOther();
    });
  }
}
