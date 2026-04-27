import { html } from "lit-html";

export const Pill = ({
  text,
  removable = true,
  expandable = false,
  color = "green",
  icon = "icon-cancel-icon",
}) => {
  const iconClass = icon || "icon-cancel-icon";

  return html`
    <div class="pill pill--${color} ${expandable ? "pill--expandable" : ""}">
      <span class="pill-text">${text}</span>
      ${removable
        ? html`
            <button class="pill-close" aria-label="Remove">
              <i class=${iconClass}></i>
            </button>
          `
        : ""}
    </div>
  `;
};
