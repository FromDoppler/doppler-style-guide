import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Select = ({ disabled, label, labelRequired, isError }) => {
  return html`
    <div class="awa-form" style="width:350px;margin-top: 40px;">
      <label
        for="list-selection"
        class="labelcontrol"
        aria-disabled=${disabled}
        data-required=${labelRequired}
        >${label}
        <div class="dp-select">
          <span class="dropdown-arrow"></span>
          <select
            id="list-selection"
            class=""
            name="list-selection"
            aria-invalid=${isError}
            .disabled=${disabled}
          >
            <option value="">
              Lorem Ipsum has been the industry's standard dummy
            </option>
            <option value="">item list</option>
            <option value="">item list</option>
            <option value="">item list</option>
          </select>
          <div class="assistance-wrap">
            <span>Assistive text</span>
          </div>
        </div>
      </label>
    </div>
    <div class="awa-form" style="width:350px;margin-top: 40px;">
      <div class="dp-select">
        <span class="dropdown-arrow"></span>
        <select id="list-gallery" class="" name="list-gallery">
          <option value="">item gallery</option>
          <option value="">item gallery</option>
          <option value="">item gallery</option>
          <option value="">item gallery</option>
        </select>
      </div>
    </div>
  `;
};
