import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, labelRequired, isError }) => {
  return html`
    <div class="awa-form" style="width:350px;">
      <label
        for="email"
        class="labelcontrol"
        aria-disabled=${disabled}
        data-required=${labelRequired}
      >
        ${label}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          aria-required="true"
          aria-invalid=${isError}
          aria-placeholder="Your Email"
          .disabled=${disabled}
        />
        <div class="assistance-wrap">
          <span>Assistive text</span>
        </div>
      </label>
    </div>
  `;
};
