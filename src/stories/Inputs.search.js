import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, isError }) => {
  return html`
    <div class="awa-form" style="width:450px;">
      <label for="search" class="labelcontrol" aria-disabled=${disabled}>
        ${label}
        <div class="dp-wrap-search">
          <button
            class="dp-button button-medium dp-button--search"
            .disabled=${disabled}
          >
            <span class="ms-icon icon-search" aria-hidden="true"></span>
          </button>
          <input
            type="search"
            id="search"
            placeholder="Busqueda de imagenes"
            aria-invalid=${isError}
            .disabled=${disabled}
          />
          <div class="assistance-wrap">
            <span>Assistive text</span>
          </div>
        </div>
      </label>
    </div>
    <div class="awa-form m-t-54" style="width:450px;">
      <div class="dp-wrap-search dp-bg-search">
        <input type="search" id="search" placeholder="Busqueda de imagenes" />
      </div>
    </div>
  `;
};
