import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, labelRequired, isError }) => {
  return html`
    <div class="awa-form" style="width:450px;">
      <label
        for="password"
        class="labelpassword"
        data-required=${labelRequired}
      >
        ${label}
        <div class="dp-wrap-eyed">
          <button
            id="see"
            aria-label="see"
            class="show-hide icon-hide ms-icon"
            tabindex="-1"
          ></button>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            aria-required="true"
            aria-invalid=${isError}
            aria-placeholder="Your Password"
          />
          <div class="assistance-wrap">
            <span>Assistive text</span>
          </div>
        </div>
        <div class="wrapper-password">
          <p class="password-message">
            <span class="dp-message--success">8 caracteres como mínimo</span>
            <span class="dp-message--success">Una letra</span>
            <span class="dp-message--success">Un número</span>
          </p>
          <p class="password-message">
            <span class="dp-message--denied"> 8 caracteres como mínimo</span
            ><span class="dp-message--denied"> Una letra</span
            ><span class="dp-message--denied">Un número</span>
          </p>
          <p class="password-message">
            <span class="dp-message--default"> 8 caracteres como mínimo</span
            ><span class="dp-message--default"> Una letra</span
            ><span class="dp-message--default">Un número </span>
          </p>
          <p class="password-message">
            <span class="dp-message--secure"> ¡Tu contraseña es segura!</span>
          </p>
        </div>
      </label>
    </div>
  `;
};
