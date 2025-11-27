import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const WidgetFormInput = ({
  type = "text",
  checked = false,
  disabled = false,
  hasInput = false,
  multipleOptions = false,
  textAfter = "",
  textBefore = "",
  text = "",
  inputValue = "",
  options = [],
  showChildren = false,
  children = null,
}) => {
  // Function to capitalize the first letter of a string
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return html`
    <div class="dp-library">
      <form class="dp-container">
        <fieldset class="dp-rowflex">
          <ul class="field-group col-md-12 col-lg-12">
            <li class="field-item col-sm-6 m-b-12">
              <div class="dp-input--${type} dp-checkout-${type}-selected">
                ${multipleOptions
                  ? html`
                      <ul class="dp-card-${type}-list">
                        ${options.map(
                          (option) => html`
                            <li>
                              <label>
                                <input
                                  type=${type}
                                  name=${type === "radio"
                                    ? "radio"
                                    : `${type}-${option}`}
                                  class="dp-card-input--${type}"
                                  ?disabled=${disabled}
                                />
                                <span class="dp-card-span"
                                  >${capitalize(option)}</span
                                >
                              </label>
                            </li>
                          `,
                        )}
                      </ul>
                    `
                  : html`
                      <label class="dp-card-label">
                        <input
                          type=${type}
                          name="radio"
                          ?checked=${checked}
                          class="dp-card-input--${type}"
                          ?disabled=${disabled}
                        />
                        ${hasInput
                          ? html`
                              <span class="dp-card-span">
                                ${textBefore}
                                <input
                                  type="number"
                                  value=${inputValue}
                                  class="dp-card-number-input"
                                  ?disabled=${disabled}
                                />
                                ${textAfter}
                              </span>
                            `
                          : html` <span class="dp-card-span">${text}</span> `}
                      </label>
                    `}
                ${children && type === "radio"
                  ? html`
                      <div
                        class="dp-accordion-content ${showChildren
                          ? "visible"
                          : "hidden"}"
                      >
                        <div class="dp-accordion-option-container">
                          ${children}
                        </div>
                      </div>
                    `
                  : ""}
              </div>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  `;
};
