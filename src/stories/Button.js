import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size,
  disabled,
  loading,
  preloading,
  color,
  label,
  rounded,
  onClick,
  mode,
  iconClass,
}) => {
  if (preloading) {
    label = "";
  }

  return html`
    <button
      type="button"
      class="${[
        "dp-button button-big",
        `${mode}-${color}`,
        `button-${size || "medium"}`,
        loading ? "button--loading" : "",
        rounded ? "button--round" : "",
        preloading ? "button--centered-loading" : "",
        iconClass ? "button-icon" : "",
      ].join(" ")}"
      @click="${onClick}"
      .disabled="${disabled}"
    >
      ${iconClass ? html`<span class="${`dpicon ${iconClass}`}"></span>` : ""}
      ${label}
    </button>
  `;
};
