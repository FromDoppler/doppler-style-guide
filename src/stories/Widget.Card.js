import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const WidgetCard = ({ bgColor, banner, message }) => {
  return html`
    <div class="m-b-24">
      <h2>Widget-Card</h2>
      <div class="dp-widget-card-container">
        <div class="dp-widget-card">
          <div class="${`dp-widget-card-icon ${bgColor}`}">
            <span class="dpicon iconapp-online-clothing"></span>
          </div>
          <div class="dp-widget-card-content">
            <div class="dp-widget-card-text">
              <h3>Historial navegación de productos</h3>
              <p>
                Breve descripción del widget, no debe superar las dos líneas de
                texto.
              </p>
            </div>
            <div class="dp-widget-card-action">
              <a href="#">Seleccionar</a>
            </div>
          </div>
          <div
            class="${banner ? "dp-widget-card-new-feature" : ""}"
            data-text="New Feature"
          />
          ${message
            ? html`
                <div class="${`dp-widget-card-hover-message ${bgColor}`}">
                  <h3>${message.title}</h3>
                  <p>${message.description} <a href=${message.link}>Link</a></p>
                </div>
              `
            : ""}
        </div>
      </div>
    </div>
  `;
};
