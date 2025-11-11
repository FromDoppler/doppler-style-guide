import { html } from "lit-html";

export const Pill = ({
  text,
  removable = true,
  expandable = false,
  color = "green",
}) => {
  return html`
    <div class="pill pill--${color} ${expandable ? "pill--expandable" : ""}">
      <span class="pill-text">${text}</span>
      ${removable
        ? html`<button class="pill-close" aria-label="Cerrar"></button>`
        : ""}
    </div>
  `;
};
