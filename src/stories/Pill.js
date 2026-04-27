import { html } from "lit-html";

export const Pill = ({
  text,
  removable = true,
  expandable = false,
  color = "green",
  icon = "icon-cancel-icon",
  isClickable = true,
}) => {
  const iconClass = icon || "icon-cancel-icon";
  const pillIcon = html`<i class=${`pill-close-icon ${iconClass}`}></i>`;

  return html`
    <div class="pill pill--${color} ${expandable ? "pill--expandable" : ""}">
      <span class="pill-text">${text}</span>
      ${removable
        ? isClickable
          ? html`
              <button class="pill-close" aria-label="Remove">
                ${pillIcon}
              </button>
            `
          : pillIcon
        : ""}
    </div>
  `;
};
