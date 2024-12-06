import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const WidgetCard = ({ bgColor, ribbon, message }) => {
  return html`
    <div class="m-b-24">
      <h2>Widget-Card</h2>
      <div class="col-md-6 col-lg-4">
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
              <a href="#">Seleccionar</a
              ><span class="iconapp-arrow-right"></span>
            </div>
          </div>
          ${ribbon
            ? html`<div
                class="dp-ribbon dp-ribbon-top-right-alt dp-ribbon-violet"
              >
                <span>New Feature</span>
              </div>`
            : ""}
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
