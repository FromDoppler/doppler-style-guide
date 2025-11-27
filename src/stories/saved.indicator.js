import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */

export const savedIndicator = ({ savedIndicator, label, title }) => {
  return html` <div class="dp-save-indicator ${savedIndicator}" title=${title}>
    <span>${label}</span>
  </div>`;
};
