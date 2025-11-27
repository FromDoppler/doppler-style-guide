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
  onlyIcon,
  onlyIconSize,
}) => {
  if (preloading) {
    label = "";
  }

  const sizeClass = onlyIcon
    ? [
        `p-l-${onlyIconSize}`,
        `p-r-${onlyIconSize}`,
        `p-t-${onlyIconSize}`,
        `p-b-${onlyIconSize}`,
      ]
    : [`button-${size || "medium"}`];

  return html`
    <button
      type="button"
      class=${[
        "dp-button",
        `${mode}-${color}`,
        ...sizeClass,
        loading ? "button--loading" : "",
        rounded ? "button--round" : "",
        preloading ? "button--centered-loading" : "",
        iconClass ? "button-icon" : "",
      ].join(" ")}
      @click=${onClick}
      .disabled=${disabled}
    >
      ${iconClass
        ? html`
            <span
              class="dpicon ${iconClass} ${onlyIcon ? "dpicon--onlyicon" : ""}"
            ></span>
          `
        : ""}
      ${!onlyIcon ? label : ""}
    </button>
  `;
};
