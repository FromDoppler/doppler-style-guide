import { html } from "lit-html";

export const WidgetBubble = ({ side, device }) => {
  return html`
    <form class="dp-container awa-form">
      <h2>Configuración de widget</h2>
      <div class="dp-bubble-flex-container">
        <fieldset class="dp-rowflex col-lg-5">
          <ul class="field-group">
            <li class="field-item col-lg-8 col-md-12">
              <label>Ubicación de burbuja</label>
              <div class="dp-bubble-location">
                <label class="dp-location-option">
                  <input
                    class="dp-bubble-input--radio"
                    type="radio"
                    name="bubble-location"
                    value="left"
                    ?checked=${side === "left"}
                  />
                  <div class="dp-location-inner left"></div>
                </label>
                <label class="dp-location-option">
                  <input
                    class="dp-bubble-input--radio"
                    type="radio"
                    name="bubble-location"
                    value="right"
                    ?checked=${side === "right"}
                  />
                  <div class="dp-location-inner right"></div>
                </label>
              </div>
            </li>

            <li class="field-item col-lg-8 col-md-12">
              <label
                for="bubble-text"
                class="labelcontrol"
                aria-disabled="false"
                data-required="false"
              >
                Texto de burbuja
                <input
                  type="text"
                  id="bubble-text"
                  name="bubble-text"
                  placeholder="Ej: Los más vistos"
                  maxlength="20"
                  aria-required="false"
                  aria-placeholder="Ej: Los más vistos"
                  aria-invalid="false"
                />
                <div class="assistance-wrap">
                  <span>Caracteres: 0/20</span>
                </div>
              </label>
            </li>

            <li class="field-item col-lg-8 col-md-12">
              <label>Color de burbuja:</label>
              <div class="dp-bubble-options-container">
                <div class="dp-bubble-color-option">
                  <button type="button" class="dp-color-sample-container">
                    <div
                      class="dp-color-sample"
                      style="background-color: #2a75db"
                    ></div>
                  </button>
                  <span class="dp-bubble-color-text">Color de fondo</span>
                </div>
                <div class="dp-bubble-color-option">
                  <button type="button" class="dp-color-sample-container">
                    <div
                      class="dp-color-sample"
                      style="background-color: #eaeaea"
                    ></div>
                  </button>
                  <span class="dp-bubble-color-text">Color de texto</span>
                </div>
              </div>
            </li>
          </ul>
        </fieldset>
        <div class="col-lg-7">
          <div class="dp-bubble-image-container">
            <button
              type="button"
              class="ms-icon icon-arrow-prev dp-arrow-left"
            ></button>
            <span
              class="dp-desktop-mockup-image"
              style=${`display: ${device === "desktop" ? "block" : "none"}`}
            >
              <button
                type="button"
                class="dp-button button-small button--round widget-button ${side}"
                style="background-color: #2a75db; color: #eaeaea"
              >
                <span class="dpicon iconapp-time-analysis"></span>
                Últimos vistos
              </button>
            </span>
            <span
              class="dp-mobile-mockup-image"
              style=${`display: ${device === "mobile" ? "block" : "none"}`}
            >
              <button
                type="button"
                class="dp-button button-small button--round widget-button ${side}"
                style="background-color: #2a75db; color: #eaeaea"
              >
                <span class="dpicon iconapp-time-analysis"></span>
              </button>
            </span>
            <button
              type="button"
              class="ms-icon icon-arrow-next dp-arrow-right"
            ></button>
          </div>
          <div class="dp-device-selector">
            <label class="dp-device-option">
              <input
                type="radio"
                name="device"
                value="desktop"
                ?checked=${device === "desktop"}
              />
              <span class="dpicon iconapp-monitor dp-device-icon"></span>
              <span class="dp-device-label">Desktop</span>
            </label>
            <label class="dp-device-option">
              <input
                type="radio"
                name="device"
                value="mobile"
                ?checked=${device === "mobile"}
              />
              <span
                class="dpicon iconapp-smartphone dp-device-icon"
                title=""
              ></span>
              <span class="dp-device-label">Mobile</span>
            </label>
          </div>
        </div>
      </div>
    </form>
  `;
};
