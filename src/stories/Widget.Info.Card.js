import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const WidgetInfoCard = ({ bgColor }) => {
  return html`
    <div class="m-b-24">
      <h2>Widget-Info-Card</h2>
      <div class="col-lg-5">
        <div class="dp-widget-info-card">
          <div class="dp-widget-info-card-header">
            <div class="${`dp-widget-card-icon ${bgColor}`}">
              <span class="dpicon iconapp-online-clothing"></span>
            </div>

            <div class="dp-widget-info-card-header-title">
              <h3>Historial de productos</h3>
            </div>

            <div class="dp-switch">
              <input type="checkbox" id="oneCheck1" checked="" />
              <label for="oneCheck1" aria-disabled="false">
                <span></span>
              </label>
            </div>

            <div class="dp-widget-info-card-header-menu">
              <button>
                <div class="dp-dots-menu-icon">
                  <span class="dp-dot"></span>
                  <span class="dp-dot"></span>
                  <span class="dp-dot"></span>
                </div>
              </button>
            </div>
          </div>

          <div class="dp-widget-info-card-data">
            <div class="dp-stat-item">
              <span class="dpicon iconapp-web-eye"></span>
              <div class="dp-stat-text">
                <span class="dp-stat-text-label">Vistas</span>
                <span class="dp-stat-text-value">25</span>
              </div>
            </div>

            <div class="dp-stat-item">
              <span class="dpicon iconapp-finger-tap" title=""></span>
              <div class="dp-stat-text">
                <span class="dp-stat-text-label">Acción</span>
                <span class="dp-stat-text-value">1</span>
              </div>
            </div>

            <div class="dp-stat-item">
              <span class="dpicon iconapp-click"></span>
              <div class="dp-stat-text">
                <span class="dp-stat-text-label">CTR %</span>
                <span class="dp-stat-text-value">0.02</span>
              </div>
            </div>

            <div class="dp-stat-item">
              <span class="dpicon iconapp-approve-calendar"></span>
              <div class="dp-stat-text">
                <span class="dp-stat-text-label">Días</span>
                <span class="dp-stat-text-value">56</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
