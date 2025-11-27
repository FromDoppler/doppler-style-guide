import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, labelRequired, isError }) => {
  return html`
    <div class="awa-form" style="width:350px;">
      <label
        for="name"
        class="labelcontrol"
        aria-disabled=${disabled}
        data-required=${labelRequired}
      >
        ${label}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          aria-required="true"
          aria-invalid=${isError}
          aria-placeholder="Your Name"
          .disabled=${disabled}
        />
        <div class="assistance-wrap">
          <span>Assistive text</span>
        </div>
      </label>
    </div>
  `;
};
