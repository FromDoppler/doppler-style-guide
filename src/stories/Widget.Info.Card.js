import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const WidgetInfoCard = ({ bgColor }) => {
  return html`
    <div class="m-b-24">
      <h2>Widget-Info-Card</h2>
      <div class="col-lg-4">
        <div class="dp-widget-info-card">
          <div class="dp-widget-info-card-header">
            <div class="${`dp-widget-card-icon ${bgColor}`}">
              <span class="dpicon iconapp-online-clothing"></span>
            </div>
            <div class="dp-widget-card-text">
              <h3>Historial navegación de productos</h3>
            </div>
          </div>
          <div class="dp-widget-card-content"></div>
        </div>
      </div>
    </div>
  `;
};
