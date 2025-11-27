import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, labelLegend, isError }) => {
  return html`
    <div class="awa-form" style="width:450px;">
      <label
        class="dp-label-dropfile"
        for="file"
        aria-disabled=${disabled}
        aria-invalid=${isError}
      >
        ${label}
        <input type="file" id="file" name="file" .disabled=${disabled} />
        <div class="assistance-wrap">
          <span>${labelLegend}</span>
        </div>
      </label>
    </div>
  `;
};
