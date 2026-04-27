import { html } from "lit-html";

export const ActionCTA = ({ title, description, iconClass }) => {
  return html`
    <a class="dp-action-cta" href="#" aria-label=${title}>
      <span
        class=${["dp-action-cta__icon", iconClass].filter(Boolean).join(" ")}
        aria-hidden="true"
      ></span>
      <span class="dp-action-cta__title">${title}</span>
      <span
        class="dp-action-cta__arrow ms-icon icon-arrow-next"
        aria-hidden="true"
      ></span>
      <span class="dp-action-cta__description">${description}</span>
    </a>
  `;
};
