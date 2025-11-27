import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled }) => {
  return html`
    <div class="awa-form" style="width:450px;">
      <h2>Button Tertiary</h2>
      <p class="m-b-42">
        Este botón nos sirve para marcar una acción secundaria en la que No
        queremos hacer foco.
      </p>
      <button
        type="button"
        class="dp-button button-big ctaTertiary"
        .disabled=${disabled}
      >
        Volver
      </button>
      <button
        type="button"
        class="dp-button button-medium ctaTertiary m-l-42"
        .disabled=${disabled}
      >
        Volver
      </button>
      <button
        type="button"
        class="dp-button button-small ctaTertiary m-l-42"
        .disabled=${disabled}
      >
        Volver
      </button>
    </div>
  `;
};
